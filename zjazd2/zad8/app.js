let fs = require("fs");
let yargs = require("yargs");

const args = yargs.argv;

let name = args.name;
let lastName = args.lastName;

if (name && lastName) {
	const user = {
		name: name,
		lastName: lastName,
	};

	let jsonData = JSON.stringify(user);

	fs.writeFileSync("user.json", jsonData);
} else {
	console.log("Please add arguments: '--name', and '--lastName'");
}
