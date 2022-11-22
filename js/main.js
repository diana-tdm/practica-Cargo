const slider = new Siema({
  selector: ".banner__slider",
  loop: true,
  onChange: onChangeSlider,
});
document
  .querySelector(".slider__arrow--prev")
  .addEventListener("click", () => slider.prev());
document
  .querySelector(".slider__arrow--next")
  .addEventListener("click", () => slider.next());

function onChangeSlider() {
  const dots = document.querySelectorAll(".slider__dot");
  dots.forEach((dot) => dot.classList.remove("slider__dot--active"));
  dots[slider.currentSlide].classList.add("slider__dot--active");
}

const sliderDelivery = new Siema({
  selector: ".delivery__list",
  loop: true,
  perPage: 3,
});
document
  .querySelector(".delivery .slider__arrow--prev")
  .addEventListener("click", () => sliderDelivery.prev());
document
  .querySelector(".delivery .slider__arrow--next")
  .addEventListener("click", () => sliderDelivery.next());

const sliderServices = new Siema({
  selector: ".services__list",
  loop: true,
  perPage: 3,
});
document
  .querySelector(".services .slider__arrow--prev")
  .addEventListener("click", () => sliderServices.prev());
document
  .querySelector(".services .slider__arrow--next")
  .addEventListener("click", () => sliderServices.next());
