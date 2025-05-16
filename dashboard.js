document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to all cards
    const cards = document.querySelectorAll(".card")
  
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const cardTitle = this.querySelector("h3").textContent
        console.log(`Clicked on ${cardTitle}`)
  
        // Check if the card has a data-page attribute
        const targetPage = this.getAttribute("data-page")
        if (targetPage) {
          window.location.href = targetPage
        } else {
          alert(`Has seleccionado: ${cardTitle}`)
        }
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
  