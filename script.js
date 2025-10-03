const products = [
    { name: "Pink Crochet Top", price: 50.00, image: "https://images.unsplash.com/photo-1620000617300-84c6de77a67f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Handmade Blanket", price: 120.00, image: "https://images.unsplash.com/photo-1542393282-e565985055b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Crochet Amigurumi", price: 25.00, image: "https://images.unsplash.com/photo-1628264560767-e9a656847846?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Stylish Tote Bag", price: 75.00, image: "https://images.unsplash.com/photo-1520006403212-68c3722a20b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Baby Booties Set", price: 35.00, image: "https://images.unsplash.com/photo-1549488340-97992c902796?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Handmade Scarf", price: 60.00, image: "https://images.unsplash.com/photo-1590740683056-b78809c9f2b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Plant Holder", price: 40.00, image: "https://images.unsplash.com/photo-1579450325494-0b4b21c459e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Boho Wall Hanging", price: 90.00, image: "https://images.unsplash.com/photo-1596796934079-88062e7a3d34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Crochet Coasters", price: 15.00, image: "https://images.unsplash.com/photo-1582234062835-263f13661b12?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Headband and Ear Warmer", price: 30.00, image: "https://images.unsplash.com/photo-1592651478544-77242a781b0a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

let cart = [];

const productGrid = document.querySelector('.product-grid');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalEl = document.getElementById('cart-total');

// Function to render product cards
function renderProducts() {
    productGrid.innerHTML = ''; // Clear existing content
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product);
    updateCart();
    openNav();
}

// Function to update the cart display
function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotalEl.textContent = total.toFixed(2);
}

// Sidebar functions
function openNav() {
    document.getElementById("cart-sidebar").style.width = "350px";
}

function closeNav() {
    document.getElementById("cart-sidebar").style.width = "0";
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});