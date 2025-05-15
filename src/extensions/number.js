/**
 * Executes a provided callback function a specified number of times.
 * 
 * @function timesRepeat 
 * @param {function(number): void} callback - The function to execute on each iteration given an iteration count starting at 1.
 * @returns {void} - Does not return a value.
 * @throws {TypeError} If `callback` is not a function. 
 * 
 * @example
 * (5).timesRepeat(i => console.log(`Iteration ${i}`));
 *
 * // Output:
 * // Iteration 1
 * // Iteration 2
 * // Iteration 3
 * // Iteration 4
 * // Iteration 5
 *  
 */
Number.prototype.timesRepeat = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("timesRepeat requires a function as an argument");
    }

    for (let i = 1; i <= this; i++) {
        callback(i);
    }
};