import { v4 as uuidv4 } from "uuid";


class Item{

    constructor(
        private _id: string = uuidv4(),
        private _name: string,
        private _price: number,
        private _description: string
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}



class User{

    constructor(
        private _id: string = uuidv4(),
        private _name: string,
        private _age: number,
        private _cart: Item[]
    ){}

    public addToCart(item:Item){
        this.cart.push(item)
    }

    public removeFromCart(itemToRemove:Item):void{
        this.cart = this.cart.filter(item => item.id !== itemToRemove.id)
    }

    public removeQuantityFromCart(itemToRemove:Item, quantity:number):void{
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }

    public cartTotal():number{
        let total = 0
        for (let x of this.cart){
            total += x.price
        }
        return total
    }

    public printCart():void{
        for (let x of this.cart){
            console.log(x.name)
        }
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
}


class Shop{

    constructor(
        private _items: Item[]
        ){}

        public get items(): Item[] {
            return this._items;
        }
        public set items(value: Item[]) {
            this._items = value;
        }
}