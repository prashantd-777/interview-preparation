 // Print the number from 1 to 5 using setimeout function
function x() {
    for(let i = 1; i<= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    }
}
// x();

// Print the same above number using var
// Var => contains global scope so it we don't use trigger function the it will print 6 after each sec.
// So, To make it work using var, we need to add trigger function so, it will create new copy altogether and print the result like 1, 2, 3, 4, 5
function printUsingVar() {
    for(var i = 1; i<= 5; i++) {
        function trigger(x) {
            setTimeout(() => {
                console.log(x);
            }, x * 1000)
        }
        trigger(i);
    }
}
printUsingVar();