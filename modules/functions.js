let sum = (a,b) => a+b;
const PI = 3.14;
class someMathObject{
    constructor(){
        console.log("Some Object Created!")
    }
}
// module.exports.sum=sum;
// module.exports.PI=PI;
// module.exports.someMathObject=someMathObject;

module.exports = {sum:sum,PI:PI,someMathObject:someMathObject};
