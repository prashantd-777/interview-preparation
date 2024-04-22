let inputArray = [ 0, 5, 0, 2,0 , 0, 0, 3, 0, 2];

function moveZeros(arr) {
    let temp = [];
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] == 0) {
            temp = arr.splice(i, 1);
            arr.push(temp[0]);
            temp = [];
        }
    }
    return arr;
}

console.log(moveZeros(inputArray));