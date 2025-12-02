# Complete fix for script.js - all changes in one script

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix renderDetailSlider to handle undefined safely
content = content.replace(
   '''    // Renders the detail image slider
    const renderDetailSlider = (images) => {
        const sliderContent = images.map(img =>
            `<div class="detail-slider-image">${img}</div>`
        ).join('');
        detailImageGallery.innerHTML = sliderContent;
    };''',
    '''    // Renders the detail image slider with all images
    const renderDetailSlider = (allImagesData) => {
        const sliderContent = allImagesData.map((imgData, index) => {
            const imageContent = imgData && imgData.image ? imgData.image : '';
            const colorAttr = imgData && imgData.color ? imgData.color : '';
            return `<div class="detail-slider-image" data-color="${colorAttr}" data-index="${index}">${imageContent}</div>`;
        }).join('');
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
)

# 2. Fix openProductDetails to build complete image array
content = content.replace(
    '''        // Populate Images (use color-specific images if available)
        const imagesToShow = (selectedColor && product.colorImages && product.colorImages[selectedColor])
            ? product.colorImages[selectedColor]
            : product.images;
        renderDetailSlider(imagesToShow);''',
    '''        // Build complete image array with all colors
        let allImagesData = [];
        if (product.colorImages && Object.keys(product.colorImages).length > 0) {
            // Combine all color images
            product.colors.forEach(color => {
                const colorImgs = product.colorImages[color] || [];
                colorImgs.forEach(img => {
                    // Only add if image is not undefined
                    if (img && img !== 'undefined') {
                        allImagesData.push({ image: img, color: color });
                    }
                });
            });
        } else {
            // No color variants, just use regular images
            product.images.forEach(img => {
                if (img && img !== 'undefined') {
                    allImagesData.push({ image: img, color: null });
                }
            });
        }
        
        renderDetailSlider(allImagesData);'''
)

# 3. Fix color selection to scroll instead of re-rendering
content = content.replace(
    '''            // Update images based on selected color
            if (currentDetailProduct && currentDetailProduct.colorImages && currentDetailProduct.colorImages[selectedColor]) {
                renderDetailSlider(currentDetailProduct.colorImages[selectedColor]);
            }''',
    '''            // Scroll to first image of this color
            const firstImageOfColor = detailImageGallery.querySelector(`[data-color="${selectedColor}"]`);
            if (firstImageOfColor) {
                firstImageOfColor.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }'''
)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("All fixes applied successfully!")
