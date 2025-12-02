import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the openProductDetails function to add a check
# We need to find the section that builds allImagesData and add a filter

pattern = r'''        // Build complete image array with all colors
        let allImagesData = \[\];
        if \(product\.colorImages && Object\.keys\(product\.colorImages\)\.length > 0\) \{
            // Combine all color images
            product\.colors\.forEach\(color => \{
                const colorImgs = product\.colorImages\[color\] \|\| \[\];
                colorImgs\.forEach\(img => \{
                    allImagesData\.push\(\{ image: img, color: color \}\);
                \}\);
            \}\);
        \} else \{
            // No color variants, just use regular images
            product\.images\.forEach\(img => \{
                allImagesData\.push\(\{ image: img, color: null \}\);
            \}\);
        \}'''

replacement = '''        // Build complete image array with all colors
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
        }'''

content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed undefined image issue!")
