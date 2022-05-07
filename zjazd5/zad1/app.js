const myFuncWithPromises = () => {
  return new Promise((resolve, reject) => {
    resolve("hellow world from promise");
  });
};

myFuncWithPromises().then((dupa) => console.log(dupa));

const myFuncWithAsync = async () => {
  return "hello worlsd form async(promise)";
};

myFuncWithAsync().then((result) => console.log(result));
