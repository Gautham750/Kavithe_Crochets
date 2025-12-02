import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the color selection event listener
# Look for the pattern and replace it
pattern = r'''    // 3\. Color Selection
    detailColors\.addEventListener\('click', \(event\) => \{
        if \(event\.target\.classList\.contains\('color-swatch'\)\) \{
            // Deselect all
            document\.querySelectorAll\('\.color-swatch'\)\.forEach\(el => el\.classList\.remove\('selected'\)\);
            // Select clicked
            event\.target\.classList\.add\('selected'\);
            
            // Update selected color
            selectedColor = event\.target\.dataset\.color;
            
            // Update images based on selected color
            if \(currentDetailProduct && currentDetailProduct\.colorImages && currentDetailProduct\.colorImages\[selectedColor\]\) \{
                renderDetailSlider\(currentDetailProduct\.colorImages\[selectedColor\]\);
            \}
        \}
    \}\);'''

replacement = '''    // 3. Color Selection
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

content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed color selection logic!")
