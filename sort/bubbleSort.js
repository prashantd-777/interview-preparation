let unSortArr = [4,-1,34,9,-9,103];

function sortArray(arr) {
    for(let i = 0; i< arr.length; i++) {
        for(let j = i+1; j< arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
          
        }
    }
    return arr;
}

console.log(sortArray(unSortArr))




