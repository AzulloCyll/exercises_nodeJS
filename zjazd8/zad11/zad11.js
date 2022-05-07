const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res, next) => {
  const { id } = req.params;

  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  axios
    .get(URL)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      next(error);
    });
});

const writeLog = (status, text) => {
  const time = Date.now();
  const filePath = path.join(__dirname, "log.txt");
  const line = Date.now() + ", STATUS: " + status + ", " + text + "\n";
  fs.appendFileSync(filePath, line, "utf-8");
};

app.use((error, req, res, next) => {
  if (error.response) {
    const { status, statusText } = error.response;
    res.status(status);
    res.send(statusText);
    writeLog(status, statusText);
  } else {
    res.status(500);
    res.send("Connetion error");
    writeLog("500", "Connetion error");
  }
});

app.listen(4700, console.log("server running on 4700"));
