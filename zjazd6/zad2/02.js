const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(201, { "Content-type": "text/plain" }); //kod odpowiedzi, http status code
  res.write("Hellow world");

  res.end();
});

app.listen(4700);
