const express = require("express");
const app = express();

app.disable("x-powered-by"); //disable response

app.get("/:username?", (req, res) => {
  //   const name = req.query.name || "World";
  const name = req.params.username || "World";
  res.send(`Hello ${name}`);
});

app.listen(4700, () => console.log("Server launched"));
