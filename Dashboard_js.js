// Header js
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
   link.addEventListener("click", () => {
      menuLinks.forEach((link) => {
         link.classList.remove("is-active");
      });
      link.classList.add("is-active");
   });
});

// Task Activity Chart

const ctx = document.getElementById('Task Activity').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'line',
   data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
         label: "Task Activity",
         data: [90, 60, 80, 50, 60, 55, 80],
         borderColor: 'rgba(58,122,254,1)',
         borderWidth: "3",
         backgroundColor: 'rgba(0,0,0,0)',
         pointBackgroundColor: 'rgba(0, 0, 0, 0)'
      }]
   },
   // Configuration options go here
   options: {
      legend: false,
      elements: {
         point: {
            radius: 0
         }
      },
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
               max: 100,
               min: 0,
               stepSize: 20,
               padding: 10
            },
            borderWidth: 3,
            display: false,
            lineTension: 0.4,
         }],
         xAxes: [{
            ticks: {
               padding: 5
            },

         }]
      }
   }
});
