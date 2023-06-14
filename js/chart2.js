// مدیران پروژه‌ها

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['یعقوب خدری','پشتیبان فنی'],
        datasets: [{
            label: '',
            data: [1,1]
        }]
    },
    options: {
        
    }
});