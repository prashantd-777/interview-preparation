// Flattened the array depth wise
const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3, [9, 8]]]];
// arr.flat(2);

Array.prototype.myFlat = function (depth) {
    const output = [];
    function flattened(arr, currentDepth) {
        for(let i = 0; i< arr.length; i++) {
            if(Array.isArray(arr[i]) && currentDepth < depth) {
                flattened(arr[i], currentDepth + 1);
            } else {
                output.push(arr[i])
            }
        }
    }

    flattened(this, 0)
    return output;
}

console.log("final result is::", arr.myFlat(2));
