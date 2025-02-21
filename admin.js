// Abrir e fechar o formulário de adicionar administrador
document.getElementById('open-add-admin-form').addEventListener('click', function() {
    const form = document.getElementById('add-admin-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Adicionar o novo admin (aqui, apenas vamos exibir um alerta para simulação)
document.getElementById('add-admin-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    if (email) {
        // Aqui você poderia fazer um envio real para o backend ou armazenar no banco de dados
        // Por enquanto, vamos simular com um alerta:
        alert(`Administrador com o e-mail ${email} foi adicionado com sucesso!`);
        
        // Limpar o campo de email e esconder o formulário
        document.getElementById('email').value = '';
        document.getElementById('add-admin-form').style.display = 'none';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});
