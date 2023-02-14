// Variables in JS var, let and const
// var is globally scoped while let and const are blocked scoped
var a = 10
{
    var a = 100
    console.log("inside block: ", a)
}
console.log("outside scoped: ", a)
// In above exampl the value of "a" is changed globally
// As var is global scope data type

var b = 10
{
    let b = 100
    console.log("inside scope b: ", b);
}
console.log("Globally B : ", b)
// Here global value of "b" is 10
// and block scoped value of "b" is 100
// As let is block scoped data type  

const c = 100
console.log(c)
const c = 500;
{
    const c = 1
    console.log(c)
}
// In above example it will through as const can not redclare
// We can not re-initialize the const too
// That's why we are getting errors at line number 24

// Rules = 
// var = we can redclare, reinitialize, we can access before initialization
// Let = we can reinitialize but we can not redeclare and can not access before initialization
// Const = we can not redeclare and can not reinitialize and can not access before initialization
