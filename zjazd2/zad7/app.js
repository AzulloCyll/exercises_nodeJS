let fs = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak",
};

let jsonData = JSON.stringify(user);

fs.writeFileSync("user.json", jsonData);
