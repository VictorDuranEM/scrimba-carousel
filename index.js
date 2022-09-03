const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    selectSliderSelector(slidePosition)
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    selectSliderSelector(slidePosition)
}



// ------  Additional features  --------


// Slide Selectors
const slideSelectors = document.getElementsByClassName("slide-selector")

for (let i = 0; i < slideSelectors.length; i++) {
    const slideSelector = slideSelectors[i]
    slideSelector.name = i
    slideSelector.addEventListener("click", function() {
        hideAllSlides()
        selectSliderSelector(slideSelector.name)
        slides[slideSelector.name].classList.add("carousel-item-visible")
    })
}

function selectSliderSelector(id) {
    for (const slideSelector of slideSelectors) {
        slideSelector.classList.remove("dark-bg")
    }
    slideSelectors[id].classList.add("dark-bg")
}

// Automatic transition
setInterval(function() {
   moveToNextSlide()
 }, 3000);