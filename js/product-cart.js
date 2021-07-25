const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
     },
    remove(product) {
        for (const item of this.items){
            console.log(item)
        }
    },
    clear(){},
    countTotalPrice(){},
    increaseQuantity(productName){},
    decreaseQuantity(productName){},
}

console.log(cart.getItems());


cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'pear', price: 70 });
cart.add({ name: 'strawberry', price: 100 });

console.table(cart.getItems());