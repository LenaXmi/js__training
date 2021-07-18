let string = 'Hi! I am string';
console.log(string);
console.log(typeof string);

let number = 55;
console.log(number);
console.log(typeof number);

number = '55';
console.log(number);
console.log(typeof number);

// number = A55; Uncaught ReferenceError: A55 is not defined at primitives.js:13
// number = 55A; Uncaught SyntaxError: Invalid or unexpected token

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN;
console.log(number);
console.log(typeof number);

let isOpen = true;
console.log(isOpen);
console.log(typeof isOpen);

let confirmation = null;
console.log(confirmation);
console.log(typeof confirmation) //object
//null is not an object, but a primitive