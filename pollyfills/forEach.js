let inputArray = [4, 2, 6, 7];

let outputArray = [];

// inputArray.forEach(item => {
//     outputArray.push(item * 2);
// })


Array.prototype.myForEach = function (cb) {
    for(let i = 0; i< this.length; i++) {
        cb(this[i]);
    }
}

inputArray.myForEach((item) => {
    outputArray.push(item * 2);
})

console.log(outputArray)