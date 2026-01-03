const express = require('express');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();


const weatherData = require("../utils/weatherData")
const newsData = require("../utils/news")

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render("index", {title: 'Weather app'});
});


app.get('/search', (req, res) => {
    const city = req.query.address;
    if (!city) {
        return res.send({ error: "You must provide a city" });
    }

    
    weatherData(city, (weatherError, weatherResult) => {
        if (weatherError) {
            return res.send({ error: weatherResult });
        }

        
        newsData(city, (newsError, newsResult) => {
            if (newsError) {
                return res.send({ 
                    weather: weatherResult,
                    newsError: newsResult
                });
            }

            
            res.send({
                weather: weatherResult,
                news: newsResult.articles
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });