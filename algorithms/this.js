// class Friend { //specific type of Node
//     constructor(name, age) { //special one time method
//         //JS secretly gives you this as a local variable in the scope
//         //this = {}
//         //this initially is the object about to be created

//         this.name = name // {name: name}
//         this.age = age // {name: name, age: age}
//         this.friends = []

//         //return this
//     }

//     mathod() {
//         //JS gives you this = object on which you called the method
//         console.log(this.name)
//         //return undefined
//     }

// }

// var fr1 = new Friend() // => this
// fr1.name

// fr1.method()

// var fr2 = new Friend()
// fr2.method()


// ================================================================


// var obj1 = {
//     name: "pesho",
//     method1() {
//         //this = кутишката върху която е извикан метода
//         console.log("method 1 is executing")
//         console.log(this.name)
//     }
// }

// obj1.method1() //we call method1 on obj1 => this = ob1 in the method

// console.log(obj1.__proto__.__proto__) // => null-from the Adam Object

// console.log(obj1)
// console.log(obj1.__proto__)//from parent 

// obj1.__proto__.methodParent = function () {
//     console.log("method on the parent is executing")
//     console.log(this.name)
// }

// obj1.__proto__.methodParent()

// obj1.methodParent()



// ================================================================

// class Rectangle {
//     constructor() {
//         //var this = {}
//         //this.__proto__ = Rectangle.prototype

//         this.name = "pesho"
//         this.sayName2 = function () {
//             console.log("I am a method on the new object itself")
//         }
//         //return this
//     }

//     sayName() { // automatically go to Rectangle.prototype
//         //this = r1
//         console.log(this.name)
//     }
// }

// console.log(Rectangle.prototype.__proto__)

// var r1 = new Rectangle()
// r1.sayName2()
// console.log(r1)

// Rectangle.sayName3 = function () {
//     console.log("I am a method on the class itself")
//     //console.log(this.age) - not working
// }

// console.log(Rectangle)

// Rectangle.sayName3()


// ================================================================




class Facebook {
    constructor() {
        this.name = "Roksi"
        this.friendConnection = function () {
            console.log("I am a friend of Nina from school")
        }
    }

    schooleName() {
        console.log("John Atanasov")
    }
}

let firstFriend = new Facebook //create new object
console.log(firstFriend.name) //in the object area
firstFriend.friendConnection() //in the object area

Facebook.prototype.schooleName()//.prototype area
firstFriend.schooleName() //object - prototype connection

Facebook.friendAge = function () { //class area
    console.log("I am 30years old")
}

Facebook.friendAge() //only class area / static method

Facebook.prototype.grades = function () { //prototype area
    console.log("Excellent grades")
}

Facebook.prototype.grades() //prototype area
firstFriend.grades() //object - prototype connection
firstFriend.__proto__.grades() //again object - prototype

firstFriend.__proto__.__proto__.area = function () { //Adam's area
    console.log("You are in the Adam's area! Get out!")
}

firstFriend.__proto__.__proto__.area()//from object - prototype - Adam 
Facebook.prototype.__proto__.area()//from prototype - Adam