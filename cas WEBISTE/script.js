

const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slidePos = 0;
const slideCount = slides.childElementCount;
const slideWidth = slides.offsetWidth;

prevBtn.addEventListener('click', () => {
  slidePos++;
  if (slidePos === slideCount) {
    slidePos = 0;
  }
  slides.style.transform = `translateX(-${slidePos * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  slidePos--;
  if (slidePos < 0) {
    slidePos = slideCount - 1;
  }
  slides.style.transform = `translateX(-${slidePos * slideWidth}px)`;
});
