//     8. Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku`a.txt`,
//     drugą liczbę z pliku`b.txt`.Na tych liczbach należy wykonać operacja dodawania, odejmowania,
//     mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku`wynik.txt`, każdy wynik w osobnej linii.
//     Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v14.x/docs/api/fs.html)

let fs = require("fs")
let math = require("../zad4 i 5 i 6/math")

let a = parseInt(fs.readFileSync("a.txt", "utf-8"))
let b = parseInt(fs.readFileSync("b.txt", "utf-8"))

let data = `
Dodawanie liczb ${a} i ${b} daje w wyniku ${math.Sum(a, b)}
Odejmowanie liczb ${a} i ${b} daje w wyniku ${math.Sub(a, b)}
Mnożenie liczb ${a} i ${b} daje w wyniku ${math.Mul(a, b)}
Dzielenie liczb ${a} i ${b} daje w wyniku ${math.Div(a, b)}
`

fs.writeFileSync("wynik.txt", data)
