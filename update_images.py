# Update product images in script.js
import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Daisy Pot replacement
daisy_old = '''        {
            id: 4,
            name: "Daisy Pot",
            price: 699,
            description: "A small, delightful daisy plant permanently 'potted' in a mini crochet basket. Requires zero care and adds a rustic charm to your desk or window sill.",
            images: ["🌼", "⚪", "🧺"],
            colors: ["#FFFFFF", "#FFFF00", "#D2B48C"],
            colorImages: {
                "#FFFFFF": ["🌼", "⚪"],
                "#FFFF00": ["🟡", "⭐"],
                "#D2B48C": ["🧺", "🟫"]
            }
        },'''

daisy_new = '''        {
            id: 4,
            name: "Daisy Pot",
            price: 699,
            description: "A small, delightful daisy plant permanently 'potted' in a mini crochet basket. Requires zero care and adds a rustic charm to your desk or window sill.",
            images: ['<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">', '<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">'],
            colors: ["#FFFFFF"],
            colorImages: {
                "#FFFFFF": ['<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">', '<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">']
            }
        },'''

# Heart Keychain replacement
heart_old = '''        {
            id: 10,
            name: "Heart Keychain",
            price: 129,
            description: "A puffy, soft crochet heart keychain. A sweet little gift for yourself or a loved one.",
            images: ["❤️", "💖", "💝"],
            colors: ["#FFFFFF", "#FFC0CB", "#FF0000", "#800080", "#0000FF"],
            colorImages: {
                "#FFFFFF": ["🤍", "⚪"],
                "#FFC0CB": ["💗", "🌸"],
                "#FF0000": ["❤️", "💝"],
                "#800080": ["💜", "🟣"],
                "#0000FF": ["💙", "🔵"]
            }
        },'''

heart_new = '''        {
            id: 10,
            name: "Heart Keychain",
            price: 129,
            description: "A puffy, soft crochet heart keychain. A sweet little gift for yourself or a loved one.",
            images: ['<img src="images/heart_white_1.jpg" alt="Heart Keychain">', '<img src="images/heart_pink_1.jpg" alt="Heart Keychain">', '<img src="images/heart_red_1.jpg" alt="Heart Keychain">'],
            colors: ["#FFFFFF", "#FFC0CB", "#FF0000", "#800080"],
            colorImages: {
                "#FFFFFF": ['<img src="images/heart_white_1.jpg" alt="White Heart">', '<img src="images/heart_white_1.jpg" alt="White Heart">'],
                "#FFC0CB": ['<img src="images/heart_pink_1.jpg" alt="Pink Heart">', '<img src="images/heart_pink_1.jpg" alt="Pink Heart">'],
                "#FF0000": ['<img src="images/heart_red_1.jpg" alt="Red Heart">', '<img src="images/heart_red_1.jpg" alt="Red Heart">'],
                "#800080": ['<img src="images/heart_purple_1.jpg" alt="Purple Heart">', '<img src="images/heart_purple_1.jpg" alt="Purple Heart">']
            }
        },'''

# Replace
content = content.replace(daisy_old, daisy_new)
content = content.replace(heart_old, heart_new)

# Write back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated successfully!")
