const yargs = require("yargs");
const args = yargs.argv;
const calc = require("./calc");

let a = args.a;
let b = args.b;
let operator = args.operator;
let result;

switch (operator) {
  case "+":
    result = calc.sum(a, b);
    break;

  case "-":
    result = calc.sub(a, b);
    break;

  case "*":
    result = calc.mul(a, b);
    break;

  case "/":
    result = calc.div(a, b);
    break;
}

console.log("Wynik: " + result);
