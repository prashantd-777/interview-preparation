const inputArray = [4, 2, 8, 1, 4];

function logic(acc, current) {
    return acc + current;
} 

const result = inputArray.reduce(logic);

console.log("result is::", result);

Array.prototype.myReduce = function (cb, defaultValue) {
    let accumulator = defaultValue;
    for(let i = 0; i < this.length; i++) {
        if(accumulator) {
            accumulator = cb(accumulator, this[i])
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

const result1 = inputArray.myReduce(logic, 0);
console.log("result1", result1)