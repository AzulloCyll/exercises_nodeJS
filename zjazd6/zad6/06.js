const http = require("http");

const app = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);

  const a = url.searchParams.get("a");
  const b = url.searchParams.get("b");

  let result = a * b;

  res.writeHead(200, { "Content-type": "text/plain" });
  res.write(`${result}`);

  res.end();
});

app.listen(4700);
