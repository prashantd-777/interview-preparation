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



const result2 = [26, 75, 50, 26].reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1;
    return acc;
}, {});


Array.prototype.myReduce = function (cb, current) {
    let acc = current;
    for(let i = 0; i< this.length; i++) {
        if(acc) {
            acc = cb(acc, this[i]);
        } else {
            acc = this[i]
        }
    }

    return acc;
}

const result3 = [26, 75, 50, 26].myReduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1;
    return acc;
}, {});

console.log('result3', result3);