//Asynchronous JS Functions
/*
    - async returns a Promise
    - await makes a function wait for a Promise (for a promise to resolve for ex)

*/

// function standardFunction(){
//     return console.log("1. This is a standard function.")
// };
// standardFunction();

// async function asyncFunction() {
//     return console.log("2. this returns a promise.")
// };
// asyncFunction();

// // async function asyncFunction() {
// //     return Promise.resolve('this is resolved.')
// // }

// // await and .then are the same thing per Paul

// async function asyncAction() {
//     setTimeout(() => {
//         console.log("3. Async finally hit ya!")
//     }, 3000);
// }
// asyncAction();



// Promise
/*
Commit to something
    - completed -> resolved
    - rejected
*/

// asynch function
let p = new Promise((resolve, reject) => {
    // Promise Object with one function with resolve and reject parameters
    let a = 1 + 2
    if (a === 2) {
        resolve("Promise successful and Resolved")
    } else {
        reject("Promise rejected")
    }
})

p.then((message) => {
    // anything inside .then is a resolve. Takes a function with a single parameter
    console.log(`This is the .then ${message}`)
}).catch((message) => {
    // anything inside .catch is a reject state
    console.log(`This is the .catch() ${message}`)
})


// Try, Catch, Throw, and Finally
// try/catch only handles run time errors
//throw is for custom errors

try {
    // test a block of code
    callingSomeBSFunctionThatDoesntExist()
    console.log("Start of the try")
} catch(err) {
    //handles the error
    console.log("Error has occured" + err)
    // err.name logs the name of the error; err.message logs the message
} finally {
    //executes the code after try/catch regardless of the result
    console.log("Finally ALWAYS runs")
}
console.log("The execution continues.")

// Custom errors
// ex 1
let json = {"age": 30}

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }
} catch(e) {
    console.log(`JSON Error: ${e}`) //e.name or e.message for specificity
}

// ex 2
function upperCase(name) {
    if (typeof name !== "string") {
        throw new TypeError("Name must be a string")
    }
    return name.toUpperCase();
}

console.log(upperCase("kirsten"))


// random function example in the middle of class, because we were getting hung up on resolve vs return vs console.log
// function addNums(x, y) {
//     let sum = x + y
//     console.log(sum)
//     return sum
// }

// addNums(5, 5)
// let result = addNums(5, 5)
// let result2 = addNums(7, 15)
// document.querySelector(".result").innerText = result
// document.querySelector(".result").innerText = result2
