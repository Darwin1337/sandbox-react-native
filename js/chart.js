google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        [2010, 77],
        [2011, 67],
        [2012, 22],
        [2013, 23],
        [2014, 25],
        [2015, 9],
        [2016, 10],
        [2017, 77],
        [2018, 47],
        [2019, 22],
        [2020, 23],
        [2021, 23],
        [2022, 12],
        [2023, 9],
        [2024, 10],
        [2025, 10],
        [2026, 77],
        [2027, 67],
        [2028, 22],
        [2029, 23],
        [2030, 34]
    ]);

    var options = {
        hAxis: {
            title: 'Year',
            format: '0000'
        },
        vAxis: {
            minValue: 0
        },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 4.0
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('salesChart'));
    chart.draw(data, options);
}