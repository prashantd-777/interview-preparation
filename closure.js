function outerFunction() {
    let x = 10;
    return function innerFunction() {
        x++;
        console.log(x)
    }
}

let outer = outerFunction();
outer() //11
outer() //12
outer() //13