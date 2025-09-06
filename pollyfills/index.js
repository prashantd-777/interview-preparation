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

// console.log(getMyDetails.call(Users, "30", "Mumbai", "engineer"));
// console.log(getMyDetails.apply(Users, ["30", "Mumbai", "engineer"]));
// let b1 = getMyDetails.bind(Users, "30", "Mumbai");
// console.log(b1("engineer"));

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

// console.log(getMyDetails.myCall(Users, "30", "Mumbai", "engineer"));
// console.log(getMyDetails.myApply(Users, ["30", "Mumbai", "engineer"]));
// let b2= getMyDetails.myBind(Users, "30", "Mumbai");
// console.log("b2 is:", b2("engineer"));

function dummyAPI(time) {
    return new Promise((res, rej) => {
        setTimeout(() => res(time), time);
    })
}

const promiseArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];

// Promise.all(promiseArray).then((res, rej) => {
//     console.log('res', res);
// })

// Promise.race(promiseArray).then((res, rej) => {
//     console.log('race promise res', res);
// })

Promise.allSettled(promiseArray).then((res, rej) => {
    console.log("settled promise res", res);
})

Promise.myAllSettled = function (pArray) {
    let mPromise = pArray.map(item => {
        return Promise.resolve(item).then(val => {
            return {
                status: 'fulfilled',
                value: val
            }
        }).catch(err => {
            return {
                status: "error",
                reason: err
            }
        })
    });

    return Promise.all(mPromise);
}

Promise.myAllSettled(promiseArray).then(val => {
    console.log("val is::", val)
})

Promise.myRace = function (pArray) {
    const promise = new Promise((res, rej) => {
        pArray.forEach(item => {
            Promise.resolve(item).then(res).catch(rej);
        })
    })
    return promise;
}

// Promise.myRace(promiseArray).then((res, rej) => {
//     console.log('race promise res', res);
// })

Promise.myAll = function (pArray) {
    const output = [];
    let promise = new Promise((res, rej) => {
        pArray.forEach(async(item,index) => {
            try {
                const result = await item;
                output.push(result);
                if(pArray.length - 1 === index) {
                    res(output);
                }
            } catch (err) {
                rej(err);
            }
        })
    })

    return promise;
}

// Promise.myAll(promiseArray).then((res, rej) => {
//     console.log('res', res);
// })
