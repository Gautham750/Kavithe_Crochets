import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Pink Tulip Bouquet (id: 2)
# Current: images: ["🌷", "🌸", "🌱"],
# Current: colorImages: { "#FF69B4": ["🌷", "💗"], "#FFC0CB": ["🌸", "💕"], "#228B22": ["🌱", "🟢"] }

tulip_pattern = r'''        \{
            id: 2,
            name: "Pink Tulip Bouquet",
            price: 1499,
            description: "An elegant set of twelve pink tulips, symbolizing perfect love. The long, flexible stems allow for beautiful arrangement in any vase. A stunning, maintenance-free centerpiece.",
            images: \["🌷", "🌸", "🌱"\],
            colors: \["#FF69B4", "#FFC0CB", "#228B22"\],
            colorImages: \{
                "#FF69B4": \["🌷", "💗"\],
                "#FFC0CB": \["🌸", "💕"\],
                "#228B22": \["🌱", "🟢"\]
            \}
        \},'''

tulip_replacement = '''        {
            id: 2,
            name: "Pink Tulip Bouquet",
            price: 1499,
            description: "An elegant set of twelve pink tulips, symbolizing perfect love. The long, flexible stems allow for beautiful arrangement in any vase. A stunning, maintenance-free centerpiece.",
            images: ['<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">', '<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">'],
            colors: ["#FF69B4", "#FFC0CB", "#228B22"],
            colorImages: {
                "#FF69B4": ['<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">', '<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">'],
                "#FFC0CB": ['<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">', '<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">'],
                "#228B22": ['<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">', '<img src="images/tulip_pink_1.jpg" alt="Pink Tulip">']
            }
        },'''

content = re.sub(tulip_pattern, tulip_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 2. Update Red Mushroom Keychain (id: 8)
# Current: images: ["🍄", "🔴", "⚪"],
# Current: colorImages: { "#FF0000": ["🍄", "🔴"], "#FFFFFF": ["⚪", "⬜"] }

mushroom_pattern = r'''        \{
            id: 8,
            name: "Red Mushroom Keychain",
            price: 149,
            description: "A cute red mushroom keychain with white polka dots. Handcrafted with soft yarn, perfect for adding a touch of whimsy to your keys or bag.",
            images: \["🍄", "🔴", "⚪"\],
            colors: \["#FF0000", "#FFFFFF"\],
            colorImages: \{
                "#FF0000": \["🍄", "🔴"\],
                "#FFFFFF": \["⚪", "⬜"\]
            \}
        \},'''

mushroom_replacement = '''        {
            id: 8,
            name: "Red Mushroom Keychain",
            price: 149,
            description: "A cute red mushroom keychain with white polka dots. Handcrafted with soft yarn, perfect for adding a touch of whimsy to your keys or bag.",
            images: ['<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">', '<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">'],
            colors: ["#FF0000", "#FFFFFF"],
            colorImages: {
                "#FF0000": ['<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">', '<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">'],
                "#FFFFFF": ['<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">', '<img src="images/mushroom_red_1.jpg" alt="Red Mushroom">']
            }
        },'''

content = re.sub(mushroom_pattern, mushroom_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 3. Update Owl Keychain (id: 12)
# Current: images: ["🦉", "🌙", "📚"],
# Current: colorImages: { "#800080": ["🟣", "💜"], "#FFFF00": ["🟡", "⭐"], "#FFC0CB": ["🌸", "💗"] }

owl_pattern = r'''        \{
            id: 12,
            name: "Owl Keychain",
            price: 299,
            description: "A wise and cute little owl keychain with big eyes. Intricately crocheted with attention to detail.",
            images: \["🦉", "🌙", "📚"\],
            colors: \["#800080", "#FFFF00", "#FFC0CB"\],
            colorImages: \{
                "#800080": \["🟣", "💜"\],
                "#FFFF00": \["🟡", "⭐"\],
                "#FFC0CB": \["🌸", "💗"\]
            \}
        \}'''

owl_replacement = '''        {
            id: 12,
            name: "Owl Keychain",
            price: 299,
            description: "A wise and cute little owl keychain with big eyes. Intricately crocheted with attention to detail.",
            images: ['<img src="images/owl_green_1.jpg" alt="Green Owl">', '<img src="images/owl_purple_1.jpg" alt="Purple Owl">', '<img src="images/owl_yellow_1.jpg" alt="Yellow Owl">'],
            colors: ["#228B22", "#800080", "#FFFF00"],
            colorImages: {
                "#228B22": ['<img src="images/owl_green_1.jpg" alt="Green Owl">', '<img src="images/owl_green_1.jpg" alt="Green Owl">'],
                "#800080": ['<img src="images/owl_purple_1.jpg" alt="Purple Owl">', '<img src="images/owl_purple_1.jpg" alt="Purple Owl">'],
                "#FFFF00": ['<img src="images/owl_yellow_1.jpg" alt="Yellow Owl">', '<img src="images/owl_yellow_1.jpg" alt="Yellow Owl">']
            }
        }'''

content = re.sub(owl_pattern, owl_replacement, content, flags=re.MULTILINE | re.DOTALL)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated images for Pink Tulip, Red Mushroom, and Owl Keychain!")
