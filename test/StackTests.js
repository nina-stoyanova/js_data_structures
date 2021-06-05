import { Stack } from "../src/Stack"
import { assert } from "chai";
import { performance } from "perf_hooks";

describe("Array", function () {


    let stack
    this.beforeEach(() => {
        stack = new Stack() //new object 
    })


    //tests

    it("should push value", function () {
        stack.add("nina")
        stack.add("petya")
        let getCount = list.getCount()
        assert.equal(getCount, 1)
    })


})