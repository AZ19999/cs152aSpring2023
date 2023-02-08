// use node hello.js in console to run this code, it will run every function on this page
//type  node in console to enter a REPL environment, basically you can do live coding

console.log("Hello world!");

let message = myFunction(); //calls the function when code is run

function myFunction() {
    console.log("Hello world!");
}

let message2 = ()=> { //anonymous function
    console.log("Hello world!");
};

let x = 10;
let y = 20;
console.log(x + y);

let messages = ["hi", "good afternoon"];
messages.forEach(item => console.log(item)); //another anonymous function using =>

exports.messages2 = messages; //allows this to be used in other scripts
exports.messages3 = (input) => console.log(output);
