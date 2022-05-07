const calc = require('./math')
const fs = require('fs')

// console.log("Sum: " + calc.Sum(2, 3))
// console.log("Mul: " + calc.Mul(2, 3))
// console.log("Sub: " + calc.Sub(2, 3))
// console.log("Div: " + calc.Div(2, 3))
// console.log("pi:" + calc.zmiennapi)

let data =
  'Sum: ' +
  calc.Sum(2, 3) +
  '\n' +
  'Mul: ' +
  calc.Mul(2, 3) +
  '\n' +
  'Sub: ' +
  calc.Sub(2, 3) +
  '\n' +
  'Div: ' +
  calc.Div(2, 3) +
  '\n' +
  'pi:' +
  calc.zmiennapi
console.log(data)

fs.writeFileSync('test.txt', data)
