document.addEventListener('DOMContentLoaded', () => {
    // --- Initial Setup ---
    const products = [
        {
            id: 1,
            name: "Sunflower Bouquet",
            price: 839,
            description: "A bright and cheerful bouquet of five handcrafted sunflowers. Made with pure yellow and dark brown yarn. Perfect for adding a permanent dose of sunshine to any room.",
            images: ["🌻", "🟡", "🟢"],
            colors: ["#FFD700", "#8B4513", "#228B22"]
        },
        {
            id: 2,
            name: "Pink Tulip Bouquet",
            price: 1499,
            description: "An elegant set of twelve pink tulips, symbolizing perfect love. The long, flexible stems allow for beautiful arrangement in any vase. A stunning, maintenance-free centerpiece.",
            images: ["🌷", "🌸", "🌱"],
            colors: ["#FF69B4", "#FFC0CB", "#228B22"]
        },
        {
            id: 3,
            name: "Mini Red Rose Set",
            price: 429,
            description: "Three detailed mini red roses. Excellent for gifting or as table decor. Each petal is individually crocheted for a realistic look. True love that never fades.",
            images: ["🌹", "❤️", "🌿"],
            colors: ["#FF0000", "#8B0000", "#228B22"]
        },
        {
            id: 4,
            name: "Daisy Pot",
            price: 699,
            description: "A small, delightful daisy plant permanently 'potted' in a mini crochet basket. Requires zero care and adds a rustic charm to your desk or window sill.",
            images: ["🌼", "⚪", "🧺"],
            colors: ["#FFFFFF", "#FFFF00", "#D2B48C"]
        },
        {
            id: 5,
            name: "Jumbo Mix Bouquet",
            price: 2399,
            description: "Our signature jumbo bouquet featuring a mix of roses, lilies, and greenery. Over 20 stems of various flowers, making a spectacular and lasting impression.",
            images: ["💐", "💜", "💙"],
            colors: ["#FF00FF", "#0000FF", "#228B22"]
        },
        {
            id: 6,
            name: "Single Black Rose",
            price: 299,
            description: "A single, dramatic black rose. A unique statement piece symbolizing mystery and passion. Comes with a wire stem for easy posing.",
            images: ["🥀", "⚫", "👻"],
            colors: ["#000000", "#333333"]
        },
        // New Products
        {
            id: 7,
            name: "Luffy's Straw Hat Keychain",
            price: 199,
            description: "A miniature crochet version of Luffy's iconic straw hat from One Piece. Features the signature yellow straw look and red ribbon. Perfect for anime fans.",
            images: ["👒", "🏴‍☠️", "🍖"],
            colors: ["#FFD700", "#FF0000"]
        },
        {
            id: 8,
            name: "Red Mushroom Keychain",
            price: 149,
            description: "A cute red mushroom keychain with white polka dots. Handcrafted with soft yarn, perfect for adding a touch of whimsy to your keys or bag.",
            images: ["🍄", "🔴", "⚪"],
            colors: ["#FF0000", "#FFFFFF"]
        },
        {
            id: 9,
            name: "Wild Mushroom Keychain",
            price: 179,
            description: "Slightly larger wild mushroom keychains available in various vibrant colors. Choose your favorite to match your style.",
            images: ["🍄", "🌈", "✨"],
            colors: ["#228B22", "#FFFF00", "#800080", "#0000FF", "#FF4500"] // Green, Yellow, Purple, Blue, Orange
        },
        {
            id: 10,
            name: "Heart Keychain",
            price: 129,
            description: "A puffy, soft crochet heart keychain. A sweet little gift for yourself or a loved one.",
            images: ["❤️", "💖", "💝"],
            colors: ["#FFFFFF", "#FFC0CB", "#FF0000", "#800080", "#0000FF"] // White, Pink, Red, Purple, Blue
        },
        {
            id: 11,
            name: "Jellyfish Keychain",
            price: 249,
            description: "An adorable jellyfish keychain with curly tentacles. Adds a fun, aquatic vibe to your accessories.",
            images: ["🪼", "🌊", "🫧"],
            colors: ["#800080", "#FFC0CB", "#0000FF"] // Purple, Pink, Blue
        },
        {
            id: 12,
            name: "Owl Keychain",
            price: 299,
            description: "A wise and cute little owl keychain with big eyes. Intricately crocheted with attention to detail.",
            images: ["🦉", "🌙", "📚"],
            colors: ["#800080", "#FFFF00", "#FFC0CB"] // Purple, Yellow, Pink
        }
    ];

    let cart = [];
    let currentDetailProduct = null;

    const productGrid = document.querySelector('.product-grid');
    const cartCountElement = document.getElementById('cart-count');
    const sideCart = document.getElementById('side-cart');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.querySelector('.checkout-btn');

    // Detail View Elements
    const productDetailsView = document.getElementById('product-details-view');
    const backToShopBtn = document.getElementById('back-to-shop-btn');
    const detailName = document.getElementById('detail-name');
    const detailPrice = document.getElementById('detail-price');
    const detailDescription = document.getElementById('detail-description');
    const detailColors = document.getElementById('detail-colors');
    const detailImageGallery = document.querySelector('.details-image-gallery');
    const detailAddToCartBtn = document.getElementById('detail-add-to-cart-btn');

    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Core Functions ---

    // Renders the product cards to the main shop page
    const renderProducts = () => {
        productGrid.innerHTML = ''; // Clear existing content
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.id = product.id;

            // Create slider HTML
            // Note: Using placeholders (emoji) for now. 
            // In real app, these would be <img> tags with src from product.images
            const sliderContent = product.images.map(img =>
                `<div class="slider-image">${img}</div>`
            ).join('');

            card.innerHTML = `
                <div class="product-image-slider">
                    ${sliderContent}
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="price">₹ ${product.price.toLocaleString('en-IN')}</p>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    // Renders the cart sidebar contents
    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p id="empty-cart-message">Your bag is empty.</p>';
            checkoutButton.disabled = true;
        } else {
            checkoutButton.disabled = false;

            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    total += product.price * item.quantity;

                    const cartItemEl = document.createElement('div');
                    cartItemEl.className = 'cart-item';
                    cartItemEl.innerHTML = `
                        <div class="item-details">
                            <span>${product.name}</span>
                            <span>${item.quantity} x ₹ ${product.price.toLocaleString('en-IN')}</span>
                            ${item.color ? `<span style="font-size: 0.8rem; color: #666;">Color: <span style="display:inline-block; width:10px; height:10px; background:${item.color}; border-radius:50%;"></span></span>` : ''}
                        </div>
                        <button class="remove-item-btn" data-id="${product.id}" data-color="${item.color || ''}" title="Remove Item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    `;
                    cartItemsContainer.appendChild(cartItemEl);
                }
            });
        }

        cartTotalElement.textContent = `₹ ${total.toLocaleString('en-IN')}`;
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    // Function to add an item to the cart
    const addItemToCart = (productId, color = null) => {
        // Check if item with same ID AND same color exists
        const existingItem = cart.find(item => item.id === productId && item.color === color);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1, color: color });
        }

        updateCartDisplay();
        openCart();
    };

    // --- Detail View Logic ---

    const openProductDetails = (product) => {
        currentDetailProduct = product;

        // Populate Info
        detailName.textContent = product.name;
        detailPrice.textContent = `₹ ${product.price.toLocaleString('en-IN')}`;
        detailDescription.textContent = product.description;

        // Populate Images (Grid Layout)
        detailImageGallery.innerHTML = product.images.map((img, index) => {
            // First image gets a special class if needed, or just grid layout handles it
            const className = index === 0 ? 'main-img' : '';
            return `<div class="${className}">${img}</div>`; // Using placeholder text/emoji as image
        }).join('');

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
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeProductDetails = () => {
        productDetailsView.classList.add('hidden');
        document.body.style.overflow = '';
        currentDetailProduct = null;
    };

    // --- Event Handlers ---

    // 1. Product Card Click
    productGrid.addEventListener('click', (event) => {
        // Allow swiping on slider without triggering click if possible, 
        // but for now, any click on the card opens details (unless it's a specific interactive element)
        const card = event.target.closest('.product-card');
        if (card) {
            const productId = parseInt(card.dataset.id);
            const product = products.find(p => p.id === productId);
            if (product) {
                openProductDetails(product);
            }
        }
    });

    // 2. Back Button
    backToShopBtn.addEventListener('click', closeProductDetails);

    // 3. Color Selection
    detailColors.addEventListener('click', (event) => {
        if (event.target.classList.contains('color-swatch')) {
            // Deselect all
            document.querySelectorAll('.color-swatch').forEach(el => el.classList.remove('selected'));
            // Select clicked
            event.target.classList.add('selected');
        }
    });

    // 4. Add to Cart (Detail View)
    detailAddToCartBtn.addEventListener('click', () => {
        if (currentDetailProduct) {
            let selectedColor = null;
            const selectedSwatch = detailColors.querySelector('.color-swatch.selected');
            if (selectedSwatch) {
                selectedColor = selectedSwatch.dataset.color;
            }

            addItemToCart(currentDetailProduct.id, selectedColor);
            // Optional: Close details view after adding? Or keep open?
            // H&M usually keeps it open or shows a mini cart. We show mini cart (side cart).
        }
    });

    // 5. Remove from Cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item-btn')) {
            const button = event.target.closest('.remove-item-btn');
            const productId = parseInt(button.dataset.id);
            const color = button.dataset.color || null; // Handle null/empty string

            // Remove specific item variant
            cart = cart.filter(item => !(item.id === productId && item.color === color));

            updateCartDisplay();
            if (cart.length === 0) closeCart();
        }
    });

    // 6. Cart Open/Close
    const openCart = () => {
        sideCart.classList.remove('hidden');
        overlay.classList.remove('hidden');
        setTimeout(() => sideCart.classList.add('open'), 10);
        // Don't disable scroll if we are already in detail view (which disables it)
        if (productDetailsView.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeCart = () => {
        sideCart.classList.remove('open');
        // Only hide overlay if we are NOT in detail view (because detail view covers everything anyway, 
        // but if we treat detail view as a "page", we don't need overlay for it. 
        // However, overlay is used for side cart.

        // If detail view is OPEN, overlay should remain HIDDEN (z-index issue?)
        // Actually, detail view is z-index 110, overlay is 150. 
        // We want overlay ON TOP of detail view when cart is open.

        overlay.classList.add('hidden');

        if (productDetailsView.classList.contains('hidden')) {
            document.body.style.overflow = '';
        }

        setTimeout(() => sideCart.classList.add('hidden'), 300);
    };

    document.getElementById('view-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);

    // Overlay Click
    overlay.addEventListener('click', () => {
        closeCart();
    });

    // 7. Checkout
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your order!');
        cart = [];
        updateCartDisplay();
        closeCart();
    });

    // --- Initial Call ---
    renderProducts();
    updateCartDisplay();
});