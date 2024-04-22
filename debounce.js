function debounce(cb, delay = 0) {
    let intervalRef;
    return function (...args) {
        clearTimeout(intervalRef)
        intervalRef = setTimeout(() => cb.apply(this, args), delay)
    }
}

function getName(name) {
    console.log(`Hello ${name}`);
}

const debounceFn = debounce(getName, 8000);

debounceFn('John')