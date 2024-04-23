const inputArray  = [ -9, -1, 4, 9, 34, 103 ];

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === key) {
            return middle;
        } else if(arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle -1;
        }
    }
}

console.log("ouput is::", binarySearch(inputArray, 34))
