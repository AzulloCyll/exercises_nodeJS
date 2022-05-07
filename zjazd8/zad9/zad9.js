const express = require("express");

const app = express();

const middleWare = (req, res, next) => {
  req.userTime = Date.now();
  console.log(req.userTime + " [REQUEST]");
  next();
};

app.use(middleWare);

app.get("/", (req, res, next) => {
  res.send("ok");
  // res.userTime = Date.now();
  // console.log(res.userTime + " [RESPONSE]");
  next();
});

const middleWare2 = (req, res) => {
  req.userTime = Date.now();
  console.log(req.userTime + " [RESPONSE]");
};

app.use(middleWare2);

app.listen(4700, () => console.log("server started on port 4700"));
