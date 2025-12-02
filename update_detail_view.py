import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the renderDetailSlider function
old_render = '''    // Renders the detail image slider
    const renderDetailSlider = (images) => {
        const sliderContent = images.map(img =>
            `<div class="detail-slider-image">${img}</div>`
        ).join('');
        detailImageGallery.innerHTML = sliderContent;
    };'''

new_render = '''    // Renders the detail image slider with all images
    const renderDetailSlider = (allImagesData) => {
        const sliderContent = allImagesData.map((imgData, index) =>
            `<div class="detail-slider-image" data-color="${imgData.color}" data-index="${index}">${imgData.image}</div>`
        ).join('');
        detailImageGallery.innerHTML = sliderContent;
        
        // Disable scroll snap if only one image
        if (allImagesData.length === 1) {
            detailImageGallery.style.overflowX = 'hidden';
            detailImageGallery.style.scrollSnapType = 'none';
        } else {
            detailImageGallery.style.overflowX = 'auto';
            detailImageGallery.style.scrollSnapType = 'x mandatory';
        }
    };'''

content = content.replace(old_render, new_render)

# Find and replace the openProductDetails function - this is trickier, need to find the whole function
# Look for the pattern starting with "const openProductDetails" and ending before "const closeProductDetails"
pattern = r'(    const openProductDetails = \(product\) => \{[\s\S]*?)(    const closeProductDetails)'

def replacement(match):
    return '''    const openProductDetails = (product) => {
        currentDetailProduct = product;
        selectedColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;

        // Populate Info
        detailName.textContent = product.name;
        detailPrice.textContent = `₹ ${product.price.toLocaleString('en-IN')}`;
        detailDescription.textContent = product.description;

        // Build complete image array with all colors
        let allImagesData = [];
        if (product.colorImages && Object.keys(product.colorImages).length > 0) {
            // Combine all color images
            product.colors.forEach(color => {
                const colorImgs = product.colorImages[color] || [];
                colorImgs.forEach(img => {
                    allImagesData.push({ image: img, color: color });
                });
            });
        } else {
            // No color variants, just use regular images
            product.images.forEach(img => {
                allImagesData.push({ image: img, color: null });
            });
        }
        
        renderDetailSlider(allImagesData);

        // Populate Colors
        if (product.colors && product.colors.length > 0) {
            detailColors.innerHTML = product.colors.map((color, index) =>
                `<div class="color-swatch ${index === 0 ? 'selected' : ''}" style="background-color: ${color};" data-color="${color}"></div>`
            ).join('');
            document.querySelector('.color-selection-container').style.display = 'block';
        } else {
            detailColors.innerHTML = '';
            document.querySelector('.color-selection-container').style.display = 'none';
        }

        // Show View
        productDetailsView.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

''' + match.group(2)

content = re.sub(pattern, replacement, content)

# Update color selection logic
old_color_logic = '''    // 3. Color Selection
    detailColors.addEventListener('click', (event) => {
        if (event.target.classList.contains('color-swatch')) {
            // Deselect all
            document.querySelectorAll('.color-swatch').forEach(el => el.classList.remove('selected'));
            // Select clicked
            event.target.classList.add('selected');
            
            // Update selected color
            selectedColor = event.target.dataset.color;
            
            // Update images based on selected color
            if (currentDetailProduct && currentDetailProduct.colorImages && currentDetailProduct.colorImages[selectedColor]) {
                renderDetailSlider(currentDetailProduct.colorImages[selectedColor]);
            }
        }
    });'''

new_color_logic = '''    // 3. Color Selection
    detailColors.addEventListener('click', (event) => {
        if (event.target.classList.contains('color-swatch')) {
            // Deselect all
            document.querySelectorAll('.color-swatch').forEach(el => el.classList.remove('selected'));
            // Select clicked
            event.target.classList.add('selected');
            
            // Update selected color
            selectedColor = event.target.dataset.color;
            
            // Scroll to first image of this color
            const firstImageOfColor = detailImageGallery.querySelector(`[data-color="${selectedColor}"]`);
            if (firstImageOfColor) {
                firstImageOfColor.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    });'''

content = content.replace(old_color_logic, new_color_logic)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated successfully!")
