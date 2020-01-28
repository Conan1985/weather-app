# weather-app
An app that can return current weather with city name input.
openweathermap API is used in this app.

Three scenarios are handled in this app:
* If the city input is in the list of API, the correct weather will return.
* If the city name partly matches one of the cities in the list of API, one of the similar cities is used to return the current weather.
* In all other cases, the city name input will be used, but the API will either return an error or no weather, and the app shows respective notifications to users.

## How to build and run locally?
* Run `npm install` and `node server.js'.
* Go to `localhost:4200` in your browser.

![Weather application demo](demo.mov)
