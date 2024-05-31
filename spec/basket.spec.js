const Basket = require("../src/basket.js")

describe("Basket", () => {
    let basket
    const largeBasket = 10

    beforeEach(() => {
        basket = new Basket();
    });

    it("Should get the basket", () => {
        const expected = []
        expect(basket.getBasket()).toEqual(expected)
    })

    it("Add items to basket", () => {
        const expected = [
            { item: "bagel", quantity: 1, price: 2.99 },
            { item: "brownie", quantity: 3, price: 3.99 }]

        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)
        expect(basket.getBasket()).toEqual(expected)
    })

    it("Remove bagel from basket", () => {
        const expected = this.basket = [{ item: "brownie", quantity: 3, price: 3.99 }]

        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)
        basket.removeItem("bagel")
        expect(basket.getBasket()).toEqual(expected)
    })

    it("Alert when basket is full", () => {
        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)
        const alert = basket.basketCapacity()
        expect(alert).toEqual("Basket full, Please choose a bigger basket.")
    })

    it("Create basket with larger size", () => {
        basket = new Basket(largeBasket)
        expect(basket.capacity).toEqual(largeBasket)
    })

    it("Alert when trying to remove item that doesnt exist inside basket", () => {
        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)
        const alert = basket.removeItem("Kebab")
        expect(alert).toEqual("This item is not in the basket.")
    })

    it("price checker for items", () => {
        const expected = 3.99
        expect(basket.priceChecker("brownie")).toEqual(expected)
    })

    it("Add multiple instances of the same item", () => {
        const expected = [
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 }
        ]
        basket.addItem("chocolateBagel", 1)
        basket.addItem("chocolateBagel", 1)
        basket.addItem("chocolateBagel", 1)
        expect(basket.getBasket()).toEqual(expected)
    })

    it("basket total", () => {
        basket.addItem("chocolateBagel", 3)
        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)
        const expected = "£29.93"
        expect(basket.basketTotal()).toEqual(expected)
    })
})