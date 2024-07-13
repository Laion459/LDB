// script.js
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;

function showSlide(n) {
    carouselItems[currentSlide].style.display = 'none';
    currentSlide = (n + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Inicia o carrossel
setInterval(nextSlide, 5000); // Troca a cada 5 segundos

// Botão Voltar ao Topo
const voltarTopoBtn = document.getElementById("voltarTopo");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        voltarTopoBtn.style.display = "block";
    } else {
        voltarTopoBtn.style.display = "none";
    }
};

voltarTopoBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Função para atualizar o ano no footer
function atualizarAnoCopyright() {
    const anoAtual = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${anoAtual} - Todos os direitos reservados.`;
}

// Chama a função para atualizar o ano ao carregar a página
atualizarAnoCopyright();