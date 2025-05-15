/**
 * Return the reversed version of a string.
 * If the string is empty, returns "".
 * 
 * @function reverse
 * @returns {string} - The reversed string.
 * 
 * @example
 * const arr = "Hello";
 * const firstElement = arr.reverse();    
 * console.log(firstElement); // Output: olleH
 *  
 */
String.prototype.reverse = function() {
    let reversed = "";
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i]; // Append characters one by one
    }
    return reversed;
};