const http = require("http");

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hellow world from GET");
  } else if (req.method === "POST") {
    res.writeHead(201, { "Content-type": "text/plain" });
    res.write("Hellow world from POST");
  } else if (req.method === "HEAD") {
    res.writeHead(202, { "Content-type": "text/plain" });
    res.write("Hellow world from HEAD"); //head nie ma body wiec nie ma informacji
  }

  res.end();
});

app.listen(4700);
