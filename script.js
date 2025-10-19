document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in the footer
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();

    // 2. Define product data
    const products = [
        { id: 1, name: "Sunflower Bouquet", price: 839, image: "sunflower.jpg" },
        { id: 2, name: "Pink Tulip Bouquet", price: 1499, image: "tulip.jpg" },
        { id: 3, name: "Mini Red Rose Set", price: 429, image: "rose.jpg" },
        { id: 4, name: "Daisy Pot", price: 699, image: "daisy.jpg" },
        { id: 5, name: "Jumbo Mix Bouquet", price: 2399, image: "mix.jpg" },
        { id: 6, name: "Single Black Rose", price: 299, image: "black-rose.jpg" }
    ];

    const productGrid = document.querySelector('.product-grid');
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');

    // 3. Render products to the HTML
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="placeholder-image.jpg" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="price">₹ ${product.price.toLocaleString('en-IN')}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // 4. Handle 'Add to Cart' button clicks
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.dataset.id;
            const product = products.find(p => p.id == productId);

            cartCount++;
            cartCountElement.textContent = cartCount;

            // Simple user feedback
            alert(`Added 1 x ${product.name} to the cart!`);
        }
    });

    // Note: In a real e-commerce site, you would use 'fetch' to load
    // product data from a server and use local storage for the cart.
});