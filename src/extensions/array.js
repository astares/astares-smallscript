/**
 * Return the first element of an array.
 * If the array is empty, returns `undefined`.
 * 
 * @function first
 * @returns Returns the first element of the array or undefined if the array is empty.
 * 
 * @example
 * const arr = [1, 2, 3];
 * const firstElement = arr.first();    
 * console.log(firstElement); // Output: 1  
 * 
 * @example 
 * const emptyArr = [];       
 * const firstElement = emptyArr.first();
 * console.log(firstElement); // Output: undefined
 *  
 */
Array.prototype.first = function() {
    return this.length > 0 ? this[0] : undefined;
};

/**
 * Return the last element of an array.
 * If the array is empty, returns `undefined`.
 * 
 * @function last
 * @returns Returns the last element of the array or undefined if the array is empty.   
 * 
 * @example
 * const arr = [1, 2, 3];
 * const lastElement = arr.last();
 * console.log(lastElement); // Output: 3
 * 
 * @example
 * const emptyArr = [];
 * const lastElement = emptyArr.last();
 * console.log(lastElement); // Output: undefined
 *     
 */
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : undefined;
}
