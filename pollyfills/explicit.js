let Person = {
    firstName: "John",
    lastName: "Smith"
}

function getFullName(p1, p2, p3) {
    return `${this.firstName} ${this.lastName} ${p1} ${p2} ${p3}`;
}

// const callResult = getFullName.call(Person, "Mumbai");

Function.prototype.myCall = function (scope, ...args) {
    scope._this = this;
    return scope._this(...args)
}

const callResult = getFullName.myCall(Person, "Mumbai")
// console.log("callResult", callResult)

// const applyResult = getFullName.apply(Person, ["Mumbai"]);

Function.prototype.myApply = function (scope, args) {
    scope._this = this;
    return scope._this(...args)
}

const applyResult = getFullName.myApply(Person, ["Mumbai"]);
// console.log("applyresult", applyResult);

// const b1 = getFullName.bind(Person, "Mumbai");

Function.prototype.myBind = function (scope, ...args) {
    scope._this = this;
    return function (...cArgs) {
        return scope._this(...args, ...cArgs)
    }
}

const b1 = getFullName.myBind(Person, "Mumbai");
console.log("bind result", b1(30, 40));