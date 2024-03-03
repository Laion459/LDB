// Se você precisar adicionar algum script, pode fazê-lo aqui.
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Aqui você pode adicionar lógica para enviar a mensagem por e-mail.
    // Por exemplo, abrir o cliente de e-mail padrão com a mensagem predefinida.
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = 'Contato do Site';

    window.location.href = `mailto:seu-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`E-mail: ${email}\n\nMensagem: ${message}`)}`;
});
