let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cartList = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");
  const emptyMsg = document.getElementById("empty-cart");

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    totalBox.style.display = "none";
    return;
  }

  emptyMsg.style.display = "none";
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - RM${item.price}`;
    cartList.appendChild(li);
    total += parseFloat(item.price);
  });

  totalBox.textContent = `Total: RM${total.toFixed(2)}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function start(){
  let splash = document.getElementById("splash");

  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });

  splash.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", () => {
      const music = document.getElementById("bgm");
      music.play().catch(err => console.log("Autoplay blocked:", err));
    }, { once: true });
  });