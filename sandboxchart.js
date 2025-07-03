const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My Chart Data',
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
