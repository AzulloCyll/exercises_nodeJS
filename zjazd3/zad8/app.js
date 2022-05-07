let request = require("request");

let url = "https://jsonplaceholder.typicode.com/users/2";
let url2 =
  "https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}";

function getUser(url, callback) {
  request(url, function (error, response, body) {
    if (response.statusCode === 200) {
      let userLat, userLng;
      body = JSON.parse(body);
      userName = body.name;
      userLat = body.address.geo.lat;
      userLng = body.address.geo.lng;
      console.log(userName, userLat, userLng);
      callback(userLat, userLng);
    }
  });
}

function getWeather(userLat, userLng) {
  newURL = url2.replace("{LAT}", userLat).replace("{LNG}", userLng);
  request(newURL, function (error, response, body) {
    if (response.statusCode === 200) {
      body = JSON.parse(body);
      weather = body.weather[0].main;
      console.log(weather);
    }
  });
}

getUser(url, getWeather);
