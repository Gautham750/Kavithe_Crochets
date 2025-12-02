document.addEventListener('DOMContentLoaded', () => {
    // --- Initial Setup ---
    const products = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
            id: 4,
            name: "Daisy Pot",
            price: 699,
            description: "A small, delightful daisy plant permanently 'potted' in a mini crochet basket. Requires zero care and adds a rustic charm to your desk or window sill.",
            images: ['<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">', '<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">'],
            colors: ["#FFFFFF"],
            colorImages: {
                "#FFFFFF": ['<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">', '<img src="images/daisy_pot_1.jpg" alt="Daisy Pot">']
            }
        },
        {
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
        },
        {
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
        },
        // New Products
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
    ];

    let cart = [];
    let currentDetailProduct = null;
    let selectedColor = null;
    let cartHasBeenOpenedBefore = false;

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
        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.id = product.id;

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

    // Renders the detail image slider with all images
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
        const wasEmpty = cart.length === 0;
        const existingItem = cart.find(item => item.id === productId && item.color === color);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1, color: color });
        }

        updateCartDisplay();

        // Only open cart if it was empty before AND hasn't been auto-opened before
        if (wasEmpty && !cartHasBeenOpenedBefore) {
            openCart();
            cartHasBeenOpenedBefore = true;
        }
    };

    // --- Detail View Logic ---

    const openProductDetails = (product) => {
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

    const closeProductDetails = () => {
        productDetailsView.classList.add('hidden');
        document.body.style.overflow = '';
        currentDetailProduct = null;
        selectedColor = null;
    };

    // --- Event Handlers ---

    // 1. Product Card Click
    productGrid.addEventListener('click', (event) => {
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

            // Update selected color
            selectedColor = event.target.dataset.color;

            // Scroll to first image of this color
            const firstImageOfColor = detailImageGallery.querySelector(`[data-color="${selectedColor}"]`);
            if (firstImageOfColor) {
                firstImageOfColor.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    });

    // 4. Add to Cart (Detail View)
    detailAddToCartBtn.addEventListener('click', () => {
        if (currentDetailProduct) {
            addItemToCart(currentDetailProduct.id, selectedColor);
        }
    });

    // 5. Remove from Cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item-btn')) {
            const button = event.target.closest('.remove-item-btn');
            const productId = parseInt(button.dataset.id);
            const color = button.dataset.color || null;

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
        if (productDetailsView.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeCart = () => {
        sideCart.classList.remove('open');
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