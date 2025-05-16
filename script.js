document.addEventListener('DOMContentLoaded', function() {
    // Get the login form
    const loginForm = document.getElementById('loginForm');
    
    // Add submit event listener
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Iniciando sesión con:', { email, password });
        
        // For demo purposes, show success message
        alert('Inicio de sesión exitoso');
        
        // Clear form
        loginForm.reset();
    });
    
    // Register link functionality
    const registerLink = document.querySelector('.register-link a');
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirigiendo a la página de registro');
        // Here you would redirect to the registration page
    });
});