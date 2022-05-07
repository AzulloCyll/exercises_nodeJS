let request = require("request");

let getUser = function (url, callback) {
  request.get({ url: url, json: true }, function (error, response, body) {
    if (error) {
      console.log("Error occured" + error);
      return;
    } else if (response.statusCode === 404) {
      console.log("User not found");
      return;
    }
    console.log(body.name);
    let lat = body.address.geo.lat;
    let lng = body.address.geo.lng;
    console.log("Lat:", lat, "Lng:", lng);
    callback(lat, lng);
  });
};

exports.getUser = getUser;
