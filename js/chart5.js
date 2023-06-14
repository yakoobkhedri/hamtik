// مدیران پروژه‌ها

const ctx5 = document.getElementById('myChart5');

new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: ['یعقوب خدری','پشتیبان فنی'],
        datasets: [{
            label: '',
            data: [3,14]
        }]
    },
    options: {
        
    }
});