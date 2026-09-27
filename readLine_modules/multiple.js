const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    rl.question("What is your age? ", (age) => {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);

        rl.close();
    });
});