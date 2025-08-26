console.log("Start");

setTimeout(() => {
    console.log('Timeout called')
}, 1000);

let startDate = new Date().getTime();
let endDate= startDate;

while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("End");