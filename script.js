const toggle = document.querySelector(".image");
const sideBar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => sideBar.classList.toggle("close"));
var options = {
    series: [{
            name: "Employers",
            data: [44, 55, 41, 40, 30, 56, 89, 78, 90, 61],
        },
        {
            name: "Employee",
            data: [44, 55, 41, 40, 30, 56, 89, 78, 90, 61],
        },
        {
            name: "total Interest",
            data: [44, 55, 41, 40, 30, 56, 89, 78, 90, 61],
        },
    ],
    chart: {
        type: "bar",
        height: 200,
        width: "100%",
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    responsive: [{
        breakpoint: 200,
    }, ],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        type: "Number",
        categories: [20, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 80],
    },
    yaxis: {
        type: "currency",
        categories: [20, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 80],
    },
    legend: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
    dataLabels: {
        enabled: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();