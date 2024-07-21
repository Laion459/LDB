document.addEventListener('DOMContentLoaded', function() {
    // Ano automático no rodapé
    const anoAtual = new Date().getFullYear();
    document.getElementById('ano-atual').textContent = anoAtual;

    // Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('.menu-container');
    
    menuToggle.addEventListener('click', function() {
        menuContainer.classList.toggle('mostrar'); 
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) { // Movido para dentro do DOMContentLoaded
      if (
        !menuContainer.contains(event.target) && // Clique fora do menu
        !menuToggle.contains(event.target) // Clique fora do botão
      ) {
        menuContainer.classList.remove('mostrar');
      }
    });

    // Botão Voltar ao Topo
    const botaoVoltarTopo = document.querySelector('.voltar-topo');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { 
            botaoVoltarTopo.classList.add('mostrar');
        } else {
            botaoVoltarTopo.classList.remove('mostrar');
        }
    });

    botaoVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});