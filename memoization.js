
// let n = 6;
// // 0 1 1 2 3 5 8 13 21 34 55

// function fibonacci(n) {
//     if(n <= 1) {
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }


// console.log("fibonacci(n)", fibonacci(n))

// function fibonacciCache(n, cache = {}) {
//     if(cache[n]) {
//         console.log("inside cache")
//         return cache[n]

//     }

//     if(n <= 1) {
//         return n
//     }

//     const result = fibonacciCache(n - 1, cache) + fibonacciCache(n-2, cache);
//     cache[n] = result;
//     return result

// }

// console.log(fibonacciCache(n, {}))
// console.log(fibonacciCache(n, {}))



// const obj = {
//     a: 10,
//     b: 20
// }

// function add() {
//     let cache = {};
//     return function (...args) {
//         console.log("args", args)
//         const key = args.join('_');
//         if(cache[key]) {
//             console.log("Cache")
//             return cache[key]
//         } else {
//             console.log("no cache")
//             let result = args.reduce((a, c) => a + c, 0);
//             cache[key] = result;
//             return result;
//         }
//     }
// }

// var memoiseSum = add();

// console.log(memoiseSum(obj.a, obj.b));
// console.log(memoiseSum(obj.a, obj.b));


function addThreeNumbers(a, b, c) {
    return a + b + c
}

function memoization(cb) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if(cache[key]) {
            console.log("cached")
            return cache[key]
        }
        const val = cb(...args);
        cache[key] = val;
        console.log("fresh value")
        return val;
    }
}

const add = memoization(addThreeNumbers);

console.log(add(3, 4, 5))
console.log(add(3, 4, 5))
