//declaring variables

console.log(firstVar); //undefined
var firstVar = "Hey!"
console.log(firstVar);

let name;
console.log(name); //undefined

//console.log(a); Uncaught ReferenceError: Cannot access 'a' before initialization at module_1.js:6
let a = "Hi";
console.log(a);

a = 25; // let - changeable var
console.log(a);

// const number; 
// console.log(number); Uncaught SyntaxError: Missing initializer in const declaration

const b = false;
console.log(b);

const nothing = null;
console.log(nothing);

// null, undefined - gray in the console
// number - blue in the console
// string - black in the console

