function throttle(cb, delay = 0) {
    let shouldWait = false;
    return function (...args) {
        if(shouldWait) {
            return 
        }
        cb.apply(this, args);
        shouldWait = true;
        setTimeout(() => shouldWait = false, delay);
    }
    
}

function getName(name) {
    console.log(`Hello ${name}`);
}

const throttleFunc = throttle(getName, 2000);

throttleFunc('John');
throttleFunc('Test');

setTimeout(() => {
    throttleFunc('Kane');
}, 5000);