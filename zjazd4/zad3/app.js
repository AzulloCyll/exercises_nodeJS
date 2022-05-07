const sub = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a - b < 0) {
      reject("error");
    } else {
      resolve(a - b);
    }
  });
};

sub(4, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

sub(3, 4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
