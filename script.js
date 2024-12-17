// Cart array to hold items
let cart = [];

// Function to add items to the cart
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    displayCart();
}

// Function to display cart items and total price
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Clear current cart display
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    // Add each cart item to the display
    cart.forEach((item, index) => {
        totalPrice += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
    });

    // Update total price
    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to simulate checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order! Your food will be prepared soon.');
        cart = []; // Clear the cart
        displayCart(); // Refresh the cart display
    }
}
