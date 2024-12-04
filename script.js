const ctx = document.getElementById('cultivosBarChart').getContext('2d');
        const cultivosBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Café', 'Frutas', 'Hortalizas', 'Leguminosas'],
                datasets: [{
                    label: 'Producción en toneladas (2021)',
                    data: [1000, 2500, 1200, 800],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

       
        const pieCtx = document.getElementById('cultivosPieChart').getContext('2d');
        const cultivosPieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Café', 'Frutas', 'Hortalizas', 'Leguminosas'],
                datasets: [{
                    data: [1000, 2500, 1200, 800],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });