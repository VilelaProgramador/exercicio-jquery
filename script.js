$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault(); 

        const tarefa = $('#nome-tarefa').val(); 

        if (tarefa) {
            const novoItem = $('<li></li>').text(tarefa);
            
            $('#lista-tarefas').append(novoItem);
            
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('tarefa-concluida');
    });
});