script.js

const products = {
    pottery: [
        { name: 'Handcrafted Pot', price: '$30', img: 'pottery1.jpg' },
        { name: 'Decorative Vase', price: '$25', img: 'pottery2.jpg' },
    ],
    sarees: [
        { name: 'Silk Saree', price: '$70', img: 'saree1.jpg' },
        { name: 'Cotton Saree', price: '$50', img: 'saree2.jpg' },
    ],
    medicinals: [
        { name: 'Herbal Tea', price: '$15', img: 'medicinal1.jpg' },
        { name: 'Healing Balm', price: '$20', img: 'medicinal2.jpg' },
    ],
    toys: [
        { name: 'Wooden Toy Car', price: '$25', img: 'toy1.jpg' },
        { name: 'Handmade Doll', price: '$30', img: 'toy2.jpg' },
    ],
};

function showProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    products[category].forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => addToCart(item.name);
        productDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(itemName) {
    alert(itemName + ' has been added to your cart!');
}

function addToCart(itemName) {
    alert(itemName + ' has been added to your cart!');
}

let cartCount = 0;

function addToCart(productName) {
    cartCount++; // Increment the cart count
    document.getElementById('cart-count').textContent = cartCount; // Update the display
    alert(`${productName} has been added to your cart!`); // Alert the user
}

let cart = []; // Array to hold cart items

function addToCart(item) {
    cart.push(item); // Add the item to the cart
    updateCartCount(); // Update the cart count display
    alert(`${item} has been added to your cart!`); // Alert the user
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; // Update the count display
}

// Create a cart icon in the header (optional)
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const cartIcon = document.createElement('li');
    cartIcon.id = 'cart-icon';
    cartIcon.innerHTML = `
        <a href="#">Cart</a>
        <span id="cart-count">0</span>
    `;
    nav.appendChild(cartIcon);
});

let cartCount = 0;

function addToCart(product) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(product + ' has been added to your cart!');
}
