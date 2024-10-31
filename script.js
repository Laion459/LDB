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


// Função para trocar o tema
function setTheme(theme) {
    document.body.className = ''; // Remove qualquer classe anterior
    if (theme !== 'theme-white') { // A classe 'theme-white' é o padrão
        document.body.classList.add(theme);
    }
    localStorage.setItem('selectedTheme', theme); // Salvar no localStorage
}

// Aplicar o tema salvo ao carregar a página
window.onload = function() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
};








// Funções para o seletor de temas
const themeButton = document.getElementById('theme-button');
const themeOptions = document.getElementById('theme-options');
const closeThemeOptions = document.getElementById('close-theme-options');


themeButton.addEventListener('click', () => {
    themeOptions.classList.toggle('hidden');
});


closeThemeOptions.addEventListener('click', () => {
    themeOptions.classList.add('hidden');
});

// Fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
    if (!themeButton.contains(event.target) && !themeOptions.contains(event.target)) {
        themeOptions.classList.add('hidden');
    }
});


function setTheme(theme) {
    document.body.className = ''; // Remove classes anteriores do body
    if (theme !== 'theme-white') { 
        document.body.classList.add(theme); // Adiciona a classe ao body
    }
    localStorage.setItem('selectedTheme', theme);
    themeOptions.classList.add('hidden');
    themeButton.className = theme; // Mantém a classe no botão também

    // Atualiza a cor do botão principal do gooey menu
    const gooeyButton = document.querySelector('#theme-menu .menu-open-button');
    if (gooeyButton) {
        gooeyButton.style.backgroundColor = getComputedStyle(document.body).backgroundColor; // Cor de fundo do body
    }

}

// Fechar o menu ao clicar fora (código correto)
document.addEventListener('click', function(event) {
    const gooeyMenu = document.getElementById('theme-menu');
    const menuOpenButton = document.getElementById('menu-open'); 

    if (gooeyMenu && menuOpenButton) {
        if (!gooeyMenu.contains(event.target) && !menuOpenButton.contains(event.target)) {
            menuOpenButton.checked = false;
        }
    }
});