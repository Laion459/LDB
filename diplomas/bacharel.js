document.addEventListener('DOMContentLoaded', (event) => {
    const linhas = document.querySelectorAll('table tbody tr');

    let totalHoras = 0;
    let horasCursadas = 0;
    let totalDisciplinas = 0;
    let disciplinasCursadas = 0;

    linhas.forEach(linha => {
        // Calcula totais de horas APENAS se a célula tiver um valor numérico
        const horasCelula = linha.children[3].textContent.trim();
        let horas = 0;
        if (!isNaN(horasCelula) && horasCelula !== "") {
            horas = parseInt(horasCelula);
            totalHoras += horas;
        }

        const codigoDisciplina = linha.children[1].textContent.trim();
        if (codigoDisciplina !== "") {
            totalDisciplinas++;
            const situacao = linha.children[5].textContent;
            if (situacao.includes("Aprovado")) {
                horasCursadas += horas;
                disciplinasCursadas++;
            }
        }
    });

    // Atualiza os valores no HTML
    document.getElementById('total-horas').textContent = totalHoras;
    document.getElementById('horas-cursadas').textContent = horasCursadas;
    document.getElementById('horas-restantes').textContent = totalHoras - horasCursadas;
    document.getElementById('total-disciplinas').textContent = totalDisciplinas;
    document.getElementById('disciplinas-cursadas').textContent = disciplinasCursadas;
    document.getElementById('disciplinas-restantes').textContent = totalDisciplinas - disciplinasCursadas;
});


document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const statusCell = row.cells[5]; // Obtém a célula da coluna "Situação"
        if (statusCell && statusCell.textContent === 'Aprovado') {
            row.classList.add('aprovado');
        } else if (statusCell && statusCell.textContent === 'Apto a Cursar') {
            row.classList.add('apto-a-cursar');
        }
    });
});
