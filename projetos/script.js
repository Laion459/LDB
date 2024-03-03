// Mover o projeto quando o mouse passar sobre ele
function moveProject(project) {
    project.style.transform = 'translateY(-10px)';
}

// Resetar a posição do projeto quando o mouse sair dele
function resetProject(project) {
    project.style.transform = 'translateY(0)';
}

// Voltar ao topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
