// Some of the important Data types
// 1) Number = Floating point numbers used for decimal and integers
let age = 26;
console.log("Number example: ", age);

// 2) String = Sequence of characters used for text
let firstName = "Abhishek";
console.log("String example: ", firstName);

// 3) Boolean = Logical type that can only be true or false used for taking the decisions
let fullAge = true;
console.log("Boolean example: ", fullAge);

// 4) Undefined = Values taken by a variable that is not yet defined ("empty value")
let children;
console.log("Undefined example: ", children);

// 5) Null = Similar like undefined, but we need to mentioned that variable is null
// in undefined we don't need to defined that it is undefined
let address = null;
console.log("Null example: ", address);

// Dynamic variable example
firstName = "Shreyas";
console.log("Dynamic change variable example: ", firstName);
address="India";
console.log("Dynamic address: ", address);
console.log(typeof address);

// Let data type can be update like
let a = 100
a = 1000;
console.log(a)

// const data type can be update in future also in const we need to give an initial value
const phoneNumber = 8975490978
console.log(phoneNumber)
phoneNumber=1212121212 //here it will through an type-error 

// let and const are blocked scoped
// var is functioned scoped
