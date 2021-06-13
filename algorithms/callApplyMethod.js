class Person {
    constructor(name) {
        this.name = name
        this.age = 20
    }

    sayHello(prefix) {
        //this = object on which the method was called
        console.log(prefix, this.name)
    }
}

var p = new Person("pesho")

//p.sayHello()

//call the method/function and set what is "this"
//f.call(this)

//we need to provide properties used in sayHello()
const ourCustomThis = {
    name: "YYYY"
}
//sayHello here is my this - from ourCustomThis
Person.prototype.sayHello.call(ourCustomThis, "====---/")
Person.prototype.sayHello.apply(ourCustomThis, ["====---/"])

p.sayHello.call(ourCustomThis, "====---/")




// class Work {
//     constructor(employeeName) {
//         this.employeeName = employeeName
//     }

//     sayEmployeeName(prefix) {
//         console.log(prefix, this.employeeName)
//     }
// }

// var w = new Work("nina")

// console.log(w.employeeName)


// const specialMethod = { //we want to use sayEmployeeName() here
//     employeeName = "pesho"
// }

// Work.prototype.sayEmployeeName.call(specialMethod, "-----/")

