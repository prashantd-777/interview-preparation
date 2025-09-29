// map pollyfill
const radius = [2, 3, 4, 5];

function calculateArea(r) {
    return Math.PI * r * r;
}


Array.prototype.myMap = function(cb) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i]))
    }
    return result;
}

const area = radius.myMap(calculateArea);

console.log("Area", area);




// let p1 = new Promise((res, rej) => {
//     document.getElementById("myBtn").addEventListener("click", () => {
//         res("Hello World");
//     });

//     document.getElementById("myBtn2").addEventListener("click", () => {
//         rej("error occured") ;
//     });
// });

// console.log("p1", p1)

// p1.then(res => {
//     console.log("res", res)
// }).catch(error => console.log("error", error))


// async function myFunc() {
//     console.log("p1", await p1)

// }

// const res = myFunc();
// console.log("res111", res)


// var arr1 = "john".split(''); 
// ['j', 'o', 'h', 'n'];

// var arr2 = arr1.reverse();
// // ['n', 'h', 'o', 'j']

// var arr3 = "jones".split('');
// // ['j', 'o', 'n', 'e', 's']

// arr2.push(arr3);
// //  ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// 4, ['j', 'o', 'h']
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//5, ['n', 'h', 'o', 'j']


// // const useMyState = (defaultVal) => {
// //     let currentState;
// //     let mounted = false;

// //     if(!mounted) {
// //         currentState = defaultVal;
// //         mounted = true;
// //     }

// //     return [
// //         currentState,
// //         (newState) => {
// //             currentState = newState;
// //         }
// //     ]
// // }

// const useMyEffect = (cb, dep) => {
//     let stateRef = useRef(true);
//     let depRef = useRef([]);

//     if(stateRef.current) {
//         stateRef.current = false;
//         const cleanup = cb();
//         return () => {
//             cleanup && cleanup()
//         }
//     }


//     if(JSON.stringify(depRef.current) == JSON.stringify(dep)) {
//         const cleanup = cb();
//         return () => {
//             cleanup && cleanup()
//         }
//     }

//     if(!dep) {
//         const cleanup = cb();
//         return () => {
//             cleanup && cleanup()
//         }
//     }

//     depRef.current = dep ? dep : [];

// }

// function useMemo(cb) {
//     let cache = {};
//     return function (n) {
//         if(n in cache) {
//             console.log("cache")
//             return cache[n];
//         } else {
//             console.log("not cache")
//             let result = cb(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// function square(n) {
//     return n  * n;

// }


// let result = useMemo(() => square(2), [2])







// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let inputArray = [1, 3, 6, 9, 2];

function logic(acc, current) {
    return acc + current;
}

function logic1(item) {
    return item * 2;
}

function logic2(item) {
    return item % 2 === 0;
}

function logic3(item) {
    return item === 9;
}

Array.prototype.myReduce = function (cb, defaultValue) {
    let acc = defaultValue;
    for(let i = 0; i< this.length; i++) {
        if(acc) {
            acc = cb(acc, this[i]);
        } else {
            acc = this[i];
        }
    }
    return acc;
}


Array.prototype.myMap = function (cb) {
    const output = [];
    for(let i = 0; i< this.length; i++) {
        output.push(cb(this[i]))
    }
    
    return output;
}

Array.prototype.myFilter = function (cb) {
    const output = [];
    for(let i = 0; i< this.length; i++) {
        if(cb(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
}

Array.prototype.myFind = function (cb) {
    let output = undefined;
    for(let i = 0; i< this.length; i++) {
        if(cb(this[i])) {
            return this[i];
        }
    }
}


console.log("Try programiz.pro", inputArray.reduce(logic, 0));
console.log("Try programiz.pro", inputArray.myReduce(logic));

console.log("Try programiz.pro", inputArray.map(logic1));
console.log("Try programiz.pro", inputArray.myMap(logic1));


console.log("Try programiz.pro", inputArray.filter(logic2));
console.log("Try programiz.pro", inputArray.myFilter(logic2));


console.log("Try programiz.pro", inputArray.find(logic3));
console.log("Try programiz.pro", inputArray.myFind(logic3));

console.log("Try programiz.pro", inputArray.findIndex(logic3));
