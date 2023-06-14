// پروژه‌های جاری-ماهیانه

const ctx10 = document.getElementById('myChart10');

new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: ['ماه قبل','ماه جاری','ماه بعد','ماه 4','ماه 5','ماه 6','ماه 7','ماه 8','ماه 9','ماه 10','ماه 11','ماه 12'],
        datasets: [{
            label: 'کار ها',
            data: [.3,.8,1.9,2,1.7,2,1,2,2,2,2,2]
        }],
    },
    options: {
        
    }
});
