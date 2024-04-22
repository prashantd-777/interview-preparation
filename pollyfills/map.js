const inputArray = [4, 2, 8, 1, 4];

function square(n) {
    return n * n;
}

const result = inputArray.map(square);
console.log("result is::", result);

Array.prototype.myMap = function(cb) {
    const result = [];
    for(let i = 0; i< this.length; i++) {
        result.push(cb(this[i]));
    }
    return result;
}

const result1 = inputArray.myMap(square);
console.log("result1", result1)