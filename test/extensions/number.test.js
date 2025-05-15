require("../../src/extensions/number");

describe("Number.prototype.timesRepeat", () => {

    /**
     * Tests the `timesRepeat()` method.
     *
     * @test
     * @description Check the counter adds up to 5 times.
     *
    */
    test("executes callback correct number of times", () => {
        let counter = 0;

        (5).timesRepeat(() => {
            counter++;
        });

        expect(counter).toBe(5);
    });

    test("passes correct iteration index starting from 1", () => {
        let indices = [];

        (3).timesRepeat(i => {
            indices.push(i);
        });

        expect(indices).toEqual([1, 2, 3]); // Iteration index starts from 1, not 0
    });

    test("handles zero repetitions gracefully", () => {
        let counter = 0;

        (0).timesRepeat(() => {
            counter++;
        });

        expect(counter).toBe(0);
    });

    test("negative numbers should not execute callback", () => {
        let counter = 0;
    
        (-3).timesRepeat(() => {
            counter++;
        });
    
        expect(counter).toBe(0); // Ensures negative values don't run
    });
});