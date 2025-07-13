AOS.init();

let chartRendered = false;

function renderSkillChart() {
  const ctx = document.getElementById('skillChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Node.js', 'Power BI'],
      datasets: [{
        label: 'Proficiency (%)',
        data: [95, 90, 85, 80, 75, 70],
        backgroundColor: '#38bdf8',
        borderRadius: 8
      }]
    },
    options: {
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      },
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: '#f8fafc'
          },
          grid: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        x: {
          ticks: { color: '#f8fafc' },
          grid: { display: false }
        }
      }
    }
  });
}

const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !chartRendered) {
      renderSkillChart();
      chartRendered = true;
    }
  });
}, {
  threshold: 0.5
});

chartObserver.observe(document.getElementById('chart-wrapper'));
