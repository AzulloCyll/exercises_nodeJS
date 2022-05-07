let fs = require("fs");
let args = require("yargs").argv;

let name, lastName;
let user = {};

fs.readFile("./user.json", "utf-8", function (err, data) {
  if (err) {
    console.log("Read error");
  } else {
    jsonData = JSON.parse(data);
    let user = jsonData;
    console.log(user.name);

    name = args.name;
    lastName = args.lastName;

    user = { name: name, lastName: lastName };

    jsonData = JSON.stringify(user);

    if (name && lastName) {
      fs.writeFile("user.json", jsonData, function (err) {
        if (err) {
          console.log("Write error");
        } else {
          console.log("Write success");
        }
        console.log("End");
      });
    } else {
      console.log("Please add arguments: '--name', and '--lastName'");
    }
  }
});
