# weather-app
An app that can return current weather with city name input.
openweathermap API is used in this app.

Four scenaries are handled in this app:
* If the city input is in the list of API, correct weather will returned.
* If the city name partly matches one of the city in the list of API, one of the similar city is used to return the current weather.
* In all other cases, the city name input will be used, but the API will either return error or no weahter, and the app shows respective notifications to users.

## How to build and run locally?
* Run `npm install` and `node server.js'.
* Go to `localhost:4200` in your browser.

Here is a demo of my app:
![Weather application demo](demo.mov)
