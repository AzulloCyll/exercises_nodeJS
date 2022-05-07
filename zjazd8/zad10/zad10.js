const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

let filePath = path.join(__dirname, "log.txt");

const middleWare = async (req, res, next) => {
  req.userTime = Date.now();

  let newLine = JSON.stringify(req.userTime) + " [REQUEST]\n";
  fs.appendFile(filePath, newLine, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });

  console.log(req.userTime + " [REQUEST]");

  next();
};

app.use(middleWare);

app.get("/", (req, res) => {
  res.userTime = Date.now();
  res.send("ok");

  let newLine = JSON.stringify(res.userTime) + " [RESPONSE]\n";
  fs.appendFile(filePath, newLine, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });

  console.log(res.userTime + " [RESPONSE]");
});

app.listen(4700, () => console.log("server started on port 4700"));
