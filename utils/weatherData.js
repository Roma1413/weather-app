const request = require('request');

const openWeatherMap = {
    BASE_URL: 'http://api.openweathermap.org/data/2.5/weather?q=',
    SECRETE_KEY: '1e070bb5f7dc9b0daf9d23242a15d64d',
}


const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + 
    encodeURIComponent(address) + 
    "&APPID=" + openWeatherMap.SECRETE_KEY;
    console.log(url)

    request({url, json: true}, (error, data) => {
        if(error) {
            callback(true, "Unable to fetch data. Please try again later");
            return;
        }
    callback(false, data?.body)
    })
};

module.exports = weatherData;