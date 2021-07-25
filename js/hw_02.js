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
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;

// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

//Task 9
function getExtremeElements(array) {
const element1 = array[0];
const lastElement = array[array.length -1];
return [element1, lastElement];
}

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

//Task 10
function splitMessage(message, delimeter) {

    let words;
    words = message.split(delimeter);
    return words;
}
// console.log(splitMessage("Mango hurries to the train", " "));

//Task 11
function calculateEnGravingPrice(message, pricePerWord) {
   
    const elementQuantity = message.split(' ').length;
    const totalPrice = elementQuantity * pricePerWord;
    return totalPrice;
}

console.log(calculateEnGravingPrice("JavaScript is in my blood", 10));

//Task 12
function makeStringFromArray(array, delimeter) {
    
    let string;
    string = array.join(delimeter);
    return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

//Task 13
function slugify(title) {
    
    let slug = title.toLowerCase().split(' ').join('-');
    return slug;
}
console.log(slugify("Arrays for begginers"));

//Task 16
function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }
    return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))

//Task 18
function calculateTotal(number) {
    let sum = 0;
    for (let i = 0; i <= number; i += 1){
        sum += i;
    }
        
    return sum;
}
console.log(calculateTotal(7));

//Task 19
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1){
    const fruit = fruits[i];
    console.log(fruit);
}

//Task 20
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1){
        
//         total += order[i];
//     }
//     return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

//Task 21
function findLongestWord(string) {
    let stringSplit = string.split(' ')
    let longestWord = stringSplit[0];
    
    for (let word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord = word;
    }
}   
    console.log(longestWord);
    return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog")

//Task 22
function createArrayOfNumbers(min, max) {
    const numbers = [];

    for (let i = min; i <= max; i += 1){
        numbers.push(i);
      
      
    }
    return numbers;

}

console.log(createArrayOfNumbers(14, 17));

//Task 23
// function filterArray(numbers, value) {
//     const newArray = [];
//     for (let number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//       }
//   }
//     return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//Task 24
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];

      
    
    return fruits.includes(fruit);

 
}

console.log(checkFruit('mandarin'));
console.log(checkFruit("plum"));
console.log(checkFruit("pear"));

//Task 25
function getCommonElements(array1, array2) {
    let array3 = [];
    for (let number of array1) {
        if (array2.includes(number)) {
            array3.push(number);
        }
    }
    return array3;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//Task26
function calculateTotalPrice(order) {
    let total = 0;
    for (let value of order) {
        total += value;
    }
    return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));

//Task 27
function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let number of numbers) {
        if ( number > value) {
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));

//Task 28
const a = 3 % 1;
console.log(a);
const b = 4 % 3;
console.log(b);
const c = 11 % 4;
console.log(c);
const d = 12 % 7;
console.log(d);
const e = 8 % 3;
console.log(e);

//Task 29
function getEvenNumbers(start, end) {
    let evenNumbersArray = [];
    for (let i = start; i <= end; i += 1){
        if (i % 2 === 0) {
            evenNumbersArray.push(i);
        }
    }
    return evenNumbersArray;
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));

//Task 32
function includes(array, value) {
    for (let value1 of array) {
        if (value1 === value) {
            return true
        }
    }
    return false
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));