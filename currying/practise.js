// Level 1
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(3)(4)());

// Level 2:
let limit = 5;
function add(...args) {
  if (args.length === limit) {
    let result = args.reduce((acc, curr) => acc + curr, 0);
    return result;
  } else {
    return function (...cArgs) {
      let newArgs = args.concat(cArgs);
      return add(...newArgs);
    };
  }
}

console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4)(5));
console.log(add(1, 2, 3)(4, 5));
console.log(add(1, 2)(3, 4, 5));
console.log(add(1)(2)(3)(4)(5));
