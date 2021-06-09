import { missingBrackets } from "../algorithms/missingBrackets.js"
import { assert } from "chai";


describe("MissingBrackets", function () {

    it("should work", function () {
        let missingBracketsInput = missingBrackets(`1234{567(89}`)
        assert.equal(missingBracketsInput, true)
    })
})

