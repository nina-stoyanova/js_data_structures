export class Queue {

    constructor() {
        this._data = [];
    }

    enqueue(input) {
        return this._data.push(input)
    }

    dequeue() {
        return this._data.shift()
    }

    isEmpty() {
        if (this._data.length === 0) {
            return true
        } else {
            return false
        }
    }
}