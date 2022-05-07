console.log("start app");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 5000);
});

myPromise.then((text) => {
  console.log(text);
});

console.log("end app");
