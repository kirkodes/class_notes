// var vs let vs const
// these are all ways to declare a variable

// let name = 'Kirsten';
// console.log(name);
// let name = 'Tay';
// console.log(name)

//const cannot be reassigned

//diff between let and var
// console.log(x)
// let x = 10;
//error because JS runs left to right, line by line top to bottom... console log x has not been assigned... getting and error is a good thing because it lets you know there's something to correct
//but if you do var:
// console.log(y);
// var y = 10;
// let is block scoped and var is function scope
//using var gives undefined because its in the memory somewhere

//var is function scoped and declaration loads up before the file is read
//***** let must be declared first before being called; else error occurs

console.log(3 == "3");
console.log(3 === '3');

let myNum = 5;
let myStr = '5';
console.log(typeof myNum); //typeof tells you data type
console.log(typeof myStr);
console.log(myNum + myStr); //this concatenates integer with the string... turns it into a string, so the result is 55... literally putting 5 and '5' together


/* Git is a version control system... primarily used for code ...developed in 2004 by the guy that created linnux 

allows you to make changes and then roll back to a previous commit
everyday... push work into github... that way I'll always have my code

version control system designed to keep chronological timeline of all of your code changes

push to git in pillars
*/

// To traverse file system in terminal:
// cd name_of_folder --> moves you down
// cd .. --> moves you up
// ls --> lists items inside existing folder

// to initiate a git repository
// git init
//staging files for a commit
// git status tells you the status of your repository
// git add <file_name> OR git add . to add all of the files inside the folder that you are in and stage them for a commit
// To commit your changes, run the following command: 
//git commit -m "Your commit message here"

//to view the commit:
// git log
// shows us commit hash, branch name, commit message, and other metadata