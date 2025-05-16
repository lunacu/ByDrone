document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to all cards
    const cards = document.querySelectorAll(".card")
  
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const cardTitle = this.querySelector("h3").textContent
        console.log(`Clicked on ${cardTitle}`)
        alert(`Has seleccionado: ${cardTitle}`)
      })
    })
  
    // User profile icon functionality
    const userIcon = document.querySelector(".user-icon")
  
    userIcon.addEventListener("click", () => {
      const confirmLogout = confirm("¿Desea cerrar sesión?")
      if (confirmLogout) {
        window.location.href = "index.html"
      }
    })
  })
  