document.addEventListener('DOMContentLoaded', function() {
    // 1. Pega os elementos do formulário e da agenda
    const form = document.getElementById('form-evento');
    const agendaDiv = document.getElementById('agenda');

    // 2. Adiciona um "ouvinte" de evento para quando o formulário for submetido
    form.addEventListener('submit', function(event) {
        // Impede o comportamento padrão de recarregar a página ao submeter o formulário
        event.preventDefault();

        // 3. Captura os valores dos campos
        const novaDataInput = document.getElementById('nova-data');
        const novoInfoInput = document.getElementById('novo-info');

        const data = novaDataInput.value;
        const info = novoInfoInput.value;

        // 4. Verifica se os campos estão preenchidos
        if (data && info) {
            // Cria a div para a data
            const newDateDiv = document.createElement('div');
            newDateDiv.classList.add('date');
            newDateDiv.textContent = data;

            // Cria a div para a informação/descrição
            const newInfoDiv = document.createElement('div');
            newInfoDiv.classList.add('info');
            newInfoDiv.textContent = info;

            // Cria a quebra de linha
            const lineBreak = document.createElement('br');

            // 5. Adiciona os novos elementos ao div #agenda
            agendaDiv.appendChild(newDateDiv);
            agendaDiv.appendChild(newInfoDiv);
            agendaDiv.appendChild(lineBreak);

            // 6. Limpa os campos do formulário
            novaDataInput.value = '';
            novoInfoInput.value = '';
            
            // Opcional: Avisa o usuário
            alert(`Evento "${info}" em ${data} adicionado à agenda!`);
        } else {
            alert("Por favor, preencha a data e a descrição do evento.");
        }
    });
});