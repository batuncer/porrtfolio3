const buttons = document.querySelectorAll("[data-carousel-button]")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})





hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
/*comment function*/
document.querySelector('#addComment').addEventListener('click', function () {

  const data = {
    "name": document.querySelector('#name').value,
    "date": document.querySelector('#date').value,
    "body": document.querySelector('#bodyText').value,

  };
  console.log(data)
  render(data)

})
products = [];

const basketElems = document.querySelectorAll('.addBasket');
for (let index = 0; index < basketElems.length; index++) {
  const element = basketElems[index];
  element.addEventListener('click', function () {

    const name = this.getAttribute("data-name")
    const price = this.getAttribute("data-price")

    const data = {
      "name": name,
      "price": price,
    }
    products.push(data);
    console.log(price);
    addBaskets(products);



  })

}

function render(data) {
  if (document.querySelector(".notyet")) {
    document.querySelector(".notyet").remove()
  };
  const html = "<div class='commentBox'><div class'leftPanelImg'> </div><div class='rightPanel'><span>" + data.name + "</span><div class='date'>" + data.date + "</div><p>" + data.body + "</p></div><div class='clear'></div></div>";
  document.querySelector("#comment_container").innerHTML += html

  
}

function addBaskets(datas) {
  document.querySelector("#list").innerHTML = ""
  let html = ""
  let total = 0;
  for (let index = 0; index < datas.length; index++) {
    const data = datas[index];
    html += "<li><span>" + data.name + " " + "<span></span>" + data.price + "</span><button class='delete' onClick='deleteProduct(" + index + ")'>X</button></li>";
    total += parseInt(datas[index]["price"]);
  }
  const delivery = 3.50;
  const grandTotal = total + delivery;
  document.querySelector('#subtotal').innerText = total;
  document.querySelector('#total').innerText = grandTotal;
  document.querySelector('#delivery').innerText = delivery;
  document.querySelector("#list").innerHTML += html
}

function deleteProduct(index) {
  products.splice(index, 1)
  addBaskets(products)
}
