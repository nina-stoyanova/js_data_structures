class Vehicle {
    constructor(color) {
        //when called by the child constructor with super()
        //then this = Car -> constructor -> this, not a new object
        this.color = color
    }
}

class Car extends Vehicle { //special kind of Vehicle
    constructor(carColor, doorsCount) {
        //var this = {}
        //super = Vehicle -> constructor
        super(carColor)
        this.doorsCount = doorsCount
    }

}

class Bike extends Vehicle { //special kind of Vehicle
    constructor(bikeColor, category) {
        super(bikeColor)
        this.category = category
    }

}

var v = new Vehicle("green")
var c = new Car("red", 4)
var b = new Bike("yellow", "fast")

console.log(v.color)
console.log(b.color)
console.log(c.color)