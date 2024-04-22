let Person = {
    name: "Prashant",
    city: 'mumbai'
}

function getMyName(p1) {
    console.log(this.name, this.city, p1)
}

// getMyName.call(Person, 40)

// getMyName.apply(Person, [40])

// let p1 = getMyName.bind(Person, 40);
// p1()


Function.prototype.myCall = function (scope, ...args) {
    scope._this = this;

    console.log(args)

    return scope._this(...args)
}

// getMyName.myCall(Person, 40, "test");


Function.prototype.myApply = function(scope, args) {
    scope._this = this;
    return scope._this(...args)
}

Function.prototype.myBind = function(scope, ...args) {
    scope._this = this;

    return function () {

        return scope._this(...args)
        
    }
}


let p1 = getMyName.myBind(Person, 40);
p1()
