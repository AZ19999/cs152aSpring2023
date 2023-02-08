let name = "John Smith";
//console.log(name.substring(0,name.indexOf(" ")); .save saves the changes you have made as well
console.log(name.substring(0,name.indexOf(" ")));

const messageModule = require("./hello.js"); //will also run this file as well
const newNumbers = require("./info.js");

messageModule.messages2.forEach(m => console.log(m));
//messageModule.messages3("Hello World!"); doesn't work, output not defined?

function module(x, y) {
    console.log(x + y);
}

module(newNumbers.number1, newNumbers.number2);