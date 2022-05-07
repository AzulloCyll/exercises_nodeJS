let axios = require("axios");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};
const getAlbums = (id) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  return axios.get(url);
};
const getPhotos = (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  return axios.get(url);
};

getUser(2)
  .then((response) => {
    console.log(response.data.name);
    return getAlbums(response.data.id);
  })
  .then((response) => {
    console.log("Albumy");
    response.data.map((element) => console.log(element.title));
    return getPhotos(response.data[0].id);
  })
  .then((response) => {
    console.log("Photos");
    response.data.map((element) => console.log(element.title));
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => "Finished");
