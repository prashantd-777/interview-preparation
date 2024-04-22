function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}


let p1  = new Person("John", "Smith");
let p2 = new Person("Tony", "Stark")

Person.prototype.getFullName = function () {
    console.log("the name is::", this.fName, this.lName)
}

p1.getFullName()
p2.getFullName()