let obj1 = {
    firstName: "Bruce",
    lastName: "Wayne"
}

function getUserDetails(hometown, age = 20) {
    return `${this.firstName} ${this.lastName} from ${hometown} and Age is ${age}`;
}

Function.prototype.myCall = function(ctx, ...args) {
    ctx._this = this;
    return ctx._this(...args);
}

Function.prototype.myApply = function (ctx, args) {
    ctx._this = this;
    return ctx._this(...args)
}

Function.prototype.myBind = function (ctx, ...args) {
    ctx._this = this;
    return function (...cArgs) {
        return ctx._this(...args, ...cArgs)
    }

}

console.log('res call is::', getUserDetails.call(obj1, 'Pune', 30));
console.log('pollyfill res call is::', getUserDetails.myCall(obj1, 'Pune', 30))


console.log('res apply is::', getUserDetails.apply(obj1, ['Pune', 30]));
console.log('pollyfill res apply is::', getUserDetails.myApply(obj1, ['Pune', 30]))

let b1 = getUserDetails.bind(obj1, 'Pune')
console.log('res bind is::', b1(30));

let b2 = getUserDetails.myBind(obj1, 'Pune');
console.log('Pollyfill res bind is::', b2(30))

