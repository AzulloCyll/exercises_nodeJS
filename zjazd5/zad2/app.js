const add = async (a, b) => {
  const result = a + b;
  if (result % 2 === 0) {
    throw new Error("liczba parzysta");
  }
  return result;
};

add(2, 3)
  .then((result) => {
    console.log("Ok: " + result);
  })
  .catch((error) => console.log("Error " + error));

add(4, 2)
  .then((result) => {
    console.log("Ok: " + result);
  })
  .catch((error) => console.log("Error " + error));
