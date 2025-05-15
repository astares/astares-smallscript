/**
 * Return the reversed version of a string.
 * If the string is empty, returns "".
 * 
 * @function reverse
 * @returns Returns the reversed version of the string.
 * 
 * @example
 * const arr = "Hello";
 * const firstElement = arr.reverse();    
 * console.log(firstElement); // Output: 1  
 *  
 */
String.prototype.reverse = function() {
    let reversed = "";
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i]; // Append characters one by one
    }
    return reversed;
};