const http = require("http");

const app = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const name = url.searchParams.get("name") || "world";

  res.writeHead(200, { "Content-type": "text/plain" });
  res.write(`Hello ${name}`);

  res.end();
});

app.listen(4700);
