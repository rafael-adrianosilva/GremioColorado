document.addEventListener('DOMContentLoaded', function() {
    // Pega os elementos da agenda
    const form = document.getElementById('form-evento');
    const agendaDiv = document.getElementById('agenda');

    // Adiciona um evento para o formulário/função
    form.addEventListener('submit', function(event) {
        
        // Impede de recarregar 
        event.preventDefault();

        const novaDataInput = document.getElementById('nova-data');
        const novoInfoInput = document.getElementById('novo-info');

        const data = novaDataInput.value;
        const info = novoInfoInput.value;

        if (data && info) {
            const newDateDiv = document.createElement('div');
            newDateDiv.classList.add('date');
            newDateDiv.textContent = data;

            const newInfoDiv = document.createElement('div');
            newInfoDiv.classList.add('info');
            newInfoDiv.textContent = info;

            const lineBreak = document.createElement('br');

            // Adiciona os elementos à agenda
            agendaDiv.appendChild(newDateDiv);
            agendaDiv.appendChild(newInfoDiv);
            agendaDiv.appendChild(lineBreak);

            novaDataInput.value = '';
            novoInfoInput.value = '';
            
            // Avisa que o evento foi cadastrado na agenda
            alert(`Evento "${info}" em ${data} adicionado à agenda!`);
        } else {
            alert("Por favor, preencha a data e a descrição do evento.");
        }
    });
});