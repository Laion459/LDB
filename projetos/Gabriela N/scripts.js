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

    // Botão Voltar ao Topo
    const botaoVoltarTopo = document.querySelector('.voltar-topo');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Mostra o botão após rolar 300px
            botaoVoltarTopo.classList.add('mostrar');
        } else {
            botaoVoltarTopo.classList.remove('mostrar');
        }
    });

    botaoVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });
});