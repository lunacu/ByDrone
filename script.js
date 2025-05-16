document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault()
  
      // Get form values
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
  
      // Basic validation
      if (!email || !password) {
        alert("Por favor, complete todos los campos")
        return
      }
  
      // Validate against default credentials (admin/admin)
      if (email === "admin" && password === "admin") {
        console.log("Inicio de sesión exitoso")
        // Redirect to dashboard
        window.location.href = "dashboard.html"
      } else {
        alert("Credenciales incorrectas. Use admin/admin")
      }
    })
  })
  