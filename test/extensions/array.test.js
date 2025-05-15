require("../../src/extensions/array");

describe("Array prototype extensions", () => {

    /**
     * Tests the `first()` method.
     *
     * @test
     * @description Should return the first element of an array or `undefined` if empty.
     *
    */
    test("first() should return the first element", () => {
        let numbers = [10, 20, 30, 40];
        expect(numbers.first()).toBe(10);

        let emptyArray = [];
        expect(emptyArray.first()).toBeUndefined();
    });

    /**
     * Tests the `last()` method.
     *
     * @test
     * @description Should return the first element of an array or `undefined` if empty.
     *
    */
    test("last() should return the last element", () => {
        let numbers = [10, 20, 30, 40];
        expect(numbers.last()).toBe(40);

        let emptyArray = [];
        expect(emptyArray.last()).toBeUndefined();
    });
});