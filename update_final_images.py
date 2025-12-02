import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Sunflower Bouquet (id: 1)
# Current: images: ["🌻", "🟡", "🟢"],
# Current: colorImages: { "#FFD700": ["🌻", "🟡"], "#8B4513": ["🌰", "🟤"], "#228B22": ["🟢", "🌿"] }

sunflower_pattern = r'''        \{
            id: 1,
            name: "Sunflower Bouquet",
            price: 839,
            description: "A bright and cheerful bouquet of five handcrafted sunflowers. Made with pure yellow and dark brown yarn. Perfect for adding a permanent dose of sunshine to any room.",
            images: \["🌻", "🟡", "🟢"\],
            colors: \["#FFD700", "#8B4513", "#228B22"\],
            colorImages: \{
                "#FFD700": \["🌻", "🟡"\],
                "#8B4513": \["🌰", "🟤"\],
                "#228B22": \["🟢", "🌿"\]
            \}
        \},'''

sunflower_replacement = '''        {
            id: 1,
            name: "Sunflower Bouquet",
            price: 839,
            description: "A bright and cheerful bouquet of five handcrafted sunflowers. Made with pure yellow and dark brown yarn. Perfect for adding a permanent dose of sunshine to any room.",
            images: ['<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">', '<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">'],
            colors: ["#FFD700", "#8B4513", "#228B22"],
            colorImages: {
                "#FFD700": ['<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">', '<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">'],
                "#8B4513": ['<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">', '<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">'],
                "#228B22": ['<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">', '<img src="images/sunflower_bouquet_1.jpg" alt="Sunflower Bouquet">']
            }
        },'''

content = re.sub(sunflower_pattern, sunflower_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 2. Update Mini Red Rose Set (id: 3)
# Current: images: ["🌹", "❤️", "🌿"],
# Current: colorImages: { "#FF0000": ["🌹", "❤️"], "#8B0000": ["🥀", "♥️"], "#228B22": ["🌿", "🟢"] }

mini_rose_pattern = r'''        \{
            id: 3,
            name: "Mini Red Rose Set",
            price: 429,
            description: "Three detailed mini red roses. Excellent for gifting or as table decor. Each petal is individually crocheted for a realistic look. True love that never fades.",
            images: \["🌹", "❤️", "🌿"\],
            colors: \["#FF0000", "#8B0000", "#228B22"\],
            colorImages: \{
                "#FF0000": \["🌹", "❤️"\],
                "#8B0000": \["🥀", "♥️"\],
                "#228B22": \["🌿", "🟢"\]
            \}
        \},'''

mini_rose_replacement = '''        {
            id: 3,
            name: "Mini Red Rose Set",
            price: 429,
            description: "Three detailed mini red roses. Excellent for gifting or as table decor. Each petal is individually crocheted for a realistic look. True love that never fades.",
            images: ['<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">', '<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">'],
            colors: ["#FF0000", "#8B0000", "#228B22"],
            colorImages: {
                "#FF0000": ['<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">', '<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">'],
                "#8B0000": ['<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">', '<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">'],
                "#228B22": ['<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">', '<img src="images/rose_mini_red_1.jpg" alt="Mini Red Rose">']
            }
        },'''

content = re.sub(mini_rose_pattern, mini_rose_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 3. Update Single Black Rose (id: 6)
# Current: images: ["🥀", "⚫", "👻"],
# Current: colorImages: { "#000000": ["🥀", "⚫"], "#333333": ["🌑", "⬛"] }

black_rose_pattern = r'''        \{
            id: 6,
            name: "Single Black Rose",
            price: 299,
            description: "A single, dramatic black rose. A unique statement piece symbolizing mystery and passion. Comes with a wire stem for easy posing.",
            images: \["🥀", "⚫", "👻"\],
            colors: \["#000000", "#333333"\],
            colorImages: \{
                "#000000": \["🥀", "⚫"\],
                "#333333": \["🌑", "⬛"\]
            \}
        \},'''

black_rose_replacement = '''        {
            id: 6,
            name: "Single Black Rose",
            price: 299,
            description: "A single, dramatic black rose. A unique statement piece symbolizing mystery and passion. Comes with a wire stem for easy posing.",
            images: ['<img src="images/rose_black_1.jpg" alt="Black Rose">', '<img src="images/rose_black_1.jpg" alt="Black Rose">'],
            colors: ["#000000", "#333333"],
            colorImages: {
                "#000000": ['<img src="images/rose_black_1.jpg" alt="Black Rose">', '<img src="images/rose_black_1.jpg" alt="Black Rose">'],
                "#333333": ['<img src="images/rose_black_1.jpg" alt="Black Rose">', '<img src="images/rose_black_1.jpg" alt="Black Rose">']
            }
        },'''

content = re.sub(black_rose_pattern, black_rose_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 4. Update Wild Mushroom Keychain (id: 9)
# Current: images: ["🍄", "🌈", "✨"],
# Current: colorImages: { "#228B22": ["🟢", "🌿"], "#FFFF00": ["🟡", "⭐"], "#800080": ["🟣", "💜"], "#0000FF": ["🔵", "💙"], "#FF4500": ["🟠", "🔶"] }

wild_mushroom_pattern = r'''        \{
            id: 9,
            name: "Wild Mushroom Keychain",
            price: 179,
            description: "Slightly larger wild mushroom keychains available in various vibrant colors. Choose your favorite to match your style.",
            images: \["🍄", "🌈", "✨"\],
            colors: \["#228B22", "#FFFF00", "#800080", "#0000FF", "#FF4500"\],
            colorImages: \{
                "#228B22": \["🟢", "🌿"\],
                "#FFFF00": \["🟡", "⭐"\],
                "#800080": \["🟣", "💜"\],
                "#0000FF": \["🔵", "💙"\],
                "#FF4500": \["🟠", "🔶"\]
            \}
        \},'''

wild_mushroom_replacement = '''        {
            id: 9,
            name: "Wild Mushroom Keychain",
            price: 179,
            description: "Slightly larger wild mushroom keychains available in various vibrant colors. Choose your favorite to match your style.",
            images: ['<img src="images/mushroom_green_1.jpg" alt="Green Mushroom">', '<img src="images/mushroom_blue_1.jpg" alt="Blue Mushroom">'],
            colors: ["#228B22", "#0000FF", "#FFFF00", "#800080", "#FF4500"],
            colorImages: {
                "#228B22": ['<img src="images/mushroom_green_1.jpg" alt="Green Mushroom">', '<img src="images/mushroom_green_1.jpg" alt="Green Mushroom">'],
                "#0000FF": ['<img src="images/mushroom_blue_1.jpg" alt="Blue Mushroom">', '<img src="images/mushroom_blue_1.jpg" alt="Blue Mushroom">'],
                "#FFFF00": ['<img src="images/mushroom_green_1.jpg" alt="Green Mushroom">'], // Placeholder
                "#800080": ['<img src="images/mushroom_blue_1.jpg" alt="Blue Mushroom">'], // Placeholder
                "#FF4500": ['<img src="images/mushroom_green_1.jpg" alt="Green Mushroom">'] // Placeholder
            }
        },'''

content = re.sub(wild_mushroom_pattern, wild_mushroom_replacement, content, flags=re.MULTILINE | re.DOTALL)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated images for Sunflower, Mini Rose, Black Rose, and Wild Mushroom!")
