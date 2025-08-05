// Function are bundled together with references to it's surrounding environment (lexical scope), that nothing but the closures.

// Basic Example
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// Another example => When we return function from another function, so that time we can call this function any time below in our code and also it still remembers the reference and values to that scope.
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
// .........
// 100 lines of code
// .....
// ...
z();


// Another example ==> Increment the value of {x} using closure reference
function outerFunction() {
    let x = 10;
    return function innerFunction() {
        x++;
        console.log(x)
    }
}

let outer = outerFunction();
outer() //11
outer() //12
outer() //13


// Uses of closures
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. Memoize
// 5. Maintaining state in async world
// 6. setTimeouts
// 7. Iterators