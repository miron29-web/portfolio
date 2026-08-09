const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__img');

const btn_next = document.querySelector('.slider__btn--next')
const btn_prev = document.querySelector('.slider__btn--prev')

let current = 0;

function updateSlider(){
    track.style.transform = `translateX(-${current * 100}%)`;
}

btn_next.addEventListener('click', () => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    updateSlider();
});

btn_prev.addEventListener('click', () => {
    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    updateSlider();
});