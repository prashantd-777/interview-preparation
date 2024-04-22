function rangeOfNumber(n, k) {
    return n % k  === 0
}
function printInfo() {
    for(let i = 1; i<= 50; i++) {
        const randgeOf3= rangeOfNumber(i, 3);
        const rangeOf5 = rangeOfNumber(i, 5)
        if(randgeOf3 && rangeOf5) {
            console.log("fizzbuzz")

        } else if(randgeOf3) {
            console.log("fizz")
        } else if(rangeOf5) {
            console.log("buzz")
        }else {
            console.log(i);

        }

    }
}
printInfo()