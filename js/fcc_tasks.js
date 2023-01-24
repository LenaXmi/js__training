// const animalsList = [
//   { name: "pig", icon: "/static/pig.221f.jpg", description: "Goes 'oink!'", power: 3 },
//   { name: "cow", icon: "/static/cow.1dd9.jpg", description: "Says 'moo'.", power: 4 },
//   { name: "dog", icon: "/static/dog.9a82.jpg", description: "Barks 'woof!'", power: 2 },
//   { name: "cat", icon: "/static/cat.c07e.jpg", description: "Meow.", power: 1 },
// ];

// const animalsAdditionalList = [
//   { name: "pig", icon: "/static/pig.221f.jpg", description: "Goes 'oink!'", power: 3 },
//   { name: "cow", icon: "/static/cow.1dd9.jpg", description: "Says 'moo'.", power: 4 },
//   { name: "dog", icon: "/static/dog.9a82.jpg", description: "Barks 'woof!'", power: 2 },
// ];

// /**
//  *
//  * TASKS:
//  * 1) filter if power less than 2
//  * 2) change values
//  * 3) get the highest power
//  * 4) if only some is cow
//  * 5) if all are cow
//  * 6) merge 2 arrays
//  * 7) transform into string all animal names
//  * 8) if names includes dog
//  * 9) array iterator
//  *
//  */

// // Task 1
// function filterByPower() {
    
//     const newArr = []
    
//     animalsList.filter(animal => {
        
//         if (animal.power < 2) {
//     newArr.push(animal)
// }

//     })

//     return newArr
// }
// console.log(filterByPower())

// const iterator = animalsList[Symbol.iterator]()

// console.log(iterator.next())

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5: 
//         case 6:
//             count += 1;
            
//             break;
       
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count -=1;
          
//             break;
//     }
    
//     if (count > 0) {
//         return count + " Bet"
//     }
//     else  {
//         return count + ' Hold'
//     }

//   return "Change Me";
//   // Змініть код лише над цим рядком
// }

// // cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc(2))
// console.log(cc(3))
// console.log(cc(7))
// console.log(cc('K'))
// console.log(cc('A'))


// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// Only change code below this line
// function updateRecords(records, id, prop, value) {

//   if(prop!=='tracks'&&value!==''){
//    return records[id][prop] = value

//   }
//   else if (prop === 'tracks' && !records[id].hasOwnProperty(prop)) {
//       return records[id][prop] = [value]
//   }
//   else if (prop === 'tracks' && value !== '') {
//       return records[id][prop].push(value)
//   }
//   else if (value === ' ') {
//     delete prop
//     }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))
// console.log(updateRecords(recordCollection, 2548, "artist", ""))

// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"))
// console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))
// console.log(recordCollection)


// Налаштування
const myArray = [];

// Змініть код лише під цим рядком
// let i = 5;
// while(i>=0){
//     myArray.push(i)
   
//   i--
// }

// console.log(myArray)


// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
// for(let i = 0;i<arr.length;i+=1){

//     for (let j = 0; j < arr[i].length; j += 1){
//  product*=arr[i][j]
//   }
// }
//   // Only change code above this line
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком
    for (let i = 0; i < contacts.length; i += 1){
     
        if (name===contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
           
            return contacts[i][prop]

        }
        else if (name===contacts[i].firstName&&prop !== contacts[i][prop]) {
            return 'No such property'
        }

        
        
        
    }
    return 'No such contact'
  // Змініть код лише над цим рядком
}

console.log(lookUpProfile("Akira", "likes"))
console.log(lookUpProfile("Akira", "address"))
console.log(lookUpProfile("Kristian", "lastName"))
console.log(lookUpProfile("Harry", "likes"))
console.log(lookUpProfile("Sherlock", "likes"))

function countdown(n){

return n<1?[]:[n,...countdown(n-1)]

 
}

console.log(countdown(10))

function rangeOfNumbers(startNum, endNum) {
  return [];
};

console.log(rangeOfNumbers(1, 5))

// Ми визначили функцію під назвою rangeOfNumbers з двома параметрами. 
// Функція повинна повернути масив цілих чисел, що починаються з числа, представленого 
// параметром startNum і закінчується числом, яке представлене параметром endNum.
// Початкове число завжди буде меншим або рівним кінцевому номеру.Ваша функція 
// має використовувати рекурсію, викликаючи сама себе, але не повинна використовувати 
// якісь цикли.Вона також повинна працювати у випадках, колиstartNum і endNum однакові.

function rangeOfNumbers(startNum, endNum) {
   return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log(rangeOfNumbers(1, 5))

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
const reversedS =  s.sort()
return reversedS
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace())


function removeFirstTwo(list) {
  // Змініть код лише під цим рядком
  
  const [,,...shorterList] = list; // Змініть цей рядок
  // Змініть код лише над цим рядком
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo)
console.log(removeFirstTwo([1, 2, 3, 4, 5]))


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Змініть код лише під цим рядком
   const failureItems = []
    for (let i = 0; i <arr.length; i += 1) {
       
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
 
    }

  // Змініть код лише над цим рядком

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)



let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[a-z]*?1>/; // Change this line
let res = text.match(myRegex);

console.log(res)

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alpha-numeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let resulT = userCheck.test(username);
console.log(resulT)

