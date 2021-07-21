//-----СОЗДАНИЕ. ДОСТУП К ЭЛЕМЕНТАМ----

// let clients = ['Mango', 'Poly', 'Ajax']
// console.log(clients);
// console.log(clients[2]); //Ajax
// console.log(clients[1]); //Poly

// //-----ПЕРЕОПРЕДЕЛЕНИЕ-----
// clients[0] = 'Kiwi' 
// console.log(clients); //Kiwi, Poly, Ajax
// clients[3] = 'Alex'
// clients[4] = 'User'
// console.log(clients); //Kiwi, Poly, Ajax, Alex, User

// //-----ДЛИНА МАССИВА-----
// clients.length = 8;
// console.log(clients.length); //8
// console.log(clients); //"Kiwi", "Poly", "Ajax", "Alex", "User", empty × 3
// console.log(clients[6]) //undefined

// clients.length = 3;
// console.log(clients); // "Kiwi", "Poly", "Ajax"

//ИТЕРАЦИЯ ПО МАССИВУ-----
// const clients = ['Mango', 'Poly', 'Ajax'];
// for (let i = 0; i < clients.length; i += 1){
//     console.log('Logging clients:', clients[i]);
// }


// const numbers = [];
// for (let i = 0; i < 5; i += 1){
//     numbers.push(`label-${i}`);
// }
// console.log('numbers:', numbers);

// //-----CYCLE FOR...OF-----

// const clients = ['Mango', 'Poly', 'Ajax']; //Итерация по массиву
// for (const client of clients) {
//     console.log(clients);
// }

// const string = 'javascript';  //Итерация по строке
// for (const character of string) {
//     console.log(character);
// }

//-----BREAK AND CONTINUE------
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с такием именем есть в базе данных';
//         break;
//     }
//     message = 'Клиента с таким именем нет в базе данных';
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }


//-----МНОГОМЕРНЫЕ МАССИВЫ-----

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[1][2]) //6
// console.log(matrix[0][1]) //2

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1){
//     console.log('Подмассив матрицы matrix[i]:', matrix[i])

//     for (let j = 0; j < matrix[i].length; j += 1){
//         console.log('Элемент подмассива матрицы matrix[i][j]:', matrix[i][j]);
//         total += matrix[i][j];
//     }
// }
// console.log(total); //45

//-----МЕТОДЫ-----

//Split & Join
// let message = 'Welkome to Bahamas!';
// console.log(message.split('')); //split с пустой строкой: ["W", "e", "l", "k", "o", "m", "e", " ", "t", "o", " ", "B", "a", "h", "a", "m", "a", "s", "!"]

// console.log(message.split(' ')); //строка с пробелом:  ["Welkome", "to", "Bahamas!"]

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.join(' ')); //Mango Poly Ajax
// console.log(clients.join(',')); //Mango,Poly,Ajax
// console.log(clients.join('/')); //Mango/Poly/Ajax

//IndexOf & Includes
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.indexOf('Kiwi')); //3
console.log(clients.indexOf('Snikers')); //-1

const vege = ['Potato', 'Carrot', 'Onion'];
console.log(vege.includes('Carrot')); //true
console.log(vege.includes('Mango')); //false

const redFruits = ['Apple', 'Strawberry', 'Cranberries', 'Cherry'];
const fruit = 'Cherry';

if (redFruits.includes(fruit)) {
    console.log('This is a red fruit!')
}

//Push, Pop, Shift, Unshift
const stack = [];
console.log(stack.push(1)); //1
console.log(stack.push(2)); //2
console.log(stack.push(3)); //3

console.log(stack.pop()); //3
console.log(stack.pop()); //2
console.log(stack.pop()); //1
console.log(stack.pop()); //undefined

let planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
console.log(planets.shift());
console.log(planets);

console.log(planets.unshift('Jupiter'));
console.log(planets);

//Slice
console.log(planets.slice(0, 2));
console.log(planets.slice(-1));


//Splice
const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(deletedScores); //[1, 2, 3]
console.log(scores); //[4, 5]

const colors = ['Red', 'Orange', 'Purple', 'Green']
colors.splice(1, 0, 'Grey'); //["Red", "Grey", "Orange", "Purple", "Green"]
console.log(colors);

const languages = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
languages.splice(1, 2, 'C#', 'PHP');
console.log(languages); //["C", "C#", "PHP", "Python", "JavaScript"]

const oldClients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];
const allClients = oldClients.concat(newClients);
console.log(allClients); //["Mango", "Poly", "Ajax", "Kiwi", "Monkong", "Singu"]

//Псевдомассив arguments
const sum = function () {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
};

console.log(sum(1, 2, 3)); //6

//Guard clause
const withdraw = function (amount, balance) {
    if (amount === 0) {
        console.log('Для проведения операции введите сумму больше нуля.');
    }
    else if (amount > balance) {
        console.log('Недостаточно средств на счету.');
    }
    else {
        console.log('Операция снятия средств проведена.');
    }
};
withdraw(0, 300); //Для проведения операции введите сумму больше нуля.
withdraw(400, 250); //Недостаточно средств на счету.
withdraw(200, 700); //Операция снятия средств проведена.

//Тщт же код с использованием паттерна Guard clause

// const withdraw = function (amount, balance) {

//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

 
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   console.log('Операция снятия средств проведена.');
// };

