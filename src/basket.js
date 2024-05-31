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
        const itemIndex = this.basket.findIndex(item => item.item === itemName)
        if (itemIndex >= 0) {
            this.basket.splice(itemIndex, 1)
            return this.basket
        } else {
            return "This item is not in the basket."
        }
    }

    basketCapacity() {
        const totalCapacity = this.basket.reduce((total, item) => total + item.quantity, 0)
        if (totalCapacity > this.capacity) {
            return "Basket full, Please choose a bigger basket."
        }
    }

    priceChecker(itemName) {
        const fullMenu = MENU.GetMenu()
        return fullMenu[itemName] || "Item not found in menu"
    }

    basketTotal() {
        const totalPrice = this.basket.reduce((total, item) => total + (item.quantity * item.price), 0)
        return `£${totalPrice.toFixed(2)}`
    }
}

module.exports = Basket
