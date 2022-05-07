console.log("start app");

const myPromise = new Promise((resolve, reject) => {
  resolve("Hello world");
});

myPromise.then((text) => {
  console.log(text);
});

console.log("end app");
