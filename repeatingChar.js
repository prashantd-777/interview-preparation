// write a logic to calculate maximum number repeating characters in a string
let inputStr = 'helloworld';


function findRepeatingChars(str) {
    const output = {};
    for(let i = 0; i< str.length; i++) {
        if(output[str[i]]) {
        output[str[i]] = output[str[i]] + 1;
        } else {
            output[str[i]] = 1;
        }
    }


    console.log("output[str[i]]", output);
    let max = 0;
    for(let item of Object.keys(output)) {
        if(output[item] > max) {
            max = output[item];
        }

    }
    console.log("max is::", max)
}

findRepeatingChars(inputStr.toLowerCase());