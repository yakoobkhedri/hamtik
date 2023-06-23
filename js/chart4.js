// کارهای معوقه به تفکیک پروژه ها

const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['از اینجا شروع کنید','معرفی منوهای واتا دیجیتال'],
        datasets: [{
            label: '',
            data: [3,14]
        }]
    },
    options: {
        
    }
});