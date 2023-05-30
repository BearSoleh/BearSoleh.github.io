var cart = {};

function addToCart(productName, price) {
  if (cart[productName]) {
    cart[productName].quantity++;
  } else {
    cart[productName] = {
      quantity: 1,
      price: price
    };
  }

  updateCartDisplay();
}

function cancelItem(productName) {
  if (cart[productName]) {
    cart[productName].quantity--;

    if (cart[productName].quantity <= 0) {
      delete cart[productName];
    }
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  var cartItems = document.getElementById("cartItems");
  var totalPrice = 0;
  cartItems.innerHTML = "";

  for (var item in cart) {
    var listItem = document.createElement("li");
    listItem.textContent = item + " - " + cart[item].quantity;
    cartItems.appendChild(listItem);

    totalPrice += cart[item].price * cart[item].quantity;
  }

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

