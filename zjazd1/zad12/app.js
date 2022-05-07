let fs = require("fs")
let process = require("process")

if (process.argv.length <= 2) {
  console.log("Za mało parametrow")
} else if (process.argv.length > 3) {
  console.log("Za dużo parametrow")
} else {
  let path = process.argv[2]
  let files = fs.readdirSync(path)
  console.log("Pliki i foldery w folderze " + path)
  files.forEach((name) => {
    console.log(name)
  })
}
