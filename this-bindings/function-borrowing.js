let obj1 = {
    firstName: "Bruce",
    lastName: "Wayne"
}

let obj2 = {
    firstName: 'Peter',
    lastName: 'Parker'
}

function getUserDetails(hometown, age = 20) {
    return `${this.firstName} ${this.lastName} from ${hometown}. Age is ${age}`;
}

const res1 = getUserDetails.call(obj1, 'Pune');
const res2= getUserDetails.call(obj2, 'Mumbai');
console.log('Call results are', res1, '\n and ', res2);


const res3 = getUserDetails.apply(obj1, ['Pune']);
const res4 = getUserDetails.apply(obj2, ['Mumbai']);
console.log('Apply results are', res3, '\n and ', res4);


const res5 = getUserDetails.bind(obj1, 'Pune');
const res6 = getUserDetails.bind(obj2, 'Mumbai');
console.log('Bind results are', res5(30), '\n and ', res6(45));

