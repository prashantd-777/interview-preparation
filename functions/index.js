// Function statement
function a() {
    console.log("a called");
}
a();

// Function expression
var b = function () {
    console.log('b called');
}
b();

// Difference between Function statement and Function expression
// Hoisting
//  During memory creation phase, a assign with function body and b is treated like a variable. 

// .....................................|||...........................................................

// Function declaration
// Function statement also known as Function declaration
function a1() {
    console.log("a1 called");
}

// Anonymous Function
// it doesn't have their own identity
// If we run directly it will throw an error
// It will used where function can be used as values
// function () {

// }

// Named Function expression
// We can't call xyz outside. It will only called inside the function as xyz which returns function body;
var c = function xyz() {
    console.log(xyz);
}
c();

// Difference between Parameters and aurguments in function
function d(param1, param2, param3) { // In function statement/declaration, It will used as a Parameters
    console.log(param1, param2, param3);
}
d('A', "B", "C"); // These are nothing but arguments while function invoking, It will passed as a argument

// First class functions
// Function can be treated as values
// Functions are the first class citizens
// The ability to used function as values and can be passed to as an arguments or can be return from the functions is all ability altogether known as First class function 
function abc() {
    console.log("abc called");
}

function e(p1) { // First class function
    return p1();
}

e(abc); // First class function


// Arrow function
const f = () => {
    console.log('f called');
}
f();