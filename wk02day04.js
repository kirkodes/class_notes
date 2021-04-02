// Day 04 Functions; Scope; Hoisting; and Literals

// Literals
// hard coded values that we pop inside of javascript; fixed values

let butlerMascot = 'Bulldog'
let myAge = 28 // this value is hardcoded
let arr = [] // this value is not hardcoded

// Hoisting
/* 
- general way of thinking about how code creation and execution works in JS
- JS puts [var]iables declarations and function declarations into memory during compile phase of the code. This makes it feel that those are "on top" or loaded first. (note not let or const variables, just var & functions)
*/

console.log(myName);
var myName = "Kirsten" // let or const are NOT hoisted, only functions and var[iables]


sayHello();
function sayHello() { // function declaration is hoisted
    console.log("This is a function")
}


func(); // cannot access func() before initialization ... it is a function expression
let func = function() { //created a function as a function expression; called the same way 
    console.log("this is a function expression") // function expression is NOT hoisted
}

// Scope
// hierarchy of variables in our code - commonly referred to as global scope, local scope, parent scope, and child scope.

let coffeeOrigin = "Ethiopia - global scope" // global scope

function exampleFunction() {
    let x = 'local scope - declared inside function' // local scope; within squiggly lines
    console.log(x);
    console.log(coffeeOrigin); //will still print because its globally scoped
}
exampleFunction();

// Global scope can be accessed by local function scope
// Local scope cannot be accessed by global scope

// MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope


// Functions
// block of code designed to perform a particular task
// TBD

function addNums(x, y) {
    let result = x + y;
    return result
}

addNums(5, 6)
console.log(addNums(5, 6))
