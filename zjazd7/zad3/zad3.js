const express = require("express");
const app = express();

app.disable("x-powered-by"); //disable response

app.get("/:a/:b", (req, res) => {
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

app.listen(4700, () => console.log("Server launched"));
