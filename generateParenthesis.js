let n = 2;
//()(), (())

function generateParenthesis(n) {
    const output = [];

    function genCombination(p, start, end) {
        if(p.length == n * 2) {
         output.push(p)
           return; 
        }
        if(start < n) {
            genCombination(p + "(", start + 1, end)
        }
        if(end < start) {
            genCombination(p + ")", start, end + 1)

        }

    }

    genCombination('', 0, 0);

    return output;
}


console.log("result is::", generateParenthesis(n))