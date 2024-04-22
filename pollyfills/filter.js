let inputArray = [2, 10, 3, 5, 6, 20];

const logic = item => item >= 6;

const result = inputArray.filter(logic);
console.log("result is::", result);

Array.prototype.myFilter = function(cb) {
    const output = [];
    for(let i = 0; i< this.length; i++) {
        if(cb(this[i])) {
            output.push(this[i])
        }
    }
    return output;
}

const result1 = inputArray.myFilter(logic);
console.log("result 1::", result1)