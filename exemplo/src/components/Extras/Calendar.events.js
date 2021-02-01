// Date for the calendar events (dummy data)
var date = new Date();
var d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear();

export default [
    {
        title: 'All Day Event',
        start: new Date(y, m, 1),
        backgroundColor: '#f56954', //red
        borderColor: '#f56954' //red
    },
    {
        title: 'Long Event',
        start: new Date(y, m, d - 5),
        end: new Date(y, m, d - 2),
        backgroundColor: '#f39c12', //yellow
        borderColor: '#f39c12' //yellow
    },
    {
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        backgroundColor: '#0073b7', //Blue
        borderColor: '#0073b7' //Blue
    },
    {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        backgroundColor: '#00c0ef', //Info (aqua)
        borderColor: '#00c0ef' //Info (aqua)
    },
    {
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        backgroundColor: '#00a65a', //Success (green)
        borderColor: '#00a65a' //Success (green)
    },
    {
        title: 'Open Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: '//google.com/',
        backgroundColor: '#3c8dbc', //Primary (light-blue)
        borderColor: '#3c8dbc' //Primary (light-blue)
    }
];
