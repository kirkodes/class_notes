//Quick String Question
let name = 'Kirsten';
console.log(`this can interpolate as well as print any symbol ' " [] ${name}`)
console.log('this will print like a string but our symbols need help, like if you want to do single quote marks in here or an apostrophe')

// Conditional statements - 4 major types: if, if else/else if, switch, ternary

// IF STATEMENTS
// there is a condition we're checking the variable against
// Checks for a boolean value, if something is true it is known as truthy(a truthy statement), or falsy
// Truthy - if a condition is or can be true
// Falsy - if a condition is false or can be false
// Some falsy expressions are: null, NaN(not a number), 0, or an empty string(""), and undefined

// If a condition is true, the JS will execute the code block (execute - to perform it)
// every If checks one, singular condition

// declare a variable
let isOpen = true;

// the condition to check is held in our braces ()
if (isOpen === true) {
    // the inside - the code we perform if the condition is met is held in {}
    console.log('The door is open');
};

// same as above, statement checks if the value in parentheses is true
if (isOpen) {
    console.log('the door is open');
}; 

// can also test false value
if (isOpen === false){
    console.log('the door is shut');
}

// IF ELSE
// If else is used to check a condition, but run a code block for either the met condition or a separate code block if it does not meet the condition

let isOpen = true;

if (isOpen === true) {
    console.log('you can go inside, the door is open.');
} else {
    console.log('the door is not open to enter.');
};

let temp = 70;

if (temp >= 65) {
    console.log('wow, what a nice day!');
} else { 
    console.log('I need a sweater!');
};

// ELSE IF
// Else if is used to allow us to check more than 2 conditions.
// Examples: Day 2 challenge, Fizz Buzz challenge

let temp = 68;

if (temp >= 80) {
    console.log('I know people are wearing shorts.');
} else if (temp >= 65) {
    console.log('This is t-shirt weather for most folks');
} else if (temp >= 50) {
    console.log("You're going to need a sweater at least");
} else {
    console.log('I am not leaving my house.')
}


let userName = 'myUserName';
let password = 'myPassword';

if (userName === 'myUserName' && password === 'myPassword') {
    console.log(`Welcome back ${userName}. You're logged in!`);
} else if (userName === 'myUserName') {
    console.log(`You're username is correct, but you have the wrong password.`);
} else {
    console.log('You are not in our database, would you like to sign up?');
}

// ctrl + z to undo


// SWITCH STATEMENTS
// execute a block of code depending on the "cases"; condition met? check it against cases
// use case (condition):  - starts code block
// break - to end the code block
// Example: Fizz Buzz
// Default - code to be ran if no cases are met, good practice to have

let favColor = 'teal';

switch (favColor) {
    case 'blue':
        console.log('blue like the sky');
        break;
    case 'yellow':
        console.log('yellow like mustard');
        break;
    case 'red':
        console.log('red like a rose');
        break;
    default:
        console.log(`${favColor} is beautiful too`);
}

let doYouLikePizza = 'yeppers';

switch (doYouLikePizza) {
    case 'yes':
    case 'yeppers':
    case 'yeah':
    case 'duh':
        console.log('Me too! I love pizza.');
        break;
    case 'no':
    case 'nope':
    case 'neh':
        console.log('Ohh.. I will order something else for dinner.');
        break;
    default:
        console.log('I cannot tell if that is a yes or no...');
};


// TERNARY
// Concise way to check two(or more) conditions using the syntax of ? and :
// Structure:
// ( condition ) ? ( codeToRunIfTrue/Truthy ) : ( codeToRunIfFalse/Falsy )

let temp = 70;
// Ternary 
(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring time temps');

// Instead of:
let temp = 70;

if (temp > 75) {
    console.log('Summer');
} else {
    console.log('Spring');
};


let num = 7;

(num > 0) ? console.log('positive number') : 
    (num < 0) ? console.log('negative number') :
    console.log('Number is 0, neutral');


// LOOPS 
//For loop - a quick and easy way to iterate over something (iterate, to loop), to do it repeatedly
// infinite loops are possible (best to avoid): ctrl + C, or close VSCode
// loops take in three parameters, each separated by a semicolon
// 1. initial expression
// 2. condition
// 3. increment (or decrement) expression


//      (1) ;  (2) ;   (3)
for (i = 0; i <= 10; i++) {
    console.log(i);
};

// to decrease by 1 we use i--
for (i = 10; i >= 0; i--) {
    console.log(i);
};

// Challenge: use a for loop to count to 20, but 2s
for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

//Printing each letter with a loop
let word = 'Fantastic'

for (let i = 0; i < word.length; i++) {
    // console.log(i);  // printing the numerical index of the string's letter
    console.log(word[i]); // square brackets are used to get the letter itself (the value of index)
}