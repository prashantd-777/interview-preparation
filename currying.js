let limit = 5;
function add(...args) {
    if(args.length === limit) {
        let result = args.reduce((acc, curr) => acc + curr, 0);
        return result
    } else {
        return function (...cargs) {
            args = args.concat(cargs);
            return add(...args)
        }
    }
}

console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4)(5));
console.log(add(1, 2, 3)(4, 5));
console.log(add(1, 2, 3)(4)(5));
console.log(add(1)(2)(3)(4)(5));

// // fuction currying using bind method
// // multiply

// function multiply(a, b) {
//     return a*b;
// }

// let multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));

// let multiplyByThree = multiply.bind(this, 3);
// console.log(multiplyByThree(6));


// // fuction currying using closures
// // multiply
// function multiplication(a) {
//     return function (b) {
//         return a * b
//     }

// }

// console.log(multiplication(5)(10))
