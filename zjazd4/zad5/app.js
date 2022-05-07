const request = require("request");

const getUser = (id) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const user = JSON.parse(body);
        resolve(user);
      } else {
        reject(error);
      }
    });
  });
};

const getWeather = (user) => {
  let lat = user.address.geo.lat;
  let lng = user.address.geo.lng;

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const weather = JSON.parse(body);
        resolve(weather);
      } else {
        reject(error);
      }
    });
  });
};

getUser(2)
  .then((user) => {
    console.log(user.name);
    return getWeather(user);
  })
  .then((weather) => {
    console.log(weather.main);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finished"));
