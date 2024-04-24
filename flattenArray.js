const inputArray = [[1, [1.1]], [2, 3], [4]];

// function flattenedArray(arr, depth) {
//     const output = [];
    
//     function flat(arr, currentDepth) {
//         for(let i = 0; i< arr.length; i++) {
//             if(Array.isArray(arr[i]) && currentDepth < depth) {
//                 flat(arr[i], currentDepth + 1)
//             } else {
//                 output.push(arr[i])
//             }
//         }
//     }
//     flat(arr, 0)
//     return output;
// }

function flattenedArray(arr, currentDepth = 0, depth = 1) {
    const result = arr.reduce((acc, current) => {
        if(Array.isArray(current) && currentDepth < depth) {
            acc = [...acc, ...flattenedArray(current, currentDepth + 1)]
        } else {
            acc.push(current)
        }
        return acc;
    }, []);
    return result; 
}



console.log("result::", flattenedArray(inputArray))