// ================= CART =================

let cart = [];

function addToCart(name, price) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: Number(price),
            quantity: 1
        });
    }

    updateCart();

    alert(name + " added to cart!");
}


// ================= UPDATE CART =================

function updateCart() {

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerText = totalQuantity;
    }

    displayCart();
}


// ================= DISPLAY CART =================

function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) {
        return;
    }

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        cartTotal.innerText = "$ 0.00";

        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <strong>${item.name}</strong>
                    <br>
                    $ ${item.price.toFixed(2)} × ${item.quantity}
                    <br>
                    <strong>
                        Subtotal: $ ${itemTotal.toFixed(2)}
                    </strong>
                </div>

                <div>

                    <button onclick="decreaseItem(${index})">
                        −
                    </button>

                    <button onclick="increaseItem(${index})">
                        +
                    </button>

                    <button onclick="removeItem(${index})">
                        ×
                    </button>

                </div>

            </div>
        `;
    });

    cartTotal.innerText = "$ " + total.toFixed(2);
}


// ================= INCREASE =================

function increaseItem(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    updateCart();
}


// ================= DECREASE =================

function decreaseItem(index) {

    if (!cart[index]) return;

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


// ================= REMOVE =================

function removeItem(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    updateCart();
}


// ================= CART MODAL =================

function openCart() {

    const cartModal = document.getElementById("cartModal");

    if (cartModal) {
        cartModal.style.display = "flex";
    }

    displayCart();
}


function closeCart() {

    const cartModal = document.getElementById("cartModal");

    if (cartModal) {
        cartModal.style.display = "none";
    }
}


// ================= CHECKOUT =================

function checkout() {

    // Check empty cart
    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    // Checkout message
    alert(
        "Checkout successful! 🎉\n\n" +
        "Total: $ " + total.toFixed(2)
    );

    // Clear cart
    cart = [];

    updateCart();

    closeCart();
}


// ================= SEARCH =================

function openSearch() {

    const searchModal = document.getElementById("searchModal");

    if (searchModal) {
        searchModal.style.display = "flex";
    }

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.focus();
    }
}


function closeSearch() {

    const searchModal = document.getElementById("searchModal");

    if (searchModal) {
        searchModal.style.display = "none";
    }
}


function searchProducts() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const search = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    let found = 0;

    cards.forEach(card => {

        const title = card.querySelector("h3");

        if (!title) return;

        const name = title.innerText.toLowerCase();

        if (name.includes(search)) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";
        }

    });

    const searchResult = document.getElementById("searchResult");

    if (searchResult) {

        searchResult.innerHTML =
            search.length > 0
                ? `<p>${found} product found.</p>`
                : "";
    }
}


// ================= LOGIN =================

function openLogin() {

    const loginModal = document.getElementById("loginModal");

    if (loginModal) {
        loginModal.style.display = "flex";
    }
}


function closeLogin() {

    const loginModal = document.getElementById("loginModal");

    if (loginModal) {
        loginModal.style.display = "none";
    }
}


function login() {

    alert("Login successful!");

    closeLogin();
}


// ================= MENU =================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("active");
    }
}


// ================= SCROLL TO PRODUCTS =================

function scrollToShop() {

    const products = document.getElementById("products");

    if (products) {

        products.scrollIntoView({
            behavior: "smooth"
        });

    }
}


// ================= SUBSCRIBE =================

function subscribeUser() {

    const emailInput = document.getElementById("email");

    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;
    }

    alert(
        "Thank you! You received 15% discount."
    );

    emailInput.value = "";
}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    if (event.target.classList.contains("modal")) {

        event.target.style.display = "none";

    }

};


// ================= START =================

document.addEventListener("DOMContentLoaded", function() {

    updateCart();

});

function scrollToShop() {
    document.getElementById("keyboard").scrollIntoView({
        behavior: "smooth"
    });
}