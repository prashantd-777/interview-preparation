let p1 = new Promise((res, rej) => {
    res("Passed p1")
})

let p2 = new Promise((res, rej) => {
    res("Passed p2")
})

// Promise.all([p1, p2]).then(res => {
//     console.log("res", res)
// }).catch(error => {
//     console.log("error is::", error)
// })

Promise.myAll = function(promises) {
    let result = [];
    const promise = new Promise((res, rej) => {
        promises.forEach(async element => {
            try {
                const res = await element;
                result.push(res)
            } catch(error) {
                console.log("error is:", error)
            }
        });
        res(result)
    })
    return promise
}

Promise.myAll([p1, p2]).then(res => {
    console.log("res", res);
}).catch(error => {
    console.log("error is::", error)
})