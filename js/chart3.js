// کارهای معوقه به تفکیک افراد

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['یعقوب خدری','پشتیبان فنی'],
        datasets: [{
            label: '',
            data: [1,13]
        }]
    },
    options: {
        
    }
});