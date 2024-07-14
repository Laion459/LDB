
// Função para atualizar o ano automaticamente no rodapé
function updateCopyrightYear() {
    const copyrightYearElement = document.querySelector('footer .container p');
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear} Leonardo Borges. Todos os direitos reservados.`;
}

// Chama a função para atualizar o ano ao carregar a página
window.onload = updateCopyrightYear;