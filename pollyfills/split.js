
const inputString = 'hello world';

String.prototype.mySplit = function (delimiter) {
    const result = [];
    if(!delimiter) {
        return Array.from(this)
    }
    
    function startSplit(str, i) {
        if(i >= str.length) {
            return 
        }
        const targetIndex = str.indexOf(delimiter)
        if(targetIndex >= 0) {
            let val = str.substring(0, targetIndex);
            result.push(val);
            startSplit(str.substring(targetIndex + delimiter.length), targetIndex + delimiter.length)
        } else {
            result.push(str)
        }
    }
    startSplit(this, 0)
    return result;
}
// const result = inputString.mySplit("o");
const result = inputString.split("o");

console.log("result is::", result)