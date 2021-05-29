import { List } from "../src/List.js"

import { assert } from "chai";

describe("Array", function () {

    // it("should equal", function () {
    //     //assert.equal(1, 1);          // assert.equal(actual, expected)
    // })
    let list
    this.beforeEach(() => {
        list = new List()
    })


    it("should contains two elements", function () { //add element and get count from array
        list.add(5)
        list.add(6)
        //assert.equal(list.getCount(), 2)
    })

    it("should clear all data", function () { //clear all previously existing data in the List
        list.add(5)
        let clearArray = list.clear()
        //assert.equal(clearArray.length, 0)
    })

    it("should return true if exist", function () { //return true if the value exists in the List, false otherwise
        list.add(5)
        let includesElement = list.contains(5)
        //assert.equal(includesElement, true)
    })

    it("should reverse the order", function () { //reverse the order of the elements
        list.add("nina")
        list.add("petya")
        let reverseValue = list.reverse()
        assert.equal(reverseValue, ["petya", "nina"])
    })





})
















// //1st test - add element and get an element by the index
// var list = new List();

// list.add(5)

// let result = list.get(0)

// if (result === 5) {
//     //console.log("success")
// } else {
//     //console.log("failed")
// }
// //end 1st test


// //2nd test - clear all previously existing data in the List
// var list1 = new List();

// list1.add(5)
// const clearArray = list1.clear()

// //console.log(clearArray) //should be empty array, why when it's if(clearArray === []) this is undefined, but only console.log(clearArray is [])
// if (clearArray.length === 0) { //this is how we check if array is empty
//     //console.log("yes")
// } else {
//     //console.log("no")
// }
// //end 2nd test



// //3rd test - return true if the value exists in the List, false otherwise
// var list2 = new List();

// list2.add(5)

// const includesValue = list2.contains(5) //includes compares one object with the other but only the path to the object

// if (includesValue === true) {
//     //console.log("it's working")
// } else {
//     //console.log("Nah, not working")
// }
// //end 3rd test


// //4rd test - reverse the order of the elements
// var list3 = new List();


// list3.add("nina")
// list3.add("petya")

// const reverseValue = list3.reverse()

// //console.log(reverseValue)
// //end 4rd test


// //5th test - remove the value if found in the List - find this 
// var list4 = new List();


// list4.add("nina")
// list4.add("petya")


// //console.log(list4.remove("petya"))
// //end 5th test



// // # find(condition) apply condition on all elements and return the first that passes
// // # sort() - sort the elements
// // remove(value) - remove the value if found in the List

