//A module is simply a separate file containing code that can be reused in another file.

const functions = require('./functions')
console.log("Hello World!");
console.log(functions)
console.log(functions.sum(17,3));
console.log(functions.PI);
let obj = new functions.someMathObject();