
const btns = document.querySelectorAll(".item-actions__cart");
const productCount = document.querySelector(".product-count");

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let count = +productCount.textContent;
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


// modalOpen.addEventListener("click", function (e) {

// 	if (e.target === modal) {

// 		modalClose();

// 	}

// 	if (e.target === document.querySelector(".item-actions__more")) {

// 			let h3 = document.querySelector(".form-more-details h3");

// 			h3.style.backgroundColor = "green";

// 	}

// });


$('.slider-block').slick( {
	dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});


// Counter func style

let incrementBtns = document.querySelectorAll(".increment-btn");

let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

//-----------------------------------------------
//-----------------звичайний спосіб
// let minCount = 1;
// let maxCount = 10;

// let currentCount = +inputFields.value;
// toggleButtonState(currentCount)

// function toggleButtonState(count) {

//   //простий і довгий варіант
//   // if (count <= minCount) {
//   //   decrementBtns.disabled = true;
//   //   incrementBtns.disabled = false;
//   // } else if (count >= maxCount ) {
//   //   decrementBtns.disabled = false;
//   //   incrementBtns.disabled = true;
//   // } else {
//   //   decrementBtns.disabled = false;
//   //   incrementBtns.disabled = false;
//   // }

//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let nextCount = currentCount + 1;
//   inputFields.value = nextCount;

//   toggleButtonState(nextCount);
// });

// decrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let nextCount = currentCount - 1;
//   inputFields.value = nextCount;

//   toggleButtonState(nextCount);
// });
//-------------------------------------------------------


//----------------------------------обєктно орієнтоване програмування
// domRef - назва обєкта

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  }

  this.toggleButtonState();


  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  }
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  }

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this)
  );
}
//-----------------------------------------перший спосіб

// incrementBtns.forEach((btn,index) => {
//   new Counter(btn, decrementBtns[index], inputFields[index]);
// })



//-----------------------------------------другий рспосіб


let items = document.querySelectorAll(".content-item");
items.forEach(item => {
  const incrementBtn = item.querySelector(".increment-btn");
  const decrementBtn = item.querySelector(".decrement-btn");
  const inputField = item.querySelector(".product-quantity input");
  new Counter(incrementBtn, decrementBtn, inputField);
});

