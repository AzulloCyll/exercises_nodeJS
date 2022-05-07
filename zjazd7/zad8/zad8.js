const express = require("express");
const app = express();
const router = express.Router();

app.disable("x-powered-by");

app.use(express.json());

let users = [
  {
    name: "Kazimierz",
    username: "kazik",
    email: "kazik@domena.pl",
    id: 1,
  },
  {
    name: "Jaroslaw",
    username: "jaro",
    email: "jaro@domenta.pl",
    id: 2,
  },
  {
    name: "daniel",
    username: "chmur",
    email: "daniel@domena.pl",
    id: 10,
  },
];

let posts = [
  {
    title: "Tytul1",
    body: "Lorem ipsum...",
    id: 1,
  },
];

router.get("/users", (req, res) => {
  res.json(users);
});

router.post("/add", (req, res) => {
  if (!req.query.name || !req.query.username || !req.query.email) {
    res.status(400).send("Missing parameters");
  }

  let userIds = users.map((u) => u.id);
  let maxUserId = Math.max(...userIds);
  let newUserId = maxUserId + 1;

  let user = {
    name: req.query.name,
    username: req.query.username,
    email: req.query.email,
    id: newUserId,
  };

  users.push(user);
  res.statusCode = 201;
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  let user = users.filter((user) => user.id == req.params.id);
  user = user[0];
  console.log(user);

  if (user.length == 0) {
    res.status(404).send("User not found");
  }
  res.format({
    html: function () {
      res.send(
        `<p>User: ${user.name}</p>
         <p>Username: ${user.username}</p>
         <p>email: ${user.email}</p>`
      );
    },
    text: function () {
      res.send(
        `User: ${user.name}, Username: ${user.username}, email: ${user.email}`
      );
    },
    json: function () {
      res.json(user);
    },
  });
});

router.delete("/delete/:id", (req, res) => {
  const userExists = users.find((user) => {
    return user.id == req.params.id;
  });

  if (!userExists) {
    res.statusCode = 404;
    res.send("Not found");
  } else {
    users = users.filter((user) => user.id != req.params.id);

    res.statusCode = 204;
    res.send();
  }
});

router.get("/posts", (req, res) => {
  res.json(posts);
});

router.post("/posts/add", (req, res) => {
  let data = req.body;
  if (!data.title || !data.body) {
    res.status(400).send("Missing parameters");
  }

  let postIds = posts.map((post) => post.id);
  let maxPostId = Math.max(...postIds);
  let newPostId = maxPostId + 1;

  const newPost = {
    id: newPostId,
    title: data.title,
    body: data.body,
  };

  posts.push(newPost);

  res.json(req.body);
});

app.use(router);

app.listen(4700, () => console.log("server at port 4700"));
