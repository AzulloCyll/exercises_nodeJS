const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.writeHead(200, { "Content-type": "application/xml" });
    res.write("Hello from /users path");
  } else if (req.url === "/comments") {
    res.writeHead(200, { "Content-type": "application/xml" });
    res.write("Hello from /comments path");
  }

  res.end();
});

app.listen(4700);
