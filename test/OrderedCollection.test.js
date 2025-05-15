require("../src/collections/OrderedCollection");

describe("OrderedCollection", () => {

    /**
     * Tests the `add()` method.
     *
     * @test
     * @description Should test adding objects.
     *
    */
    test("OrderedCollection#add() should add elements", () => {
        let collection = new OrderedCollection();
        expect(collection.isEmpty()).toBe(true);

        collection.add("Single element");
        expect(collection.isEmpty()).toBe(false);
    });

    /**
     * Tests the `remove()` method.
     *
     * @test
     * @description Should test removing objects.
     *
    */        
    test("OrderedCollection#remove() should remove elements", () => {
        let collection = new OrderedCollection();
        collection.add("Single element");
        expect(collection.isEmpty()).toBe(false);

        collection.remove("Single element");
        expect(collection.isEmpty()).toBe(true);
    });

    /**
     * Tests the `size()` method.
     *
     * @test
     * @description Should test the size of the collection.
     *
    */
    test("OrderedCollection#size() should return the size of the collection", () => {
        let collection = new OrderedCollection();
        expect(collection.size()).toBe(0);

        collection.add("Single element");
        expect(collection.size()).toBe(1);

        collection.remove("Single element");
        expect(collection.size()).toBe(0);
    });

    /**
     * Tests the `includes()` method.
     *
     * @test
     * @description Should test if an element is in the collection.
     *
    */
    test("OrderedCollection#includes() should return true if the item is in the collection", () => {
        let collection = new OrderedCollection();
        expect(collection.includes("Single element")).toBe(false);

        collection.add("Single element");
        expect(collection.includes("Single element")).toBe(true);
    });

    /**
     * Tests the `isEmpty()` method.
     *
     * @test
     * @description Should test if the collection is empty.
     *
    */
    test("OrderedCollection#isEmpty() should return true if the collection is empty", () => {
            let collection = new OrderedCollection();
            expect(collection.isEmpty()).toBe(true);
    
            collection.add("Single element");
            expect(collection.isEmpty()).toBe(false);
        }); 
                
});