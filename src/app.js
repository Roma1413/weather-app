const express = require('express');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();


const weatherData = require("../utils/weatherData")


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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send("You must provide an address");
    }
    weatherData(req.query.address, (error, result) =>{
    if(error){
        return res.send(error)
    }
    res.send(result);
})
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});