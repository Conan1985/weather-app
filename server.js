const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
const apiKey = '8d6e42e0cdb6020b258506bb77fa05aa';
const cityList = require('./city.list.json');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
    let city = req.body.city;
    // The following code finds the cities with similar names, and return one. 
    let errorMessage = null;
    let filteredCities = [];
    filteredCities = cityList.filter(list => list.name.includes(city));
    let correctCity = false;
    filteredCities.forEach(list => {
        if (list.name === city) {
            correctCity = true;
        }
    })
    // Use the first city in the list if the city given is incorrect
    if (filteredCities.length !== 0 && !correctCity) {
        city = filteredCities[0].name;
        errorMessage = `Guess you are looking for ${city}, right?`
    } 

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if (err) {
            res.render('index', {weather: null, error: 'Not find weather, please try again'});
        } else {
            let weather = JSON.parse(body);
            let description = weather.weather && weather.weather.length > 0 ? weather.weather[0].main : 'unknown';
            let message = `The weather is ${description} in ${city}`;
            res.render('index', {weather: message, error: errorMessage});
        }
    });
})

app.listen(4200, function () {
    console.log('The app is listening on port 4200!');
})