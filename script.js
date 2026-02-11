const slides = document.getElementById("slides");
let index = 0;
const totalSlides = 4;

function showSlide() {
  slides.style.transform = `translateX(-${index * 320}px)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}

/* Auto slide */
setInterval(nextSlide, 3000);