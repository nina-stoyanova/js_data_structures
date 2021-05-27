import { List } from "../src/List.js"

//1st test add element and get an element by the index

var list = new List();

list.add(4)

let result = list.get(0)

if (result === 4) {
    console.log("success")
} else {
    console.log("failed")
}

//end 1st test


//2nd test clear all previously existing data in the List

var list1 = new List();

list1.add(5)
const clearArray = list1.clear()

console.log(clearArray) //should be empty array



//end 2nd test



//3rd test return true if the value exists in the List, false otherwise

var list2 = new List();

list2.add(5)

const includesValue = list2.data.includes(5)

if (includesValue === true) {
    console.log("it's working")
} else {
    console.log("Nah, not working")
}

    //end 3rd test





// # find(condition) apply condition on all elements and return the first that passes
// reverse() - reverse the order of the elements
// # sort() - sort the elements
// remove(value) - remove the value if found in the List
