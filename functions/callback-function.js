// What is callback function in JavaScript

setTimeout(() => {
    console.log("timer")
}, 5000)

function x(y) {
    console.log('x called');
    y();

}

x(function y() {
    console.log('y called');
}); // Output is x called, y called, and after 5 sec. timer is called