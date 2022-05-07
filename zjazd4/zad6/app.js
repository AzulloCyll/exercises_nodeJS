const request = require("request");

const getUser = (id) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const user = JSON.parse(body);
        resolve(user);
      } else {
        reject(error);
      }
    });
  });
};

const promise1 = getUser(2);
const promise2 = getUser(5);
const promise3 = getUser(7);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    values.forEach((user) => console.log(user.name));
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("Finished");
  });
