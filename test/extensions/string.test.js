require("../../src/extensions/string"); // Ensure the extensions are loaded

describe("String prototype extensions", () => {

    /**
     * Tests the `reverse()` method.
     *
     * @test
     * @description Should test reversing a string.
     *
    */
    test("revers() should return the reversed string", () => {
        let original = "Hello";
        expect(original.reverse()).toBe("olleH");

        let emptyString = "";
        expect(emptyString.reverse()).toBe("");
    });

});