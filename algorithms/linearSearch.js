import { List } from "../src/List.js"

export function linearSearch() {
    let input = [1, 2, 3, 4, 5]
    let list = new List()
    list.addMore(input)

    let result = list.find(5)

    if (result) {

    }
    console.log("5 was found")
}