const axios = require("axios");

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  let result = await axios.get(url);
  return result.data.name;
};

(async () => {
  let result = await getUser(4);
  console.log(result);
})();
