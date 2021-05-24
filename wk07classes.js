// Classes
/*
Templates for creating objects. They encapsulate data with code. As JS is not a class-based objected-oriented-language, it utilizes prototypes to behave like an objected-oriented-programming (OOP) Language.

Classes considered special function and therefore can be defined as:
    - Class declaration
    - Class expression
*/

// Object
// let teacher = {
//     name: "Ms. Lockhart",
//     subject: "coding",
//     tenure: 1,
//     isPolyglot: true,
// }
// console.log(teacher)

// let Paul = {
//     name: "Paul",
//     subject: "coding",
//     tenure: 2,
//     isPolyglot: true,
// }
// console.log(Paul);

// but what if we want to create a template for this so you don't have to create a new object everytime? This is where classes come in!


// Class declaration 
// name with a Capital first letter
// constructor -method in order to create/initialize a class object
/*
A constructor is a class method/function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.
*/

class Teacher {
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }
}
// console.log(typeof Teacher) // shows that a Class is just  a special function

// // console.log(Teacher()); // Class constructor Teacher cannot be invoked without 'new'

// // instantiates an empty class object
// console.log(new Teacher().name);

// console.log(Teacher.name = "Paul");
// console.log(Teacher.name)

let kLockhart = new Teacher("Kate Lockhart", "Coding", 1, true) // use ' new ' to make a copy of the Teacher class
// console.log(kLockhart);
kLockhart.name = "Kate Louise Lockhart"
// console.log(kLockhart);


// HOISTING 
/*
Function declarations are hoisted. Class declarations are NOT.
*/

// console.log(Car)
// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }
// }
// this would work if it was a function. But it won't work this a class declaration.


// Class Expression

//1 way to do it
let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }

    // Method - a function inside of some class
    whatHouse() {
        return `Welcome to ${this.address}. Beautiful ${this.bedrooms} bed, ${this.bathrooms} bath house!`
    }
}
// console.log(new House()) // new House() - we are instantiating it

let myHouse = new House("1803 Mansfield", 3, 1.5)
console.log(myHouse)
console.log(myHouse.whatHouse());

let Garage = class extends House {
    constructor(address, bedrooms, bathrooms, cars, width, height) {
        super(address, bedrooms, bathrooms)
        this.cars = cars
        this.width = width
        this.height = height
    }
}
// Inheritance ^^^ // latches onto parent class or function and extends it ^^
console.log(new Garage())
console.log(new Garage().whatHouse())



//2 another way to do it

// let House = class MyHouse {
//     constructor(address, bedrooms, bathrooms) {
//         this.address = address;
//         this.bedrooms = bedrooms;
//         this.bathrooms = bathrooms;
//     }
// }
// console.log(new House)
// not as helpful really... the first option is better so you don't get confused by the name. the first example we give it a variable name as House, so naming the class again like here in the second example, now its name is MyHouse.. just weird.. not sure how its useful


// Challenge
/*
Create a Car class that takes the make and model.
Instantiate new class object named Porsche with same make and model of 911
*/

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let Porsche = new Car("Porsche", "911 Carrera");
console.log(Porsche)

//Challenge
/*
Create an Options class that inherits Car parent function. Give it a property of transmission.
Give your 911 a manual or PDK
*/

let Options = class extends Car {
    constructor(make, model, transmission) {
        super(make, model)
        this.transmission = transmission;
    }
    startCar() {
        return `You ${this.model} is running!`
    }
}
let myPorsche = new Options("Porsche", "911", "Manual")
console.log(myPorsche.startCar());

// console.log(new Options("Porsche", "911", "manual"));

//Challenge
/*
Modify above class and create startCar method that returns string interpolated result of 'Your 911 is running'
*/


// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     startCar() {
//         return `You ${this.model} is running!`
//     }
// }
// let Porsche = new Car("Porsche", "911 Carrera");
// console.log(Porsche.startCar())

// OR

