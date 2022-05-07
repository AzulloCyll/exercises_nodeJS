let request = require("request");
let args = require("yargs").argv;
let id = args.id;

let url = "https://jsonplaceholder.typicode.com/users/" + id;
let url2 =
  "https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}";

if (id) {
  request(url, function (error, response, body) {
    if (error) {
      console.log("Comunication Error");
    } else if (response.statusCode == 200) {
      let person = JSON.parse(body);
      if (person !== {}) {
        console.log(person.name);
        console.log(person.address.geo.lat, person.address.geo.lng);

        let lat = person.address.geo.lat;
        let lng = person.address.geo.lng;

        url2 = url2.replace("{LAT}", lat).replace("{LNG}", lng);

        request(url2, function (error, response, body) {
          if (error) {
            console.log("Comunication Error");
          } else if (response.statusCode == 200) {
            let temp = JSON.parse(body);
            console.log(temp.weather[0].main);
            console.log("End");
          }
        });
      }
    } else if (response.statusCode == 404) {
      console.log("Error 404");
      console.log("End");
    }
  });
} else if (id == 0) {
  console.log("No such user");
  console.log("End");
} else {
  console.log("Please add argument --id");
  console.log("End");
}
