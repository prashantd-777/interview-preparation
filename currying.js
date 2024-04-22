// fuction currying using bind method
// multiply

function multiply(a, b) {
    return a*b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(6));


// fuction currying using closures
// multiply
function multiplication(a) {
    return function (b) {
        return a * b
    }

}

console.log(multiplication(5)(10))
