document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const dots = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    const slideCount = slides.length;
    let interval; 

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        scrollToSlide(currentIndex);
    }

    function scrollToSlide(index) {

        const slide = slides[index];
        const slideLeft = slide.offsetLeft;
        
        slider.scrollTo({
            left: slideLeft,
            behavior: 'smooth'
        });
        
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.style.opacity = i === index ? '1' : '0.75';
        });
    }

    interval = setInterval(autoSlide, 3000);

    slider.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    slider.addEventListener('mouseleave', () => {
        interval = setInterval(autoSlide, 3000);
    });


    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = i;
            scrollToSlide(currentIndex);
        });
    });
});