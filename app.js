const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=insertyourkeyhere&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    // console.log(response); // The whole response
    const data = JSON.parse(response.body);
    console.log(data.current);

});