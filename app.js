const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=insertyourkeyhere&query=37.8267,-122.4233';

// request({ url: url }, (error, response) => {
//     // console.log(response); // The whole response
//     const data = JSON.parse(response.body);
//     console.log(data.current);

// });

// request({ url: url, json: true }, (error, response) => {
//     // With json: true now the body in the response is already parsed
//     console.log(response.body.current);

// });

// Geocode using MapBox
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic295am9zZXJvYmVydG8iLCJhIjoiY2thM3I3N3Q4MHM2dDNlcXdoOTE4ZDlrMCJ9.qslcu2B2oXhuzZ9g07ok5w';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        // Turn wifi off to see this error
        console.log('Unable to connect to location services');
    } else if (response.body.features.length === 0) {
        // Replace Los Angeles in api url with some random characters to see this error
        console.log('Please try another search');

    } else {
        console.log('Lat/Long coordinates for: ' + response.body.features[0].place_name);
        console.log(response.body.features[0].center[1]); //latitude
        console.log(response.body.features[0].center[0]); //longitud
    }
});

// pushing to github using ssh