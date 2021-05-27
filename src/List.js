export class List {

    constructor(height, width) {
        this.data = [];
    }

    //Interface = methods

    add(value) {
        this.data.push(value);
    }

    get(index) {
        return this.data[index]
    }

    clear() {
        return this.data = [];
    }

    contains(value) {
        return this.data.includes(value)
    }

}