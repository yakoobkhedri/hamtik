// وضعیت پروژه‌ها

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['در حال اجرا'],
        datasets: [{
            label: '',
            data: [2]
        }]
    },
    options: {
        
    }
});