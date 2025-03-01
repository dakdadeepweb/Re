document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const personagens = document.getElementById("personagens").value;
    const banner = document.getElementById("banner").value;
    const dataLancamento = document.getElementById("data").value;

    const novaAtualizacao = {
        nome,
        personagens,
        banner,
        dataLancamento
    };

    // Pegando atualizações antigas
    let updates = JSON.parse(localStorage.getItem("updates")) || [];

    // Adicionando a nova atualização na lista
    updates.push(novaAtualizacao);

    // Salvando de volta no localStorage
    localStorage.setItem("updates", JSON.stringify(updates));

    alert("Atualização lançada com sucesso!");
    window.location.href = "atualizacoes.html"; // Redireciona para a página de atualizações
});
