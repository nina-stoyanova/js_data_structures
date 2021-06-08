import { Queue } from "../src/Queue.js"
import { assert } from "chai";


describe("Queue", function () {


    let queue
    this.beforeEach(() => {
        queue = new Queue() //new object 
    })

    //enqueue - adds element in the end of the queue

    it("should enqueue", function () {
        queue.enqueue("12()")
        let isEmpty = queue.isEmpty()
        assert.equal(isEmpty, false)
    })

    it("should enqueue2", function () {
        //queue.enqueue()   //if I push nothing or "" it's giving me false
        let isEmpty = queue.isEmpty()
        assert.equal(isEmpty, true)
    })


    //dequeue - remove element from the front of the queue

    it("should dequeue", function () {
        queue.enqueue("125kj(")
        let topElement = queue.dequeue()
        assert.equal(topElement, "125kj(")
    })





})