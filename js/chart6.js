// وضعیت کارها

const ctx6 = document.getElementById('myChart6');

new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['از اینجا شروع کنید','معرفی منوهای همتیک'],
        datasets: [{
            data: [14,36]
        }],
    },
    options: {
        
    }
});