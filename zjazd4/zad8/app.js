let axios = require("axios");

const getUser = (id) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url); //zwraca promise
};

const getWeather = (user) => {
  let lat = user.address.geo.lat;
  let lng = user.address.geo.lng;

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return axios.get(url).then((response) => {
    console.log(response.data.weather[0]);
  });
};

getUser(3)
  .then((user) => {
    console.log(user.data.name);
    getWeather(user.data).finally(() => {
      console.log("finally");
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
