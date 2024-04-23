// Find all pairs in an array of integers whose sum is equal to a given number
let arr = [1,5,6,1,0,1];

function findPairs(arr, k) {
    const output = [];
    const sumLooking = {};
    for(let i = 0; i < arr.length; i++) {
        let targetVal = k - arr[i];
        if(sumLooking[targetVal]) {
            output.push([arr[i], targetVal])
        }
        sumLooking[arr[i]] = true;
    }
    return output;
}

console.log(findPairs(arr, 6))