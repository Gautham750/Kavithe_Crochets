document.addEventListener('DOMContentLoaded', () => {
    // --- Initial Setup ---
    const products = [
        { id: 1, name: "Sunflower Bouquet", price: 839, image: "🌻" },
        { id: 2, name: "Pink Tulip Bouquet", price: 1499, image: "🌷" },
        { id: 3, name: "Mini Red Rose Set", price: 429, image: "🌹" },
        { id: 4, name: "Daisy Pot", price: 699, image: "🌼" },
        { id: 5, name: "Jumbo Mix Bouquet", price: 2399, image: "💐" },
        { id: 6, name: "Single Black Rose", price: 299, image: "🥀" }
    ];

    let cart = [];

    const productGrid = document.querySelector('.product-grid');
    const cartCountElement = document.getElementById('cart-count');
    const sideCart = document.getElementById('side-cart');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.querySelector('.checkout-btn');
    const emptyMessage = document.getElementById('empty-cart-message');

    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Core Functions ---

    // Renders the product cards to the main shop page
    const renderProducts = () => {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-placeholder">${product.image}</div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="price">₹ ${product.price.toLocaleString('en-IN')}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    // Renders the cart sidebar contents
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

    // --- Event Handlers ---

    // 1. Add to Cart Logic
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.id);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }

            updateCartDisplay();
            // Show cart briefly after adding an item
            openCart(); 
        }
    });

    // 2. Remove from Cart Logic
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item-btn')) {
            const button = event.target.closest('.remove-item-btn');
            const productId = parseInt(button.dataset.id);
            
            // Filter out the item to remove it completely (assuming single item type per row)
            cart = cart.filter(item => item.id !== productId);
            
            updateCartDisplay();

            if (cart.length === 0) {
                closeCart();
            }
        }
    });

    // 3. Cart Open/Close Logic
    const openCart = () => {
        sideCart.classList.remove('hidden');
        overlay.classList.remove('hidden');
        // A slight delay to ensure the display property is set before the transition
        setTimeout(() => sideCart.classList.add('open'), 10);
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeCart = () => {
        sideCart.classList.remove('open');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable background scroll
        // Remove 'hidden' when open, add back when closed and transition is done
        setTimeout(() => sideCart.classList.add('hidden'), 300); 
    };

    document.getElementById('view-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    // 4. Checkout Button (Dummy Action)
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your order! (Checkout functionality would go here.)');
        cart = []; // Empty the cart after "checkout"
        updateCartDisplay();
        closeCart();
    });
    
    // --- Initial Call ---
    renderProducts();
    updateCartDisplay(); // Initial load to ensure cart count is 0
});