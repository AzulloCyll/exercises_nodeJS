const { argv } = require("process")
let fs = require("fs")
let math = require("../zad4 i 5 i 6/math")

if (argv.length >= 5) {
  console.log("Za dużo")
} else if (argv.length <= 3) {
  console.log("Za mało parametrów")
} else {
  let a = parseInt(fs.readFileSync("a.txt", "utf-8"))
  let b = parseInt(fs.readFileSync("b.txt", "utf-8"))
  let data = `
Dodawanie liczb ${a} i ${b} daje w wyniku ${math.Sum(a, b)}
Odejmowanie liczb ${a} i ${b} daje w wyniku ${math.Sub(a, b)}
Mnożenie liczb ${a} i ${b} daje w wyniku ${math.Mul(a, b)}
Dzielenie liczb ${a} i ${b} daje w wyniku ${math.Div(a, b)}
            `
  console.log(data)
}
