const express = require("express");
const app = express();

const middleWare = (req, res, next) => {
  console.log(req.method + " " + req.url + " " + JSON.stringify(req.query));
  next();
};

app.all("*", (req, res, next) => {
  res.send("Hello worldd");
  next();
});

app.use(middleWare);

app.listen(4700, () => console.log("server at port 4700"));
