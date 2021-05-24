// Array Destructuring & Spread Operator
/*
Ability to unpack values from arrays, or properties from objects into distinct variables while using the spread operator (...)

Spread operator pulls out all array elements and returns as a standalone list of elements
*/

let fullName = ["kirsten", "purpura"]
let unpackedFullName = [...fullName]
console.log(unpackedFullName)

// let editedFullName = [fullName]
// console.log(editedFullName); // not being unpacked... a whole array gets dumped into another array

fullName.unshift("mx")
console.log(fullName, unpackedFullName)

console.log(Math.min(1, -5, 7, 12))

let prices = [10.99, 100, 49.99, 23, 9.99]
console.log(Math.min(...prices)) // otherwise if you didn't include ... it wouldn't work because prices is an array; you'd get NaN



// Primitive data types stored inside memory as a variable and a value
let x = 10;
let y = "abc";

let a = x
let b = y
console.log(x, y, a, b)

// JS has 3 data types that are objects which reference to a value:
/*
    - array
    - function
    - object
*/

let arr = [ ]

arr.push(1)
console.log(arr) //

let reference = [1]
let refCopy = reference;
console.log(refCopy)


//

let persons = [{name: "Zach", age: 28}, {name: "Donovan", age: 30}]

let copiedPersons = [...persons]

persons.push({name: "Anna", age: 29})

copiedPersons[0].name = "Zachary"
persons[0].name = "Michael"

console.log(persons)
console.log("----------")
console.log(copiedPersons)

/*
The return of the commands above returns Michael in person and copiedPersons array. This happens because we copied the address to the place in memory with the copiedPersons variable we created. We then changed the value of our  name key in the memory itself. Any change we make to either of the arrays will be reflected in its counterpart
*/

let mappedPersons = person.map(person => ({
    name: person.name,
    age: person.age
}))

mappedPersons[0].name = "Zachary"

console.log(persons)
console.log("------")
console.log(mappedPersons)

/* 
only copy what you plan on changing and where you don't want those changes reflected in the original set of data.

mapping we are creating new memory references
*/

// Array destructuring continued

// let fullName = ["Paul", "Niemcyzk"]

let fullName = ["kirsten", "purpura"]

// let firstName = fullName[0]
console.log(fullName)

let [firstName, lastName] = fullName
console.log(firstName);
console.log(lastName);

//JS pulls values from fullName and assigns them based off their position to the variables we declared using destructuring.

//Rest Syntax
/*
Utilizes the spread operator (...) to condense values into a single element rather than unpacking them

    - Any values left over from the original object will ne packed inside of it
    - values can be skipped before packing them, by utilizing commas (,,, ...myObject)
    - rest operator must be the last item of your destructured array syntax
*/
let restArray = ["Taylor", "Bowen", "Omit 1", {month: 12, day: 6, year: 1993}, "Omit 2", {sport: "cross country"}, "Omit 3"]
let [firstName, lastName, , , , ...myObject] = restArray;

console.log(firstName)
console.log(lastName)
console.log(myObject)