let fs = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak",
};

let jsonData = JSON.stringify(user);

fs.writeFile("user.json", jsonData, function (err) {
  if (err) {
    console.log("Write error");
  } else {
    console.log("Write success");
  }
  console.log("End");
});
