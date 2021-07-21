//Task 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return  "Welcome!";
      ;
  } 
 return "Access denied, wrong password!";
 
}
//    console.log(checkPassword('dfjgkdf'));

//Task 3
function checkStorage(available, ordered) {

  if (ordered === 0) {
    return "Your order is empty!";
  }
 if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }   
  
  return "The order is accepted, our manager will contact you";
   
}
// console.log(checkStorage(150, 70));

//Task 8
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length -1;

const lastElement = fruits[lastElementIndex]
// console.log(lastElementIndex)
// console.log(lastElement)

//Task 9
function getExtremeElements(array) {
const element1 = array[0];
const lastElement = array[array.length -1];
return [element1, lastElement];
}

// console.log(getExtremeElements([1, 2, 3, 4, 5]))

//Task 10
function splitMessage(message, delimeter) {

    let words;
words = message.split(delimeter)
    return words
}
// console.log(splitMessage("Mango hurries to the train", " "))

//Task 11
function calculateEnGravingPrice(message, pricePerWord) {
   
    const elementQuantity = message.split(' ').length;
    const totalPrice = elementQuantity * pricePerWord;
    return totalPrice
}

console.log(calculateEnGravingPrice("JavaScript is in my blood", 10))

//Task 12
function makeStringFromArray(array, delimeter) {
    
    let string;
string = array.join(delimeter)
    return string
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))

//Task 13
function slugify(title) {
    
    let slug = title.toLowerCase().split(' ').join('-')
    return slug
}
console.log(slugify("Arrays for begginers"))

//Task 16
function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray)
    
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }
    return newArray
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))