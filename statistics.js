document.addEventListener("DOMContentLoaded", () => {
  // User profile icon functionality
  const userIcon = document.querySelector(".user-icon")
  userIcon.addEventListener("click", () => {
    const confirmLogout = confirm("¿Desea cerrar sesión?")
    if (confirmLogout) {
      window.location.href = "index.html"
    }
  })

  // Chart.js - Flights per month
  const flightsCtx = document.getElementById("flightsChart").getContext("2d")
  new Chart(flightsCtx, {
    type: "bar",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets: [
        {
          label: "Vuelos por Mes",
          data: [18, 22, 30, 25, 28, 32, 24, 19, 15, 21, 23, 20],
          backgroundColor: "rgba(0, 179, 166, 0.7)",
          borderColor: "rgba(0, 179, 166, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  })

  // Chart.js - Findings by category
  const findingsCtx = document.getElementById("findingsChart").getContext("2d")
  new Chart(findingsCtx, {
    type: "pie",
    data: {
      labels: ["Estructuras", "Vegetación", "Anomalías", "Terreno", "Otros"],
      datasets: [
        {
          label: "Hallazgos por Categoría",
          data: [65, 42, 28, 37, 11],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(255, 205, 86, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  })

  // Chart.js - AI Performance over time
  const aiPerformanceCtx = document.getElementById("aiPerformanceChart").getContext("2d")
  new Chart(aiPerformanceCtx, {
    type: "line",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets: [
        {
          label: "Precisión (%)",
          data: [82, 84, 86, 88, 89, 90, 91, 92, 93, 94, 94.5, 94.7],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          min: 80,
          max: 100,
        },
      },
    },
  })

  // Chart.js - Flight time distribution
  const flightTimeCtx = document.getElementById("flightTimeChart").getContext("2d")
  new Chart(flightTimeCtx, {
    type: "doughnut",
    data: {
      labels: ["Inspección", "Mapeo", "Monitoreo", "Entrenamiento", "Pruebas"],
      datasets: [
        {
          label: "Horas de Vuelo",
          data: [142, 87, 65, 28, 20],
          backgroundColor: [
            "rgba(255, 159, 64, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  })
})
