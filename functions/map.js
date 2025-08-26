const inputArray = [5, 4, 2, 3, 6];


function double(val) {
    return val * 2;
}

const result = inputArray.map(double);

Array.prototype.myMap = function (cb) {
    const output = [];
    for(let i = 0; i< this.length; i++) {
        output.push(cb(this[i]))
    }
    return output;
}

const result1 = inputArray.myMap(double);

console.log('result', result);
console.log('result1', result1);