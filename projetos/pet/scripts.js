// script.js
// Atualiza o ano no copyright do rodapé
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Botão Voltar ao Topo
const voltarTopoBtn = document.getElementById("voltarTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        voltarTopoBtn.style.display = "block";
    } else {
        voltarTopoBtn.style.display = "none";
    }
};

voltarTopoBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});