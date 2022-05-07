const http = require("http");

const app = http.createServer((req, res) => {
  res.end("Hellow world");
});

app.listen(4700);
