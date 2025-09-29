//
// Function currying using the bind methods
//
function multiply(a, b) {
    return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log('res1 is::', multiplyByTwo(4)); 

const myltiplyByThree = multiply.bind(this, 3);
console.log('res2 is::', myltiplyByThree(7));


