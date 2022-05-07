const express = require("express");
const app = express();

app.use(express.static("./images"));

app.get("/:filename", (req, res) => {
  res.send(`File ${req.params.filename} doesn't exist`);
});

app.listen(4700, () => console.log("Server started on port 4700"));
