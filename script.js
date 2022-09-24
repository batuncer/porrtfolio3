const buttons = document.querySelectorAll("[data-carousel-button]")

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

var sheep_count, other_count;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


sheep_count = 0;

other_count = 0;


document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) == 'good') {
    let element_sheep_count = document.getElementById('good_count');
    element_sheep_count.innerText = sheep_count;
    sheep_count = (typeof sheep_count === 'number' ? sheep_count : 0) + 1;
  } else {
    let element_other_count = document.getElementById('bad_count');
    element_other_count.innerText = other_count;
    other_count = (typeof other_count === 'number' ? other_count : 0) + 1;
  }

});
