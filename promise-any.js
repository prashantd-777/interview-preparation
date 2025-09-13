const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1 resolved");
    }, 4000)
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1 resolved");
    }, 2000)
});

Promise.any([p1, p2]).then((res) => {
    console.log('res is::',res);
}).catch(error => {
    console.log('error is::', error.errors)
})