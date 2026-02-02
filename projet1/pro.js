const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

function showCategory(category) {
  sections.forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(category).classList.add("active");
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    showCategory(btn.dataset.category);
  });
});


//Category navigation
const navButtons = document.querySelectorAll(".nav-btn");
const section = document.querySelectorAll(".section");
function showSection(id) {
  sections.forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    showSection(category);
  });
});

//Cart
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    e.target.textContent = "Added ✓";
    setTimeout(() => {
      e.target.textContent = "Add to Cart";
    }, 800);
  }
});

//Wishlist
let wishlistCount = 0;
const wishlistCountEl = document.getElementById("wishlist-count");
document.addEventListener("click", e => {
  if (e.target.classList.contains("heart-btn")) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      e.target.textContent = "♡";
      wishlistCount--;
    } else {
      e.target.classList.add("active");
      e.target.textContent = "♥";
      wishlistCount++;
    }
    wishlistCountEl.textContent = wishlistCount;
  }
});

