const str = "abbbcabdefef";

function getSubString(str) {
    let subString = new Set();
    for(let i = 0; i< str.length; i++) {
        for(let j = i; j < str.length; j++) {
            if(subString.has(str[i])) {
                break;
            } else {
                subString.add(str[i])
            }
        }
    }
    console.log("subString", subString, subString.size);

    return {subString, size: subString.size}
}

getSubString(str)