document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Definição do usuário administrador
    const adminEmail = "alternativejewels12@gmail.com";
    const adminSenha = "Jho171012";

    if (email === adminEmail && senha === adminSenha) {
        alert("Login bem-sucedido! Bem-vindo, Admin.");
        // Redireciona para o painel do admin (troque 'dashboard.html' pelo seu destino)
        window.location.href = "admin.html";
    } else {
        alert("Email ou senha incorretos.");
    }
});
