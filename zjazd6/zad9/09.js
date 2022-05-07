const { countReset } = require("console");
const http = require("http");

let users = [
  {
    name: "Kazimierz",
    username: "kazik",
    email: "kazik@domena.pl",
    id: 1,
  },
  {
    name: "Jaroslaw",
    lastname: "jaro",
    email: "jaro@domenta.pl",
    id: 2,
  },
  {
    name: "daniel",
    lastname: "chmur",
    email: "daniel@domena.pl",
    id: 3,
  },
];

let contentType;
let statusCode;
let id;

const app = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const params = url.searchParams;

  if (req.method === "POST") {
    if (url.pathname === "/add") {
      let obj = Object.fromEntries(params.entries());
      id = Math.random();
      obj = { ...obj, id: Math.random() };
      users.push(obj);

      statusCode = 200;
      contentType = { "Content-type": "text/plain" };
      result = id.toString();
    } else {
      statusCode = 404;
      result = "Invalid path";
    }
  }

  if (req.method === "GET") {
    const url = new URL(`http://${req.headers.host}${req.url}`);
    let obj = Object.fromEntries(params.entries());
    let idToFind = obj.id;
    if (url.pathname === "/show" && idToFind) {
      let found = users.find((item) => {
        return item.id == idToFind;
      });
      if (found) {
        statusCode = 200;
        contentType = { "Content-type": "application/json" };
        result = JSON.stringify(found);
      } else {
        statusCode = 404;
        result = `Can't find user with ID: ${idToFind}`;
      }
    } else if (url.pathname === "/show") {
      statusCode = 200;
      contentType = { "Content-type": "application/json" };
      result = JSON.stringify(users);
    } else {
      statusCode = 404;
      result = "Invalid path";
    }
  }

  if (req.method === "DELETE") {
    const url = new URL(`http://${req.headers.host}${req.url}`);

    let obj = Object.fromEntries(params.entries());
    let idToFind = obj.id;
    if (url.pathname === "/delete" && idToFind) {
      let found = users.find((item) => {
        return item.id == idToFind;
      });
      if (found) {
        let filtered = users.filter((item) => item.id != idToFind);
        users = [...filtered];
        statusCode = 200;
        contentType = { "Content-type": "text/plain" };
        result = `Deleted user ID: ${idToFind}`;
      } else {
        statusCode = 404;
        result = `Can't find user with ID: ${obj.id}`;
      }
    } else if (url.pathname === "/delete") {
      statusCode = 404;
      result = "ID param needed";
    } else {
      statusCode = 404;
      result = "Invalid path";
    }
  }

  res.writeHead(statusCode, contentType);
  res.write(result);
  res.end();
});

app.listen(4700);
