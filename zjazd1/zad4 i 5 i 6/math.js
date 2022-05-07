const sum = (a, b) => {
  return a + b
}

const mul = (a, b) => {
  return a * b
}

const sub = (a, b) => {
  return a - b
}

const pi = Math.PI

module.exports = {
  Sum: sum,
  Mul: mul,
  Sub: sub,
  Div: (a, b) => a / b,
  zmiennapi: pi,
}
