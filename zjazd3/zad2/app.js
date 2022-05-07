let fs = require("fs");
let args = require("yargs").argv;

let name = args.name;
let lastName = args.lastName;

const user = {
  name: name,
  lastName: lastName,
};

if (name && lastName) {
  let jsonData = JSON.stringify(user);

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
