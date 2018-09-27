const forecast = [
    {
        day: "monday",
        weather: "lightning"
    },
    {
        day: "tuesday",
        weather: "cloudy"
    },
    {
        day: "wednesday",
        weather: "windy"
    },
    {
        day: "thursday",
        weather: "sunny"
    },
    {
        day: "friday",
        weather: "rain"
    },
    {
        day: "saturday",
        weather: "lightning"
    },
    {
        day: "sunday",
        weather: "fog"
    },
]

function initialize() {

    document.querySelector(`monday img`).src = `images/${forecast[0]}.svg`;
    document.querySelector(`tuesday img`).src = `images/${forecast[1]}.svg`;
    document.querySelector(`wednesday img`).src = `images/${forecast[2]}.svg`;
    document.querySelector(`thursday img`).src = `images/${forecast[3]}.svg`;
    document.querySelector(`friday img`).src = `images/${forecast[4]}.svg`;
    document.querySelector(`saturday img`).src = `images/${forecast[5]}.svg`;
    document.querySelector(`sunday img`).src = `images/${forecast[6]}.svg`;

}