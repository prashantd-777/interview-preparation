

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getMyName() {
//         return `${this.name} is my name. and my age is ${this.age}`
//     }
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getMyName = function () {
    return `${this.name} is my name. and my age is ${this.age}`
}

let p1 = new Person('John', 30);

console.log(p1, "p1", p1.getMyName())
