

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