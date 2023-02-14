var temperature;

// in JS the conditional loops gives the answers in boolean.
// that is if condition is correct it will give true values or else false value;

temperature = 20;

// if (temperature < 20) {
//     console.log("temperature is cold")
// }

// in above example it will not print cause codition is false;

if(temperature <= 20) {
    console.log("temperature is cold");
}
// here it will print the console log.

if(false) {
    console.log("condition is false");
}
// condition is false so it will not print

if(true) {
    console.log("condition is true");
}
// Condition is true so it will print the value

// In below example we can see if 1st condition is not true 
// It will execute the 2nd condition
if(temperature < 20) {
    console.log("It's cold outside")
} else {
    console.log("It's not cold")
}