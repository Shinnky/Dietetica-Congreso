document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const surnameInput = document.getElementById("surname");
        const nameInput = document.getElementById("name");
        const telInput = document.getElementById("tel");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (surnameInput.value.trim() === "") {
            alert("Por favor ingrese su apellido.");
            return;
        }

        if (nameInput.value.trim() === "") {
            alert("Por favor ingrese su nombre.");
            return;
        }

        if (telInput.value.trim() === "") {
            alert("Por favor ingrese su número de teléfono.");
            return;
        }

        if (emailInput.value.trim() === "") {
            alert("Por favor ingrese su dirección de correo electrónico.");
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Por favor ingrese su consulta.");
            return;
        }

        alert("El formulario se envió correctamente.");
        form.reset(); 
    });
});
