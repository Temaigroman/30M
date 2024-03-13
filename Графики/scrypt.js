const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'doughnut',
data: {
  labels: ["China", "India", "United States", "Japan"],
  datasets: [{
    label: 'Population',
    data: [1379302771, 1281935911, 326625791, 260580739],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 206, 86)',
      'rgb(75, 192, 192)',
        ]
  }],
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}});
