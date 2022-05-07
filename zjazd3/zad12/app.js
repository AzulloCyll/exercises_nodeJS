
let i = 0;

const interval = setInterval(() => {
    i += 1;
    let string = "Hello";
    console.log(string);
    if (i > 4) {
        console.log("Finish");
        clearInterval(interval);
    }
}, 1000);