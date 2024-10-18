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


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}





document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const percentage = bar.getAttribute('data-percentage');
        const percentageText = bar.querySelector('.percentage-text');

        if (level) {
            // Define a largura da barra com base no data-percentage
            bar.style.width = `${percentage}%`;

            // Atualiza o texto da barra com o nível linguístico (C2, B1, etc.)
            percentageText.textContent = level;
        } else {
            // Para outras habilidades, manter a animação de porcentagem normal
            let currentPercentage = 0;
            const interval = setInterval(() => {
                if (currentPercentage >= percentage) {
                    clearInterval(interval);
                } else {
                    currentPercentage++;
                    bar.style.width = `${currentPercentage}%`;
                    percentageText.textContent = `${currentPercentage}%`;
                }
            }, 20);
        }
    });
});


// Mover o projeto quando o mouse passar sobre ele
function moveProject(project) {
    project.style.transform = 'translateY(-10px)';
}

// Resetar a posição do projeto quando o mouse sair dele
function resetProject(project) {
    project.style.transform = 'translateY(0)';
}


