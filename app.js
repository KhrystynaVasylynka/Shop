
const btns = document.querySelectorAll(".item-actions__cart");
const productCount = document.querySelector(".product-count");

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let count = +productCount.textContent;
    console.log("clicked");
    productCount.textContent = ++count;
  });
});

const likeBtns = document.querySelectorAll(".btn-heart");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});

const modalOpen = document.querySelectorAll(".item-actions__more");
const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".close");
modalOpen.forEach((item) => {
  item.addEventListener("click", function () {
    modalWindow.classList.add("active");
  });
});

modalClose.addEventListener("click", function () {
  modalWindow.classList.remove("active");
});
