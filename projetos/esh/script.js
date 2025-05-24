// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Botão de Scroll to Top
  const scrollToTopButton = document.querySelector('.fixed [aria-label="scroll to top"]');

  if (scrollToTopButton) { // Verifica se o botão existe
    // Função para rolar suavemente para o topo
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Mostra ou esconde o botão dependendo da posição da scrollbar
    function toggleScrollToTopButton() {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'flex'; // ou 'block', dependendo do seu CSS
      } else {
        scrollToTopButton.style.display = 'none';
      }
    }

    // Adiciona um listener de clique ao botão
    scrollToTopButton.addEventListener('click', scrollToTop);

    // Executa a função assim que a página carrega e também toda vez que scrollar
    toggleScrollToTopButton();
    window.addEventListener('scroll', toggleScrollToTopButton);
  } else {
    console.warn('Botão de scroll to top não encontrado. Verifique o seletor CSS.');
  }
});