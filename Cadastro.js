document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulação de armazenamento (poderia ser um banco de dados real)
    const usuario = { nome, email, senha };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "home.html"; // Redireciona para a home
});

// Botões de candidatura para desenvolvedor
document.getElementById("btnSim").addEventListener("click", function() {
    window.location.href = "mailto:alternativejewels12@gmail.com?subject=Candidatura%20para%20Desenvolvedor&body=Olá,%20gostaria%20de%20me%20candidatar%20para%20desenvolvedor.";
});

document.getElementById("btnNao").addEventListener("click", function() {
    window.location.href = "home.html"; // Vai para a home se clicar em NÃO
});