let request = require("request");

let getUser = function (url, callback, callback2) {
  request.get({ url: url, json: true }, function (error, response, body) {
    if (error) {
      console.log("Error occured" + error);
      return;
    } else if (response.statusCode === 404) {
      console.log("User not found");
      return;
    }
    let name = body.name;
    console.log(name);

    let lat = body.address.geo.lat;
    let lng = body.address.geo.lng;
    console.log("Lat:", lat, "Lng:", lng);
    callback(lat, lng, name, callback2);
  });
};

exports.getUser = getUser;
