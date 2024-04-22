// // const Person = {
// //     name: "John",
// //     start: function () {
// //         console.log(`${this.name} application is started`);
// //     },
// //     update: function () {
// //         console.log(`${this.name} application is updated`)
// //     }
// // }

// // Object.freeze(Person);


// // Person.start()
// // Person.name = "test";
// // console.log(Person.name)


// class Person {
//     name = "John";

//     getValues() {
//         return this.name;
//     }
// }

// const personInstance = new Person();
// Object.freeze(personInstance)


let counter = 0;

// const Counter= {
//     getCount: () => counter,
//     increment: () => ++counter,
//     decrement: () => --counter,
// }

// const singletonCounter = Object.freeze(Counter);
//  export default singletonCounter;

let instance;
class Counter {
    constructor() {
        if(instance) {
            throw new Error("Instance already created")
        }

        this.counter = counter;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter
    }

    decrement() {
        return --this.counter;
    }
}

let singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
