diff = (arrA, arrB) => {
  let result = [];
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      result.push(arrA[i]);
    }
  }
  return result;
};

module.exports = {
  diff: diff,
};
