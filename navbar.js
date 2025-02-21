document.addEventListener("DOMContentLoaded", function() {
    const adminEmail = "alternativejewels12@gmail.com";
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.email === adminEmail) {
        document.getElementById("adminLink").style.display = "inline";
    }
});
