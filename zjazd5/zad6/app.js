const axios = require("axios");

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  let result = await axios.get(url);
  return result.data;
};

const getWeather = async (data) => {
  let lat = data.address.geo.lat;
  let lng = data.address.geo.lng;
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  let weather = axios.get(url);
  return weather;
};

(async () => {
  try {
    let result = await getUser(4);
    let weather = await getWeather(result);
    console.log("Name:", result.name);
    console.log("Temperature in user location:", weather.data.main.temp);
  } catch (error) {
    console.log(error);
  }
})();
