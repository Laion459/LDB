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

// Função para atualizar o ano dos direitos autorais
function updateCopyrightYear() {
  const copyright = document.getElementById('copyright');
  const currentYear = new Date().getFullYear();
  copyright.textContent = `© Estetica FLOR DE LIS. Desde 1996. Todos os direitos reservados ${currentYear}.`;
}

// Chama a função para atualizar o ano ao carregar a página
updateCopyrightYear();


document.addEventListener('DOMContentLoaded', function () {
  var backButton = document.querySelector('.back-to-top');

  // Adicione um ouvinte de rolagem para verificar a posição da página
  window.addEventListener('scroll', function () {
    // Se o usuário rolar mais de 200 pixels, mostra o botão, caso contrário, esconde
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = 'block';
    } else {
      backButton.style.display = 'none';
    }
  });


});

// Função para rolar suavemente ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}