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
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (const client of clients) {
    if (client === clientNameToFind) {
        message = 'Клиент с такием именем есть в базе данных';
        break;
    }
    message = 'Клиента с таким именем нет в базе данных';
}

console.log(message);

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
}


//-----МНОГОМЕРНЫЕ МАССИВЫ-----

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[1][2]) //6
// console.log(matrix[0][1]) //2

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1){
    console.log('Подмассив матрицы matrix[i]:', matrix[i])

    for (let j = 0; j < matrix[i].length; j += 1){
        console.log('Элемент подмассива матрицы matrix[i][j]:', matrix[i][j]);
        total += matrix[i][j];
    }
}
console.log(total); //45



