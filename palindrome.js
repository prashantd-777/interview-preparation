
let inputStr = "levels";

function isPalindrome(str) {
    const result = str === str.split('').reverse().join('');

    return result
}

console.log(isPalindrome(inputStr))
