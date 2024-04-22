var arr1 = "john".split(''); 
// ['j', 'o', 'h', 'n'];

// var arr2 = arr1.reverse();
// // ['n', 'h', 'o', 'j']

// var arr3 = "jones".split('');
// // ['j', 'o', 'n', 'e', 's']

// arr2.push(arr3);
// //  ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
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