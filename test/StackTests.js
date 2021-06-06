import { Stack } from "../src/Stack.js"
import { assert } from "chai";
//import { performance } from "perf_hooks";

describe("Array", function () {


    let stack
    this.beforeEach(() => {
        stack = new Stack() //new object 
    })


    //tests

    it("should push value", function () {
        stack.add("nina")
        stack.add("petya")
        let getCount = stack.getCount()
        assert.equal(getCount, 2)
    })

    it("should return value", function () {
        stack.add("nina")
        stack.add("petya")
        let returnValue = stack.returnValue()
        assert.equal(returnValue, "petya")
    })

    it("should check value", function () {
        stack.add("nina")
        stack.add("petya")
        let checkTopValue = stack.checkValue()
        assert.equal(checkTopValue, "petya")
    })

    it("should check if empty", function () {
        stack.add("nina")
        stack.add("petya")
        let checkIfEmpty = stack.checkIfEmpty()
        assert.equal(checkIfEmpty, false)
    })

    it("should create string", function () {
        stack.add("nina")
        stack.add("petya")
        let string = stack.createString()
        console.log(string)
        assert.equal(string, 'nina,petya')
    })




})