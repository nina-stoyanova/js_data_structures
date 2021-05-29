export class List {

    constructor(height, width) {
        this._data = [];
    }

    //Interface = methods

    add(value) {
        this._data.push(value);
    }


    addMore(...values) {
        this._data.push(...values);
    }

    getCount() {
        return this._data.length;
    }

    get(index) {
        return this._data[index]
    }

    clear() {
        return this._data = [];
    }

    contains(value) {
        return this._data.includes(value)
    }

    reverse() {
        return this._data.reverse()
    }

    // remove(...values) {
    //     return this._data.splice(...values)
    // }



}