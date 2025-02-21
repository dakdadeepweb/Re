document.getElementById("update-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    const updateName = document.getElementById("update-name").value;
    const characters = document.getElementById("characters").value;
    const banner = document.getElementById("banner").files[0];
    const releaseDate = document.getElementById("release-date").value;

    // Verifica se todos os campos foram preenchidos
    if (updateName && characters && banner && releaseDate) {
        alert("Atualização lançada com sucesso!");

        // Armazenando as informações no localStorage
        const updateData = {
            updateName,
            characters,
            banner: URL.createObjectURL(banner),  // Convertendo o banner para URL temporária
            releaseDate
        };

        localStorage.setItem('updateData', JSON.stringify(updateData));  // Armazena os dados no localStorage

        // Limpar o formulário após envio
        document.getElementById("update-form").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
