/*
ARRAYS & OBJECTS
*/

// data, fetching, APIs

//Array
/*
high-level, list-like object to be traversed (to go through something) and mutated (able to change, let is mutable whereas const is immutable, strings are immutable).
    - arrays are indexed; integers as element index (arrays start at 0)
    - can be accessed by a bracket notation [index] or dot notation (method)
    - arrays are zero index
        - first object at zero (0)
        - last object at array length - 1 --> object.length - 1
*/

// Create an array
//2 ways to create an array, 1st way is most common, 2nd is less common for arrays and more common for objects
// 1st)
let british = ["rolls royce", "bentley", "caterham", "ashton martin"];
console.log(british[0], british[1]); //  logs first 2 elements - rolls royce and bentley
// if you did whats below without the console.log...its still functional just not printing to the console
console.log(british[3]);

//how would you get the last element out of an array if you don't know how many elements there are?
console.log(british[british.length -1]); //if you just console.logged british.length -1, you'd get the index, not the actual value so you have to square bracket british again.


// Array methods

console.log(british.length); // returns length of an array
british.push("mini"); //push appends an element to the end of an array, adds items
// console.log(british) 

british.splice(0, 2, "Jaguar", "another bri'ish cahh"); // splice takes something(s) out and adds something. (takes an index to start, how many to remove aka delete count, 'and what to replace it with')... modifies original array
console.log(british);

// british.pop(); // Removes the last element/index from an array 'mini' and returns it. If the array is empty, undefined is returned and the array is not modified.
// let bReturn = british.pop() //like maybe if you're deleting a user from an array, if you wanted to grab the variable before its gone forever
// console.log(bReturn); // returns it and pops it out
console.log(british);

british.unshift("bentley", "land rover"); // Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
console.log(british);
// to check the return

british.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(british);

british.indexOf('land rover'); // The value to locate in the array.   Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
british.indexOf('maserati'); //-1 cause not present
console.log(british.indexOf('land rover', 1)); // also -1, because land rover is at position 0, not 1
//indexOf searches an array for an index of element. can add second param to select start index

console.log(british.includes('maserati')); // The element to search for. Determines whether an array includes a certain element, returning true or false as appropriate.
// includes determines whether array has a specific element. can add second param to select start index. returns true/false




// Advanced array manipulations

let german = ["BMW", "mercedes", "audi", "porsche", "alpina", "VW"];

for (cars in german) {
    console.log(cars);
}; // shows index

for (cars of german) {
    console.log(cars);
}; // shows value

// array.forEach() runs a function for each element in an array ****** the most powerful tool when it comes to arrays!! They will ask you to do forEach() at interviews
/* A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

Performs the specified action for each element in an array.
*/

german.forEach(car => console.log(car)); // this forEach, performs the same thing as the for of loop above... much
//simpler and cleaner -- also this is an arrow function // same as (function(car) { console.log(car) })
//takes a callback function inside as one of its parameters


// array.map() --> transforms elements in original array by callback function and returns a new, modified array

let germanUpperCase = german.map(car => car.toUpperCase()); // assign a variable to it so it'll print
console.log(germanUpperCase);
// OR you could do it this way
console.log(german.map(car => car.toUpperCase())); // this is good just to see it, but assigning a variable like above allows you to use it again later on in your code


// array.filter() --> creates a new array with elements that pass a test within a given function
// creates an array with car elements that start with letter 'a' (remember JS is case sensitive :P)
console.log(german.filter(car => car.startsWith("a")));
console.log(german.filter(car => car.startsWith("a") || car.startsWith("B")));






// Objects
/*
Containers for values in a JSON format (JavaScript Object Notation).
    - exists as a string !! impt. bc it needs to be converted to its native JavaScript language
    - has properties and methods
        - .property
        - .method()
        - associative arrays (each property is associated with a string value)
*/

// define JS object with an object literal... 
// object literal means its hard-coded in; like the example below

let car = {
    // key : value pair (properties) that are comma separated
    make: "porsche", // make is the key, porche is the value... together they are a property
    model: "911",
    country: "germany",
    driver: "walter rohl",
    association: {
        name: "jeff",
        lastName: "gordon",
    }
}

// accessing object values

console.log(car.make); // access using key from the object
console.log(car["model"]); // access using object key
let returnKeys = Object.keys(car); // returns keys in an array
console.log(returnKeys);
console.table(car); // makes a nice visual table in the console

// Object property reassignment
console.log(car); // will show you the initial make as porsche
car.make = "maserati";
console.log(car.make);
console.log(car); // now we've reassigned the make to maserati
car["model"] = "granturismo S"; // another way to reassign
console.log(car); 
console.log(car.association.name); // dot notation lets you access objects within objects
// to access nested objects within an object (think of a ladder)


//Object Constructor (another way of creating objects)

let client = new Object; //create a new object without having to hard-code one in
console.log(client); //creates an empty object

client.firstName = 'Kirsten';
client.lastName = 'Purpura';
client.birthYear = 1992;
console.log(client); //works kinda like reassignment

let manager = {
    firstName: 'Stephen',
    lastName: 'Purpura',
    birthYear: 1993,
    // 1st example: requires parameter of birthYear from outside
    // setAge: function(birthYear) {
    //     return 2021 - birthYear
    // }
    //another example: takes property from this.birthYear
    // setAge: function () {
    //     return 2021 - this.birthYear // this refers to the object it belongs to
    setAge: function () {
        this.age = 2021 - this.birthYear // creates new age property with value of function calculation once it has been called
    }
}

// console.log(manager.setAge(1993))
// console.log(manager.setAge());
console.log(this); // sees that this is a global object

manager.setAge();
console.log(manager.age);


// function setAge() {
//     // this is a function declaration that gets hoisted
// }
// setAge() // this is calling a function

// let setAge = function () {
//     // this is a function expression
// }