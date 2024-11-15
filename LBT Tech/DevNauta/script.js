// Rolagem suave para as seções ao clicar nos links da navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function atualizarAnoRodape() {
    const anoAtual = new Date().getFullYear();
    const elementoRodape = document.querySelector('footer p'); // Seleciona o elemento <p> dentro do rodapé
  
    if (elementoRodape) {
      elementoRodape.textContent = `© ${anoAtual} LBT Tech. Todos os direitos reservados.`;
    }
  }
  
  // Chama a função para atualizar o ano ao carregar a página
  atualizarAnoRodape();