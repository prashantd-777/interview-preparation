// call, apply, bind pollyfills

function getMyDetails(p1, p2, p3) {
    let str = `My name is ${this.firstName} ${this.lastName}.`;
    if(p1) {
        str += ` My age is ${p1}`
    }
    if(p2) {
        str += ` and I'm from ${p2}`;
    }
     if(p3) {
        str += ` also I'm a ${p3}`;
    }
    return str;
}

const Users = {
    firstName: "John",
    lastName: "Wick",
}

console.log(getMyDetails.call(Users, "30", "Mumbai", "engineer"));
console.log(getMyDetails.apply(Users, ["30", "Mumbai", "engineer"]));
let b1 = getMyDetails.bind(Users, "30", "Mumbai");
console.log(b1("engineer"));


Function.prototype.myCall = function (scope, ...args) {
    scope._this = this;
    return scope._this(...args);
}

Function.prototype.myApply = function (scope, args) {
    scope._this = this;
    return scope._this(...args);
}

Function.prototype.myBind = function(scope, ...args) {
    scope._this = this;
    return function (...newArgs) {
        return scope._this(...args, ...newArgs);
    }
}

console.log(getMyDetails.myCall(Users, "30", "Mumbai", "engineer"));
console.log(getMyDetails.myApply(Users, ["30", "Mumbai", "engineer"]));
let b2= getMyDetails.myBind(Users, "30", "Mumbai");
console.log("b2 is:", b2("engineer"));






