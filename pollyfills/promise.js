// let p1= new Promise((res, rej) => {
//     setTimeout(() => res("Hello World"), 2000)
    
// });
// let p2 = new Promise((res, rej) => {
//     setTimeout(() => rej("Test the code"), 1000)
// });

// Promise.myAllSettled = function (promises) {
//     let mPromise = promises.map(p => {
//     return Promise.resolve(p).then(res => {
//             console.log("res", res)
//             return {
//             status: 'fulfilled',
//             value: res
//             }
//         }).catch(error => {
//             return {
//                 status: "rejected",
//                 reason: error
//             }
//         });
//     })
//     return Promise.all(mPromise)
// }

// Promise.myAllSettled([p1, p2]).then(result => {
//     console.log("result is::", result);
// }).catch(error => {
//     console.log("error is::", error)
// })

// Promise.allSettled([p1, p2]).then(result => {
//     console.log("result is::", result);
// }).catch(error => {
//     console.log("error is::", error);
// });

// Promise.race([p1, p2]).then(result => {
//     console.log("result is::", result);
// }).catch(error => {
//     console.log("error", error)
// })

// Promise.myRace = function (promises) {
//     let promise = new Promise((resolve, reject) => {
//         promises.forEach(item => {
//              Promise.resolve(item).then(resolve).catch(reject)
//         })
//     })
//     return promise;
// }

// Promise.myRace([p1, p2]).then(result => {
//     console.log("result is::", result);
// }).catch(error => {
//     console.log("error is::", error)
// })

// Promise.all([p1, p2]).then(res => {
//     console.log("res", res)
// }).catch((error) => {
//     console.log("error", error)
// })


// Promise.myAll = function (promises = []) {
//     let output = [];
//     let errorRes = [];
//     let promise = new Promise((res, rej) => {
//         promises.forEach(async (item, index) => {
//             try {
//                 const result = await item;
//                 output.push(result);
//                 if(promises.length -1 == index) {
//                     if(errorRes.length > 0) {
//                         rej(errorRes)
//                     }else {
//                         res(output);
//                     }
//                 }
//             } catch(error) {
//                 rej(error);
//                 errorRes.push(error);
//             }
//         });
//     })

//     return promise;
// }

// Promise.myAll([p1, p2]).then(result => {
//     console.log("result", result)
// }).catch(error => {
//     console.log("error is::", error)
// })



















// let p1 = new Promise((res, rej) => res("Hello world"));
// let p2 = new Promise((res, rej) => res("Test the promise"));

// // Promise.all([p1, p2]).then(res => {
// //     console.log("res", res)
// // }).catch(error => {
// //     console.log("error is::", error)
// // })


// Promise.myCall = function (promises) {
//     const output = [];
//     const errorRes = [];
//     const p1 = new Promise((res, rej) => {
//         promises.forEach(async (item, i) => {
//             try {
//                 const result = await item;
//                 output.push(result);

//                 if(i == promises.length -1) {
//                     if(errorRes.length > 0) {
//                         rej(errorRes)
//                     } else {
//                         res(output)
//                     }


//                 }
               

//             } catch(error) {
//                 errorRes.push(error);
//                 rej(error)
//             }
//         });
//         // res(output);
//     });

//     return p1;
// }




// Promise.myCall([p1, p2]).then(res => {
//     console.log("res", res)
// }).catch(error => {
//     console.log("error is::", error)
// })