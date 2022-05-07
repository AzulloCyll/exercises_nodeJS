const { getUser } = require("./user");
const { getWeather } = require("./weather");

let id = 2;
let url = " https://jsonplaceholder.typicode.com/users/" + id;

getUser(url, getWeather);
