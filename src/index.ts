import { v4 as uuidv4 } from "uuid";


class Item{

    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private readonly  _id: string = uuidv4()
    ){}

    public get id(): string {
        return this._id;
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
        private _name: string,
        private _age: number,
        private _cart: Item[],
        private readonly _id: string = uuidv4()
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
    
    constructor(private _items: Item[]){
        const item1 = new Item("Source Magazine", 8.99, "A copy of the latest issue of Source Magazine.");
        const item2 = new Item("Pack of Gum", 2.99, "35 pack of Wrigley's Polar Ice EXTRA chewing gum." );
        const item3 = new Item("ChapStick", 3.99, "A small container of lip moisturizer.");

        this.items.push(item1, item2, item3)
    }

        public get items(): Item[] {
            return this._items;
        }
        public set items(value: Item[]) {
            this._items = value;
        }
}