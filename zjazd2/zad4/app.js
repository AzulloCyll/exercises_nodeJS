const _ = require("lodash");
const someArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

const funcResultMax = _.max(someArray);
const funcResultMin = _.min(someArray);

console.log(someArray);
console.log(funcResultMax);
console.log(funcResultMin);
