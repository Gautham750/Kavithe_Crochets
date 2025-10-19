document.addEventListener('DOMContentLoaded', () => {
    // --- Initial Setup ---
    const products = [
        { 
            id: 1, 
            name: "Sunflower Bouquet", 
            price: 839, 
            image: "🌻", 
            description: "A bright and cheerful bouquet of five handcrafted sunflowers. Made with pure yellow and dark brown yarn. Perfect for adding a permanent dose of sunshine to any room.",
            gallery: ["🌻", "🟡", "🟢"] 
        },
        { 
            id: 2, 
            name: "Pink Tulip Bouquet", 
            price: 1499, 
            image: "🌷", 
            description: "An elegant set of twelve pink tulips, symbolizing perfect love. The long, flexible stems allow for beautiful arrangement in any vase. A stunning, maintenance-free centerpiece.",
            gallery: ["🌷", "🌸", "🌱"]
        },
        { 
            id: 3, 
            name: "Mini Red Rose Set", 
            price: 429, 
            image: "🌹", 
            description: "Three detailed mini red roses. Excellent for gifting or as table decor. Each petal is individually crocheted for a realistic look. True love that never fades.",
            gallery: ["🌹", "❤️", "🌿"]
        },
        { 
            id: 4, 
            name: "Daisy Pot", 
            price: 699, 
            image: "🌼", 
            description: "A small, delightful daisy plant permanently 'potted' in a mini crochet basket. Requires zero care and adds a rustic charm to your desk or window sill.",
            gallery: ["🌼", "⚪", "🧺"]
        },
        { 
            id: 5, 
            name: "Jumbo Mix Bouquet", 
            price: 2399, 
            image: "💐", 
            description: "Our signature jumbo bouquet featuring a mix of roses, lilies, and greenery. Over 20 stems of various flowers, making a spectacular and lasting impression.",
            gallery: ["💐", "💜", "💙"]
        },
        { 
            id: 6, 
            name: "Single Black Rose", 
            price: 299, 
            image: "🥀", 
            description: "A single, dramatic black rose. A unique statement piece symbolizing mystery and passion. Comes with a wire stem for easy posing.",
            gallery: ["🥀", "⚫", "👻"]
        }
    ];

    let cart = [];

    const productGrid = document.querySelector('.product-grid');
    const cartCountElement = document.getElementById('cart-count');
    const sideCart = document.getElementById('side-cart');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.querySelector('.checkout-btn');
    
    // New Modal Elements
    const productModal = document.getElementById('product-modal');
    const modalDetailsContainer = document.getElementById('modal-product-details');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Core Functions ---

    // Renders the product cards to the main shop page
    const renderProducts = () => {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            // Added data-id for easy lookup when clicking the card
            card.dataset.id = product.id; 
            card.innerHTML = `
                <div class="product-image-placeholder">${product.image}</div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="price">₹ ${product.price.toLocaleString('en-IN')}</p>
                    <span class="view-details-prompt">View Details...</span>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    // Renders the cart sidebar contents (kept as is)
    const updateCartDisplay = () => {
        // Clear current items
        cartItemsContainer.innerHTML = '';
        
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p id="empty-cart-message">Your cart is empty.</p>';
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
                        </div>
                        <button class="remove-item-btn" data-id="${product.id}" title="Remove Item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    `;
                    cartItemsContainer.appendChild(cartItemEl);
                }
            });
        }
        
        // Update totals and counts
        cartTotalElement.textContent = `₹ ${total.toLocaleString('en-IN')}`;
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    // Function to add an item to the cart and update display
    const addItemToCart = (productId) => {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }

        updateCartDisplay();
        openCart(); // Show cart briefly after adding an item
    };
    
    // --- Modal Logic ---
    
    const openModal = (product) => {
        // Render content
        modalDetailsContainer.innerHTML = `
            <div class="modal-image-gallery">
                <div class="main-modal-image" id="main-modal-image">${product.image}</div>
                <div class="thumbnail-images">
                    ${product.gallery.map(img => `<div data-image="${img}">${img}</div>`).join('')}
                </div>
            </div>
            <div class="modal-info">
                <h3>${product.name}</h3>
                <p class="modal-price">₹ ${product.price.toLocaleString('en-IN')}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Handmade:</strong> Yes, with 100% premium yarn.</p>
                <button class="add-to-cart modal-add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        // Attach thumbnail click listener (using event delegation on the container)
        const thumbnails = modalDetailsContainer.querySelector('.thumbnail-images');
        thumbnails.addEventListener('click', (event) => {
            if (event.target.dataset.image) {
                document.getElementById('main-modal-image').textContent = event.target.dataset.image;
            }
        });
        
        // Attach the Add to Cart listener on the modal's button
        modalDetailsContainer.querySelector('.modal-add-to-cart').addEventListener('click', (event) => {
             addItemToCart(parseInt(event.target.dataset.id));
             closeModal(); // Close modal after adding to cart
        });
        
        // Open modal
        productModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeModal = () => {
        productModal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable background scroll
    };

    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal if overlay is clicked
    overlay.addEventListener('click', (event) => {
        // If the side cart is NOT open, close the product modal
        if (!sideCart.classList.contains('open')) {
            closeModal();
        }
    });

    // --- Event Handlers ---

    // 1. Product Card Click Logic (Open Modal)
    productGrid.addEventListener('click', (event) => {
        // Check if the click was on the card itself or inside it, but not the Add to Cart button 
        // NOTE: The original button was removed, so any click on the card opens the modal
        const card = event.target.closest('.product-card');
        if (card) {
            const productId = parseInt(card.dataset.id);
            const product = products.find(p => p.id === productId);
            if (product) {
                openModal(product);
            }
        }
    });
    
    // 2. Add to Cart (Placeholder button logic from original) - REMOVED, now inside modal

    // 3. Remove from Cart Logic (Unchanged, uses delegation)
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item-btn')) {
            const button = event.target.closest('.remove-item-btn');
            const productId = parseInt(button.dataset.id);
            
            // Filter out the item to remove it completely 
            cart = cart.filter(item => item.id !== productId);
            
            updateCartDisplay();

            if (cart.length === 0) {
                // If cart is empty, check if modal is open, if not, close cart.
                if (productModal.classList.contains('hidden')) {
                     closeCart();
                }
            }
        }
    });

    // 4. Cart Open/Close Logic (Modified to handle overlay interaction with the modal)
    const openCart = () => {
        sideCart.classList.remove('hidden');
        overlay.classList.remove('hidden');
        // A slight delay to ensure the display property is set before the transition
        setTimeout(() => sideCart.classList.add('open'), 10);
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeCart = () => {
        sideCart.classList.remove('open');
        // Only hide overlay if the product modal is also NOT open
        if (productModal.classList.contains('hidden')) {
            overlay.classList.add('hidden');
            document.body.style.overflow = ''; // Re-enable background scroll
        }
        // Remove 'hidden' when open, add back when closed and transition is done
        setTimeout(() => sideCart.classList.add('hidden'), 300); 
    };

    document.getElementById('view-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    
    // 5. Checkout Button (Dummy Action)
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your order! (Checkout functionality would go here.)');
        cart = []; // Empty the cart after "checkout"
        updateCartDisplay();
        closeCart();
    });
    
    // --- Initial Call ---
    renderProducts();
    updateCartDisplay(); 
});