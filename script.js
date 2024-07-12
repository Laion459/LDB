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


// Função para atualizar o ano automaticamente no rodapé
function updateCopyrightYear() {
    const copyrightYearElement = document.querySelector('footer .container p');
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear} Leonardo Borges. Todos os direitos reservados.`;
}

// Chama a função para atualizar o ano ao carregar a página
window.onload = updateCopyrightYear;