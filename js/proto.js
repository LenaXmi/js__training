const Car = function (config) {
 
    const { brand, model, price } = config;
    this.brand = brand;
    this.model = model;
    this.price = price;

   
};

Car.prototype.sayHi = function () {
    console.log(this)
    console.log('Hello')
}

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}

const myCar = new Car({brand: 'Audi', model:'A3', price: 35000});
console.log(myCar)
myCar.sayHi();

myCar.changePrice(37000)

// const myCar2 = new Car({brand: 'Mazda', model:'3', price: 25000});
// console.log(myCar2);


// const myCar3 = new Car({brand: 'Skoda', model:'Octavia', price: 40000});
// console.log(myCar3);

