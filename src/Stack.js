export class Stack {

    constructor(height, width) {
        this._data = [];
    }

    //methods

    add(value) {
        this._data.push(value);
    }

    getCount() {
        return this._data.length;
    }

    returnValue() {
        return this._data.pop()
    }

    checkValue() {
        return this._data[this._data.length - 1]
    }

    checkIfEmpty() {
        if (this._data.length > 0) {
            return false
        }
    }

    createString() {
        return this._data.toString()
    }


}