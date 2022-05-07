const { getUser } = require("./user");
const { getWeather } = require("./weather");
let fs = require("fs");

let id = 2;
let url = " https://jsonplaceholder.typicode.com/users/" + id;

let save = function (name, temp) {
  let data = {
    name: name,
    temperature: temp,
  };

  data = JSON.stringify(data);

  fs.writeFile("data.json", data, (err) => {
    if (err) {
      console.log("Write error".err);
    }
    console.log("Write success");
  });
};

getUser(url, getWeather, save);
