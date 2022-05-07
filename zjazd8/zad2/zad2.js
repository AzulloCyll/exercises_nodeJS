const express = require("express");
const app = express();

const middleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === "alamakota") {
    next();
  } else {
    res.status(401);
    res.send("Bad token");
  }
};

app.use(middleWare);

app.all("*", (req, res) => {
  res.send("Hello worldd");
});

app.listen(4700, () => console.log("server at port 4700"));
