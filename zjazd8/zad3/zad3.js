const express = require("express");
const app = express();

const users = [
  {
    login: "jan",
    password: "alamakota",
    name: "Jan",
  },
  {
    login: "adam",
    password: "cukierki",
    name: "Adam",
  },
];

const verifyToken = (token) => {
  if (!token.includes(":")) {
    return false;
  }

  const [login, password] = token.split(":");
  return users.some(
    (user) => user.login === login && user.password === password
  );
};

const middleWare = (req, res, next) => {
  const token = req.headers.authorization;

  if (verifyToken(token)) {
    next();
  } else {
    res.status(401);
    res.send("Bad token");
  }
};

app.use(middleWare);

app.all("*", (req, res) => {
  res.send("Hello world!");
});

app.listen(4700, () => console.log("server at port 4700"));
