
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const surname = document.getElementById('surname').value.trim();
      const name = document.getElementById('name').value.trim();
      const tel = document.getElementById('tel').value.trim();
      const email = document.getElementById('email').value.trim();
      const reason = document.getElementById('reason').value.trim();
      const message = document.getElementById('message').value.trim();

      if (surname === '' || name === '' || tel === '' || email === '' || reason === '' || message === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return; 
      }
      
      form.submit();
    });
});