function findLongestWordLength(str) {

 const   splittedStr = str.split(' ')
    let theLongestWord = splittedStr[0]
  
    
    for (let i = 0; i < splittedStr.length; i += 1){
      
        if (theLongestWord.length < splittedStr[i].length) {
            theLongestWord = splittedStr[i]
        }
        
    }

   return theLongestWord.length
  

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {

    const newArr = [];
    for (let i = 0; i < arr.length; i += 1){
        const subArr = arr[i]
      console.log(Math.max(...subArr))
      
        newArr.push(Math.max(...subArr))

    }

    return console.log(newArr)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

    // Check if a string (first argument, str) ends with the given target string 
    // (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
//  But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.



//If a negative number is provided as the first parameter to slice() , 
// the offset is taken backwards from the end of the string.

function confirmEnding(str, target) {


  return str.slice(-target.length) === target

}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"))

function repeatStringNumTimes(str, num) {

    let newStr = ''

    for (let i = 0; i < num; i += 1){

        if (num < 0) {
            return newStr
        }
        
       newStr+=str
       
       
    }
return newStr
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2))
console.log(repeatStringNumTimes("*", 3))
console.log(repeatStringNumTimes("*", 8))
console.log(repeatStringNumTimes("abc", 4))



// Create a function that looks through an array arr and returns the first element in it that passes
//  a 'truth test'.This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.


function findElement(arr, func) {
  
    
 
    for (let i = 0; i < arr.length; i += 1) {
      
        const x = arr[i]
        if (func(x)) {
            return x
        }
    }
        return undefined
        
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


function booWho(bool) {

  if(typeof(bool)==='boolean'){
    return true
  }
  return false;
}

console.log(booWho(null))
console.log(booWho(true))
console.log(booWho({ "a": 1 }))



// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
   
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  

  }
  return updatedTitle.join(" ");
}
titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {

  const newArr1 = arr1.slice()
  console.log(newArr1)
  arr2.splice(n,0,...newArr1)
  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
console.log(getIndexToIns([40, 60], 50));


// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because 
// all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.



function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))


// Write a function that splits an array(first argument) into groups the length of size
// (second argument) and returns them as a two - dimensional array.

function chunkArrayInGroups(arr, size) {
  const newArr = [];


  for (let i = 0; i < arr.length; i += size){

   newArr.push(arr.slice(i,i+size))
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// First, we create an empty array newArr where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
// We add this chunk/slice to newArr with newArr.push().
// Finally, we return the value of newArr once the for loop is complete.


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(books,bookName) {
  const newBookList = [...books]
 
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(books,bookName) {
  const newBookList = [...books]
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}

console.log(add(bookList, "A Brief History of Time"))
console.log(bookList)


// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(moovie=>{
  return {
    'title': moovie.Title,
    'rating':moovie.imdbRating
  }
});


// the map method
console.log(JSON.stringify(ratings));

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
   
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};


function getRating(watchList) {
  // Only change code below this line
  

 const nolanData = watchList
    .reduce((data, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, { sum: 0, count: 0 });
  const averageRating = nolanData.sum / nolanData.count;

  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList))




// Code Explanation
// Solve this challenge using a “for” loop and this

// The use of a “for” loop allows us to apply the callback function to every 
// item in the Global array and then push the modified items to the empty new array that 
// is returned in the end.

// the filter method

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
 if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  // Only change code above this line
  return newArray;
};



// The global variable
const watchList1 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList1.map((el) => {
  return {
    'title': el.Title,
    'rating':el.imdbRating
  }
}).filter(el=>el.rating>=8);

// Only change code above this line

console.log(filteredList);


// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
// The function should return a new array containing the squares of only the positive integers(decimal 
// numbers are not integers) when an array of real numbers is passed to it.An example of an array 
// of real numbers is[-3, 4.8, 5, 3, -3.2].



const squareList = arr => {

  const newArr = arr.filter(el => el > 0&&el%parseInt(el)===0).map(number => {
   return Math.pow(number,2)
  })

  return newArr;

};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

console.log(squaredIntegers);

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort()
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


function splitify(str) {
  // Only change code below this line
  const splittedStr = str.split(/\W/)
  return splittedStr

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
  // Only change code below this line
return str.split(/\W/).join(' ')

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));

// Only change code below this line
function urlSlug(title) {
 
  return title.trim().toLowerCase().split(/\s+/).join('-')

}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));

function sumAll(arr) {
  const sortedArr = arr.sort((a,b)=>a-b)
  console.log(sortedArr)
  let sum = 0;

  for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i += 1){
    sum+=i

  }

  return sum;
  }


console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]))
console.log(sumAll([10, 5]))

function diffArray(arr1, arr2) {

  const mergedArr = arr1.concat(arr2)
  const newArr =  mergedArr.filter(item => !arr1.includes(item) || !arr2.includes(item));





  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]))


function destroyer(arr, ...args) {
  const newArr = []
  
  for (let i = 0; i < arr.length; i += 1){
        if (args.indexOf(arr[i]) === -1) {
    newArr.push(arr[i])
   }
  }
  // for (el of arr) {
   
  //   if (args.indexOf(el) === -1) {
  //   newArr.push(el)
  //  }
  // }
  return newArr
  

  

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([2, 3, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
    

function whatIsInAName(collection, source) {
const newArr = []
  const key = Object.keys(source)
  for (el of collection) {
  
  }
  
  return newArr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))


