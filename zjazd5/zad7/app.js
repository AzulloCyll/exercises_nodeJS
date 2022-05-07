const axios = require("axios");

const getUser = async (id) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  let result = axios.get(url);
  return result;
};

const getPosts = async (id) => {
  let url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  let result = axios.get(url);
  return result;
};

const getComments = async (id) => {
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  let result = axios.get(url);
  return result;
};

(async () => {
  let user = await getUser(2);
  let posts = await getPosts(2);
  let comments = await getComments(2);

  console.log("Name:", user.data.name);
  console.log("e-mail:", user.data.email);
  console.log("Number of posts:", posts.data.length);
  console.log("Number of comments", comments.data.length);
})();
