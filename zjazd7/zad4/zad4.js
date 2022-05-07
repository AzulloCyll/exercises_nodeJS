const express = require("express");
const app = express();

app.disable("x-powered-by"); //disable response

app.get("/mnozenie/:a/:b", (req, res) => {
  const { a, b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    res.status = 400;
    res.send("Bad parameters");
  } else {
    const result = a * b;

    res.statusMessage = ":)";
    res.send(`Result is ${result}`);
  }

  res.send(`Result is ${result}`);
});

app.get("/dodawanie/:a/:b", (req, res) => {
  const { a, b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    res.status = 400;
    res.send("Bad parameters");
  } else {
    const result = a + b;

    res.statusMessage = ":)";
    res.send(`Result is ${result}`);
  }

  res.send(`Result is ${result}`);
});

app.get("/odejmowanie/:a/:b", (req, res) => {
  const { a, b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    res.status = 400;
    res.send("Bad parameters");
  } else {
    const result = a - b;

    res.statusMessage = ":)";
    res.send(`Result is ${result}`);
  }

  res.send(`Result is ${result}`);
});

app.get("/dzielenie/:a/:b", (req, res) => {
  const { a, b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    res.status = 400;
    res.send("Bad parameters");
  } else if (b == 0) {
    res.status = 400;
    res.send("Shold not divide by 0");
  } else {
    const result = a / b;

    res.statusMessage = ":)";
    res.send(`Result is ${result}`);
  }
});

app.listen(4700, () => console.log("Server launched"));
