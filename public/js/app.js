const weatherApi = "/weather"
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');
const temperature = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');

const currentDate = new Date();
const options = {month: 'long'}
const month = currentDate.toLocaleString("en-US", options);
dateElement.textContent = currentDate.getDate() + ", " + month + " " + currentDate.getFullYear();


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //const location = search.value;
    locationElement.textContent = "Loading...";
    temperature.textContent = "";
    weatherCondition.textContent = "";
    weatherIcon.className = "";
    showData(search.value);
});

function showData(city){
    getWeatherData(city, (result) => {
        if(result.cod == 200){
            weatherIcon.className = "wi wi-day-sunny";
            temperature.textContent = Math.round(result.main.temp - 273.15);
            weatherCondition.textContent = result.weather[0].main;
            locationElement.textContent = result.name + ", " + result.sys.country;
        }
        // console.log(result);
    });
}



function getWeatherData(city, callback){
    const locationApi = weatherApi + "?address=" + city;
    fetch(locationApi).then((response) => {
        response.json().then((response) => {
            callback(response);
        });
});
}