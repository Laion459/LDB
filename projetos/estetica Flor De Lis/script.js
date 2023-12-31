document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('nav');
    var labelToggle = document.querySelector('label[for="menu-toggle"]');
    var logoLink = document.getElementById('logo-link');

    // Ajuste para clicar no ícone do menu
    labelToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });

    // Adicione um evento de clique ao link do logo
    logoLink.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });

    function toggleLogoVisibility() {
        var logoImage = document.getElementById('logo-image');
        logoImage.classList.toggle('hide-logo');
    }
    
    // Fechar o menu ao clicar fora dele
    document.addEventListener('mouseup', function (e) {
        var menu = document.querySelector('.menu');
        if (!menu.contains(e.target) && !nav.contains(e.target)) {
            menuToggle.checked = false;
            nav.style.display = 'none';
        }
    });

    // Fechar o menu ao redimensionar a tela
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menuToggle.checked = false;
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // Fechar o menu ao clicar nos itens do menu
    var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuToggle.checked = false;
            nav.style.display = 'none';
        });
    });

    // Fechar o menu ao clicar no label (botão do menu)
    labelToggle.addEventListener('click', function () {
        menuToggle.checked = !menuToggle.checked;
        nav.style.display = menuToggle.checked ? 'flex' : 'none';
    });
});

// Fechar o menu ao clicar nos itens do menu
var menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        menuToggle.checked = false;
        nav.style.display = 'none';
    });
});