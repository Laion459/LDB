const carouselInner = document.getElementById('carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showNextMessage() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextMessage, 10000);

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
}
