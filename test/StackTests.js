import { Stack } from "../src/Stack.js"
import { assert } from "chai";


describe("Array", function () {


    let stack
    this.beforeEach(() => {
        stack = new Stack() //new object 
    })


    //tests

    it("should push value", function () {
        stack.push("nina")
        stack.push("petya")
        let topElement = stack.pop()
        assert.equal(topElement, "petya")
    })

    it("should return value", function () {
        stack.push("nina")
        stack.push("petya")
        let returnTopElement = stack.pop()
        assert.equal(returnTopElement, "petya")
    })

    it("should check value", function () {
        stack.push("nina")
        stack.push("petya")
        let checkTopValue = stack.peek()
        assert.equal(checkTopValue, "petya")
    })

    it("should check if empty", function () {
        stack.push("nina")
        stack.push("petya")
        let checkIfEmpty = stack.isEmpty()
        assert.equal(checkIfEmpty, false)
    })

    it("should create string", function () {
        stack.push("nina")
        stack.push("petya")
        let string = stack.toString()
        assert.equal(string, "nina,petya")
    })




})