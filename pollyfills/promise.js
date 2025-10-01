function dummyAPI(time) {
    return new Promise((res, rej) => {
        setTimeout(() => res(time), time)
    })
};

const taskArray = [dummyAPI(1000), dummyAPI(2000),dummyAPI(20), dummyAPI(3000)];

// Promise.all(taskArray).then(res => console.log("result is:", res)).catch(error => console.log("error is::", error))

Promise.myAll = function (promises) {
    const output = [];
    let promise = new Promise((res, rej) => {
        promises.forEach(async (item, index) => {
            try {
                const result = await item;
                 output.push(result)
                if(index == promises.length - 1) {
                    res(output);
                }
            } catch(error) {
                rej(error)
            }
        })
    });
    return promise;
}

Promise.myRace = function (promises) {
    let promise = new Promise((res, rej) => {
        promises.forEach(item => {
            Promise.resolve(item).then(res).catch(rej);
        }) 
    });
    return promise;
}

Promise.myAllSettled = function(promises) {
    let mPromise = promises.map(item => {
        return Promise.resolve(item).then(val => {
            return {
                status: "fulfilled",
                value: val
            }
        }).catch(error => {
            return {
                status: "error",
                reason: error
            }
        });
    });
    return Promise.all(mPromise)
}

Promise.myAll(taskArray).then(res => console.log("result is:", res)).catch(error => console.log("error is::", error))

Promise.myRace(taskArray).then(res => console.log("race result is:", res)).catch(error => console.log("error is::", error))

Promise.myAllSettled(taskArray).then(res => console.log("settled promise result is:", res)).catch(error => console.log("error is::", error))


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