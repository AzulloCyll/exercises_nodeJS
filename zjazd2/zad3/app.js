const _ = require("lodash");

const someArray = ["ala", 3, "ma", "kota", 2, "ala", 5, 3];

const funcResult = _.uniq(someArray);

console.log(someArray);
console.log(funcResult);
