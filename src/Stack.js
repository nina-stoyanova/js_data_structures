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

}