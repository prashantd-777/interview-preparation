const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

const result = arr.flat(1);
console.log("result is::", result);


Array.prototype.myFlat = function (depth) {
    const output = [];
    this.index;
    if(depth <=0) {
        output.push(this[this.index])
        return output
    }
    for(let i = 0; i<this.length; i++) {
        if(Array.isArray(this[i])) {
            this.index = i;
            this[i].myFlat(depth -1)
        } else {
            output.push(this[i])
        }
    }

    return output

}

const result1 = arr.myFlat(1);
console.log("result1", result1)
