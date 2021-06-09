import { Stack } from "../src/Stack.js"

export const missingBrackets = function (input) {
    let stack = new Stack()
    for (let i = 0; i < input.length; i++) {
        let element = input[i];//{
        if (element === "(") {
            stack.push(element)
        }
        if (element === ")") {
            //check if last element was (
            if (stack.peek() === "(") {
                stack.pop()
            } else {
                return true
            }
        }
    }
    if (stack.isEmpty() === false) {
        return true
    } else {
        return false
    }
}
