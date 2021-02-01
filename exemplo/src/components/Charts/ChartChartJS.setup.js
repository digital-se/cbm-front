
// random values for demo
const rFactor = () => Math.round(Math.random() * 100)

// Line chart
// -----------------------------------
export const Line = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(114,102,186,0.2)',
            borderColor: 'rgba(114,102,186,1)',
            pointBorderColor: '#fff',
            data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
        }, {
            label: 'My Second dataset',
            backgroundColor: 'rgba(35,183,229,0.2)',
            borderColor: 'rgba(35,183,229,1)',
            pointBorderColor: '#fff',
            data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
}

// Bar chart
// -----------------------------------
export const Bar = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            backgroundColor: '#23b7e5',
            borderColor: '#23b7e5',
            data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
        }, {
            backgroundColor: '#5d9cec',
            borderColor: '#5d9cec',
            data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
}

//  Doughnut chart
// -----------------------------------

export const Doughnut = {
    data: {
        labels: [
            'Purple',
            'Yellow',
            'Blue'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#7266ba',
                '#fad732',
                '#23b7e5'
            ],
            hoverBackgroundColor: [
                '#7266ba',
                '#fad732',
                '#23b7e5'
            ]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
}

// Pie chart
// -----------------------------------
export const Pie = {
    data: {
        labels: [
            'Purple',
            'Yellow',
            'Blue'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#7266ba',
                '#fad732',
                '#23b7e5'
            ],
            hoverBackgroundColor: [
                '#7266ba',
                '#fad732',
                '#23b7e5'
            ]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
}

// Polar chart
// -----------------------------------
export const Polar = {
    data: {
        datasets: [{
            data: [
                11,
                16,
                7,
                3
            ],
            backgroundColor: [
                '#f532e5',
                '#7266ba',
                '#f532e5',
                '#7266ba'
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'Label 1',
            'Label 2',
            'Label 3',
            'Label 4'
        ]
    },
    options: {
        legend: {
            display: false
        }
    }
}

// Radar chart
// -----------------------------------
export const Radar = {
    data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(114,102,186,0.2)',
            borderColor: 'rgba(114,102,186,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        }, {
            label: 'My Second dataset',
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
}