export class Stack {

    constructor(height, width) {
        this._data = [];
    }

    //methods

    push(value) {
        this._data.push(value);
    }

    pop() {
        return this._data.pop()
    }

    peek() {
        return this._data[this._data.length - 1]
    }

    isEmpty() {
        if (this._data.length > 0) {
            return false
        }
    }

    toString() {
        return this._data.toString()
    }


}