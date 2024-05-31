const MENU = require("./menu.js")
const smallBasket = 5

class Basket {
    constructor(capacity = smallBasket) {
        this.basket = []
        this.capacity = capacity
    }

    getBasket() {
        return this.basket
    }

    addItem(itemName, itemQuantity) {
        const fullMenu = MENU.GetMenu()
        const itemPrice = fullMenu[itemName]

        if (itemPrice) {
            const newItem = { item: itemName, quantity: itemQuantity, price: itemPrice } 
                this.basket.push(newItem)
            } else {
                throw new Error("Item not found in menu")
            }
        }

    removeItem(itemName) {
        for (let i = 0; i < this.basket.length; i++)
            if (this.basket[i].item === itemName) {
                this.basket.splice(i, 1)
                return this.basket
            }
            else if (this.basket[i].item !== itemName)
                return "This item is not in the basket."
    }

    basketCapacity() {
        const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
        if (totalCapacity > this.basketSize) {
            return "Basket full, Please choose a bigger basket."
        }
    }

    priceChecker(itemName) {
        const fullMenu = MENU.GetMenu()
        for (const items in fullMenu)
            if (itemName === items) { return fullMenu[items] }
    }

    basketTotal() {
        let eachItem = []
        for (let i = 0; i < this.basket.length; i++) {
            eachItem.push(this.basket[i].quantity * this.basket[i].price)
        }
        const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
        return ("£" + totalPrice)
    }
}

module.exports = Basket
