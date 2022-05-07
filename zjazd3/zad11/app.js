
let i = 0;
const interval = setInterval(() => {
    i += 1;
    console.log("Hello after " + i * 4 + " seconds.");
    if (i > 1) {
        clearInterval(interval);
    }
}, 4000);