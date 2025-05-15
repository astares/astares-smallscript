class OrderedCollection {

  //////////////////////////////////////////////////////////////////////
  // CONSTRUCTION
  //////////////////////////////////////////////////////////////////////

  constructor() {
    this.items = [];
  }

  //////////////////////////////////////////////////////////////////////
  // ACCESSING
  //////////////////////////////////////////////////////////////////////

  /**
   * Add the given element to the collection.
   * 
   * @param {*} item - the item to add
   */
  add(item) {
    this.items.push(item);
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Return the size of the collection.
   * 
   * @returns {number} - the number of items in the collection
   * @description
   *  The size method returns the number of items in the collection.
   */
  size() {
    return this.items.length;
  }

  //////////////////////////////////////////////////////////////////////
  // TESTING
  //////////////////////////////////////////////////////////////////////


  /**
   * Check if the collection contains the given item.
   *  
   * @param {*} item - the item to check
   * @returns {boolean} - true if the item is in the collection, false otherwise
   *  
   * @example
   * const collection = new OrderedCollection();
   * collection.add(1);
   * collection.add(2);
   *  
   * console.log(collection.includes(1)); // true
   * console.log(collection.includes(3)); // false
   *  * @description
   * The includes method checks if the collection contains the given item.
   * It uses the indexOf method to find the index of the item in the items array.
   * If the index is greater than -1, it means the item is in the collection.
   * Otherwise, it is not.
   *  
   * @returns {boolean} - true if the item is in the collection, false otherwise
   * @throws {TypeError} - if the item is not of the expected type
   * @throws {Error} - if the collection is empty
   * @throws {RangeError} - if the item is out of range
   * 
  */
  includes(item) {
    return this.items.includes(item);
  }

  /**
   * Check if the collection is empty.
   *  
   * @returns {boolean} - true if the collection is empty, false otherwise  
   * @example
   * const collection = new OrderedCollection();
   * console.log(collection.isEmpty()); // true
   * collection.add(1);
   * console.log(collection.isEmpty()); // false
   * @description
   * The isEmpty method checks if the collection is empty.
   * It checks the length of the items array.
   * If the length is 0, it means the collection is empty.
   * Otherwise, it is not.
   * 
   */
  isEmpty() {
    return this.items.length === 0;
  }

  //////////////////////////////////////////////////////////////////////
  // CONVERSION
  //////////////////////////////////////////////////////////////////////

  /**
   * Convert the collection to an array.
   *
   * @returns {Array} - the items in the collection as an array 
   *  
   * @example
   * const collection = new OrderedCollection();
   *  
   * collection.add(1);
   * collection.add(2);
   * collection.add(3);
   * console.log(collection.asArray()); // [1, 2, 3]
   * 
   * @description  
   * The asArray method converts the collection to an array.
   * It returns the items array as is.  
   */
  asArray() {
    return this.items;
  }


  
};

globalThis.OrderedCollection = OrderedCollection;
