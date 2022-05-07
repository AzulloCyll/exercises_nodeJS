const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const middleWare = (req, res, next) => {
  const filePath = path.join(__dirname, req.originalUrl);
  if (fs.existsSync(filePath)) {
    console.log("File exists");
    res.sendFile(filePath);
  } else {
    next();
  }
};

app.use(middleWare);

app.get("/:filename", (req, res) => {
  res.send(`File ${req.params.filename} doesn't exist`);
});

app.listen(4700, () => console.log("Server started on port 4700"));
