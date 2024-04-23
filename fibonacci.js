
let n = 5;

function fibonacci(n) {
    const output = [0, 1];
    for(let i = 2; i< n; i++) {
        output.push(output[i-1] + output[i-2]);
    }
    console.log(output);
    return output[n]
}


fibonacci(n)