const http = require("http");

const app = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const params = url.searchParams;

  const obj = JSON.stringify(Object.fromEntries(params.entries()));

  res.writeHead(203, { "Content-type": "application/json" });
  res.write(obj);

  res.end();
});

app.listen(4700);
