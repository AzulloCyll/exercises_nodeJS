const request = require("request");

const getUser = (id) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const user = JSON.parse(body);
        resolve(user.name);
      } else {
        reject(error);
      }
    });
  });
};

getUser(2)
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finished"));
