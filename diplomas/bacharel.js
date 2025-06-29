document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');

    let totalHoras = 0;
    let horasCursadas = 0;
    let totalDisciplinas = 0;
    let disciplinasCursadas = 0;
    let horasEletivasCumpridas = 0;
    let totalDisciplinasEletivas = 0;
    let somaNotas = 0;
    let numeroDeNotas = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');

        if (cells.length >= 6) { // Garante que a linha tem pelo menos as células básicas
            let disciplinaCell, ch, nota, situacao;

            // Ajusta o mapeamento das células com base no número de células na linha
            if (cells.length === 7) {
                disciplinaCell = cells[2].textContent.trim();
                ch = parseInt(cells[3].textContent);
                nota = cells[4].textContent.trim();
                situacao = cells[5].textContent.trim();
            } else { // Assume que a linha tem menos células (ex: eletivas)
                disciplinaCell = cells[1].textContent.trim(); // Ajuste o índice se necessário
                ch = parseInt(cells[2].textContent); // Ajuste o índice se necessário
                nota = ""; // Sem nota para eletivas
                situacao = cells[4].textContent.trim(); // Ajuste o índice se necessário
            }

            if (!isNaN(ch)) {
                totalHoras += ch;

                // Verifica se é uma linha de eletiva usando o texto "GRUPO: ELETIVAS" (comparação robusta)
                if (disciplinaCell.toUpperCase().trim() === "GRUPO: ELETIVAS") {
                    totalDisciplinasEletivas++;
                    if (situacao.includes('cumprida')) {
                        horasEletivasCumpridas += ch;
                        disciplinasCursadas++; // Conta eletivas cumpridas como disciplinas cursadas
                    }
                } else {
                    totalDisciplinas++;

                    // Considera a disciplina como cursada se tiver nota (diferente de vazio) OU status "Aprovado" OU status "Em Curso"
                    if (nota !== '' && !isNaN(parseFloat(nota))) { // Verifica se tem nota e se é um número
                        horasCursadas += ch;
                        disciplinasCursadas++;
                        somaNotas += parseFloat(nota);
                        numeroDeNotas++;
                    } else if (situacao === 'Aprovado' || situacao === 'Em Curso') {
                        horasCursadas += ch;
                        disciplinasCursadas++;
                    }
                }
            }
        }
    });

    // Ajusta o total de horas cursadas com as horas das eletivas cumpridas
    horasCursadas += horasEletivasCumpridas;

    const horasRestantes = totalHoras - horasCursadas;
    const totalDisciplinasComEletivas = totalDisciplinas + totalDisciplinasEletivas;
    const disciplinasRestantes = totalDisciplinasComEletivas - disciplinasCursadas;

    let notaMedia = 0;
    if (numeroDeNotas > 0) {
        notaMedia = somaNotas / numeroDeNotas;
    }

    const progresso = (horasCursadas / totalHoras) * 100;

    document.getElementById('total-horas').textContent = totalHoras;
    document.getElementById('horas-cursadas').textContent = horasCursadas;
    document.getElementById('horas-restantes').textContent = horasRestantes;
    document.getElementById('total-disciplinas').textContent = totalDisciplinasComEletivas;
    document.getElementById('disciplinas-cursadas').textContent = disciplinasCursadas;
    document.getElementById('disciplinas-restantes').textContent = disciplinasRestantes;
    document.getElementById('nota-media').textContent = notaMedia.toFixed(2); // Exibe a nota média com 2 casas decimais

    // Atualiza a barra de progresso
    document.querySelector('.progress-bar').style.width = `${progresso}%`;
    document.querySelector('.skill-bar h4').textContent = `Progresso ${progresso.toFixed(0)}%`;
});