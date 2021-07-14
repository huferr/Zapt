let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    
    let slides = document.getElementsByClassName("carousel-items-container");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev')

nextButton.addEventListener('click', () => {
    plusSlides(1)
})

prevButton.addEventListener('click', () => {
    plusSlides(-1)
})