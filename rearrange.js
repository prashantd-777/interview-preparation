let input_arr = [40 , 50, 60, 70];
let input_index = [2, 3, 0, 1];

let result = input_index.map(item => input_arr[item]);
console.log(result, "result")

// first numbers and then string
let numStr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

let numArr = [], strArr = [];
for(let i = 0; i< numStr.length; i++) {
    if(typeof numStr[i] === 'number') {
        numArr.push(numStr[i])

    } else if(typeof numStr[i] === 'string') {
          strArr.push(numStr[i])

    }

}
console.log("final output", [...numArr, ...strArr])

