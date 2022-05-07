//7. Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu,
//przy użyciu modułu OS(https://nodejs.org/dist/latest-v14.x/docs/api/os.html).
//Dodatkowo: zapis nazwy użytkownika do pliku na dysku.

const os = require('os')
const fs = require('fs')

let userName = os.userInfo().username

console.log(userName)

fs.writeFileSync('saved-username.txt', userName)
