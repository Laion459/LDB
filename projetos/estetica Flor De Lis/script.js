// JavaScript para fechar o menu ao clicar fora dele
document.addEventListener('mouseup', function (e) {
    var menu = document.querySelector('.menu');
    var nav = document.querySelector('nav');
    if (!menu.contains(e.target) && !nav.contains(e.target)) {
        document.getElementById('menu-toggle').checked = false;
    }
});
