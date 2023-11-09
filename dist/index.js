"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(itemToRemove) {
        this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
    }
    removeQuantityFromCart(itemToRemove, quantity) {
        for (let i = 0; i < quantity; i++) {
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }
    cartTotal() {
        let total = 0;
        for (let x of this.cart) {
            total += x.price;
        }
        return total;
    }
    printCart() {
        for (let x of this.cart) {
            console.log(x.name);
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
}
class Shop {
    constructor() {
        const item1 = new Item("Source Magazine", 8.99, "A copy of the latest issue of Source Magazine.");
        const item2 = new Item("Pack of Gum", 2.99, "35 pack of Wrigley's Polar Ice EXTRA chewing gum.");
        const item3 = new Item("ChapStick", 3.99, "A small container of lip moisturizer.");
        this._items = [item1, item2, item3];
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
let shop = new Shop();
let andy = new User('Andy', 27);
andy.addToCart(shop.items[0]);
andy.addToCart(shop.items[0]);
andy.addToCart(shop.items[0]);
andy.addToCart(shop.items[1]);
andy.addToCart(shop.items[1]);
andy.addToCart(shop.items[1]);
andy.addToCart(shop.items[2]);
andy.addToCart(shop.items[2]);
andy.addToCart(shop.items[2]);
andy.printCart();
andy.removeFromCart(shop.items[0]);
andy.printCart();
andy.removeQuantityFromCart(shop.items[1], 2);
andy.printCart();
console.log(andy.cartTotal());
