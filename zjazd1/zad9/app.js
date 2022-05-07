const { argv } = require('process')

// if (argv[2]) {
// 	console.log("Hello " + argv[2])
// } else {
// 	console.log("Hello World")
// }

argv[2] ? console.log('Hello ' + argv[2]) : console.log('Hello World')
