const slides =  document.querySelectorAll('.slide');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const active = document.querySelector('.active');
    // remove active class 
    active.classList.remove('active');
    // check active class position
    if (active.nextElementSibling){
    // add active class
      active.nextElementSibling.classList.add('active');
    }
    else{
      // add active class to last slide
      slides[0].classList.add('active')
    }
    setTimeout(() => active.classList.remove('active'));
}
const prevSlide = () => {
  const active = document.querySelector('.active');
      // remove active class 
    active.classList.remove('active');
      // check active class position
    if (active.previousElementSibling){
      // add active class
      active.previousElementSibling.classList.add('active');
    }
    else{
      // add active class to last slide
      slides[slides.length -1].classList.add('active')
    }
    setTimeout(() => active.classList.remove('active'));
}
btnPrev.addEventListener('click' , e => { 
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval =  setInterval(prevSlide , intervalTime);
  }
});
btnNext.addEventListener('click' , e => { 
  nextSlide();
  if (auto) {
    // clear interval slide
    clearInterval(slideInterval);
    slideInterval =  setInterval(nextSlide , intervalTime);
  }
});
//  Run slide automaticlly every 5 seconds
if (auto) {
  slideInterval =  setInterval(nextSlide , intervalTime);
}



















