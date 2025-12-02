import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Jumbo Mix Bouquet (id: 5)
# Current: images: ["💐", "💜", "💙"],
# Current: colorImages: { "#FF00FF": ["💐", "💜"], "#0000FF": ["💙", "🔵"], "#228B22": ["🌿", "🟢"] }
# New: Use jumbo_bouquet_1.jpg for all for now as we only have one image

jumbo_pattern = r'''        \{
            id: 5,
            name: "Jumbo Mix Bouquet",
            price: 2399,
            description: "Our signature jumbo bouquet featuring a mix of roses, lilies, and greenery. Over 20 stems of various flowers, making a spectacular and lasting impression.",
            images: \["💐", "💜", "💙"\],
            colors: \["#FF00FF", "#0000FF", "#228B22"\],
            colorImages: \{
                "#FF00FF": \["💐", "💜"\],
                "#0000FF": \["💙", "🔵"\],
                "#228B22": \["🌿", "🟢"\]
            \}
        \},'''

jumbo_replacement = '''        {
            id: 5,
            name: "Jumbo Mix Bouquet",
            price: 2399,
            description: "Our signature jumbo bouquet featuring a mix of roses, lilies, and greenery. Over 20 stems of various flowers, making a spectacular and lasting impression.",
            images: ['<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Mix Bouquet">', '<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Mix Bouquet">'],
            colors: ["#FF00FF", "#0000FF", "#228B22"],
            colorImages: {
                "#FF00FF": ['<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">', '<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">'],
                "#0000FF": ['<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">', '<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">'],
                "#228B22": ['<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">', '<img src="images/jumbo_bouquet_1.jpg" alt="Jumbo Bouquet">']
            }
        },'''

content = re.sub(jumbo_pattern, jumbo_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 2. Update Luffy's Straw Hat Keychain (id: 7)
# Current: images: ["👒", "🏴‍☠️", "🍖"],
# Current: colorImages: { "#FFD700": ["👒", "🟡"], "#FF0000": ["🎀", "🔴"] }

luffy_pattern = r'''        \{
            id: 7,
            name: "Luffy's Straw Hat Keychain",
            price: 199,
            description: "A miniature crochet version of Luffy's iconic straw hat from One Piece. Features the signature yellow straw look and red ribbon. Perfect for anime fans.",
            images: \["👒", "🏴‍☠️", "🍖"\],
            colors: \["#FFD700", "#FF0000"\],
            colorImages: \{
                "#FFD700": \["👒", "🟡"\],
                "#FF0000": \["🎀", "🔴"\]
            \}
        \},'''

luffy_replacement = '''        {
            id: 7,
            name: "Luffy's Straw Hat Keychain",
            price: 199,
            description: "A miniature crochet version of Luffy's iconic straw hat from One Piece. Features the signature yellow straw look and red ribbon. Perfect for anime fans.",
            images: ['<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">', '<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">'],
            colors: ["#FFD700", "#FF0000"],
            colorImages: {
                "#FFD700": ['<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">', '<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">'],
                "#FF0000": ['<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">', '<img src="images/luffy_hat_1.jpg" alt="Luffy Hat">']
            }
        },'''

content = re.sub(luffy_pattern, luffy_replacement, content, flags=re.MULTILINE | re.DOTALL)

# 3. Update Jellyfish Keychain (id: 11)
# Current: images: ["🪼", "🌊", "🫧"],
# Current: colorImages: { "#800080": ["🟣", "💜"], "#FFC0CB": ["🌸", "💗"], "#0000FF": ["🔵", "💙"] }

jellyfish_pattern = r'''        \{
            id: 11,
            name: "Jellyfish Keychain",
            price: 249,
            description: "An adorable jellyfish keychain with curly tentacles. Adds a fun, aquatic vibe to your accessories.",
            images: \["🪼", "🌊", "🫧"\],
            colors: \["#800080", "#FFC0CB", "#0000FF"\],
            colorImages: \{
                "#800080": \["🟣", "💜"\],
                "#FFC0CB": \["🌸", "💗"\],
                "#0000FF": \["🔵", "💙"\]
            \}
        \},'''

jellyfish_replacement = '''        {
            id: 11,
            name: "Jellyfish Keychain",
            price: 249,
            description: "An adorable jellyfish keychain with curly tentacles. Adds a fun, aquatic vibe to your accessories.",
            images: ['<img src="images/jellyfish_blue_1.jpg" alt="Blue Jellyfish">', '<img src="images/jellyfish_purple_1.jpg" alt="Purple Jellyfish">', '<img src="images/jellyfish_pink_1.jpg" alt="Pink Jellyfish">'],
            colors: ["#800080", "#FFC0CB", "#0000FF"],
            colorImages: {
                "#800080": ['<img src="images/jellyfish_purple_1.jpg" alt="Purple Jellyfish">', '<img src="images/jellyfish_purple_1.jpg" alt="Purple Jellyfish">'],
                "#FFC0CB": ['<img src="images/jellyfish_pink_1.jpg" alt="Pink Jellyfish">', '<img src="images/jellyfish_pink_1.jpg" alt="Pink Jellyfish">'],
                "#0000FF": ['<img src="images/jellyfish_blue_1.jpg" alt="Blue Jellyfish">', '<img src="images/jellyfish_blue_1.jpg" alt="Blue Jellyfish">']
            }
        },'''

content = re.sub(jellyfish_pattern, jellyfish_replacement, content, flags=re.MULTILINE | re.DOTALL)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated images for Jumbo Bouquet, Luffy Hat, and Jellyfish!")
