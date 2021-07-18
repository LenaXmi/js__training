// -----ORDER-----

let pricePerDroid = 800;
console.log('Цена за один дроид:', pricePerDroid);

let orderedQuantity = 6;
console.log('Количество заказанных дроидов:', orderedQuantity);

const deliveryFee = 50;
console.log('Сумма доставки:', deliveryFee);

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log('Общая сумма заказа:', totalPrice);

let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
console.log(message);


//-----FUNCTION-----

//Task 1
function sayHi() {
    console.log('Hi! This is my first function!')
}
sayHi();

//Task 2
function add(a, b, c) {
    
  
    const result = a + b + c;
     
    console.log(`Addition result equals ${result}`);
   
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//Task 3
function add2(a, b, c) {
    return a + b + c;
}

console.log(add2(15, 27, 10));
console.log(add2(10, 20, 30));
console.log(add2(5, 10, 15));

//Task 4
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
   let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
    return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

//Task 5
function isAdult(age) {
    const passed = age >= 18;
    return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

//Task 6
function isValidPassword(password) {
    const SAVED_PASSWORD = 'iamapassword';

    const isMatch = password === SAVED_PASSWORD;
   
    return isMatch;

}

console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword('iamapassword'));

//Task 6

function checkAge(age) {


    if (age >= 18) {
        message = 'You are an adult'
    }
    else {
        message = 'You are a minor'
    }
    return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

//Task 7

function checkStorage(available, ordered) {
    if (ordered > available) {
        message = 'Not enough goods in stock!';
    }
    else {
        message = 'Order is processed, our manager will contact you.'
    }
    return message
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200,20));
console.log(checkStorage(200,150));
console.log(checkStorage(150,180));