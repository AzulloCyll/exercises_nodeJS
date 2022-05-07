const http = require("http");

const app = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);

  const a = parseInt(url.searchParams.get("a"));
  const b = parseInt(url.searchParams.get("b"));

  let result;
  let statusCode;

  if (a && b) {
    if (url.pathname === "/mnozenie") {
      result = a * b;
      statusCode = 200;
    } else if (url.pathname === "/dzielenie") {
      if (b != 0) {
        result = a / b;
        statusCode = 200;
      } else {
        result = "Error: divide by 0";
        statusCode = 400;
      }
    } else if (url.pathname === "/dodawanie") {
      result = a + b;
      statusCode = 200;
    } else if (url.pathname === "/odejmowanie") {
      result = a - b;
      statusCode = 200;
    } else {
      result = "Bad pathname";
      statusCode = 404;
    }
  } else {
    result = "Parameters missing";
    statusCode = 400;
  }

  res.writeHead(statusCode, { "Content-type": "text/plain" });
  res.write(`${result}`);

  res.end();
});

app.listen(4700);
