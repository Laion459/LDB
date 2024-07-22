

// Função para atualizar o ano automaticamente no rodapé
function updateCopyrightYear() {
    const copyrightYearElement = document.querySelector('footer .container p');
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear} Gaston Borges. Todos los derechos reservados.`;
}

// Chama a função para atualizar o ano ao carregar a página
window.onload = updateCopyrightYear;



const botaoVoltarTopo = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        botaoVoltarTopo.classList.add('mostrar');
    } else {
        botaoVoltarTopo.classList.remove('mostrar');
    }
});

botaoVoltarTopo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar o slide automaticamente a cada 5 segundos
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Reinicia o intervalo quando o usuário interage com o carrossel
// (opcional - para evitar comportamento inesperado)
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});