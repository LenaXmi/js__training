
// const hotel = {}; //Создание объекта

// const hotel = {
//   name: 'Resort Hotel',  //Инициализация свойствами "ключ:значение"
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel.name); //Доступ к свойствам через точку 
// console.log(hotel['name']); //...либо квадратные скобки(используется, когда значение ключа лежит в переменной)

// hotel.address = '1, Beach Ave.'; //Если при записи значения по ключу, такого ключа в объекте нет, он будет создан.
// hotel['manager'] = 'Chuk Norris';
// console.log(hotel.address);
// console.log(hotel.manager);

// delete hotel.name; //Удаление свойств объекта через оператор delete
// console.log(hotel);

// console.log(hotel.stars); //5
// console.log(hotel.pool); //undefined При обращении к отсутствующему св-ву возвращает undefined

// let name = 'Resort Hotel'; //Короткие св-ва. Имя переменной - ключ, а значение переменной - значение свойства в объекте.
// let stars = 5;

// const hotel2 = {
//     name,
//     stars,
//     capacity: 100,
// };
// console.log(hotel2);


// const key = 'person'  
// const getKey = function () {
//     return 'age';
// };

// //Вычисляемые свойства
// const object = {
//     [key]: 'Mango',
//     [getKey()]: 2,
// };
// console.log(object);


// const hotel = {
//   name: 'Resort Hotel',  
//   stars: 5,
//     capacity: 100,
  
// greetInES5: function() {   //Если значение св-ва - функция, то оно называется методом объекта
//     console.log('Welcome!');  
//     },

//     greetInES6: function () {
//         console.log('Welcome!')
//     },
// };

// hotel.greetInES5();
// hotel.greetInES6();


// const hotel = {
//   name: 'Resort Hotel',  
//   stars: 5,
//     capacity: 100,
//     showName() {
//         console.log(this.name);  //Доступ к объекту через this
//     },
//     changeCapacity(value) {
//         this.capacity = value;
//     },
// }
// hotel.showName();
// hotel.changeCapacity(200);
// console.log(hotel.capacity);

// -----ПЕРЕБОР ОБЪЕКТА-----

// Цикл FOR...IN
// const hotel = {
//     name: 'HotelResort',
//     stars: 5,
//     capacity: 100,
// };

// for (const key in hotel) {  //Перебор ключей объекта hotel
//     console.log(key);
// }

// for (const key in hotel) {  //Для доступа к значению ключа используется синтаксис квадратных скобок
//     console.log(hotel[key])
// }

//-----КОНСТРУКТОР OBJECT И ЕГО МЕТОДЫ-----

// Object.keys() - возвращает массив с ключами объекта

// const hotel = {
//     name: 'HotelResort',
//     stars: 5,
//     capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// //С помощью комбинации метода и цикла можно перебрать объект.
// for (const key of keys) {
//     console.log('Value:', hotel[key]);
// };

// // Object.values() - возвращает массив со значениями свойств объекта

// const values = console.log(Object.values(hotel)); //["HotelResort", 5, 100]

// //Object.entries - возвращает массив записей, каждым элементом которого будет еще один массив 
// //                 из 2 - х элементов: ключа и значения этого ключа из объекта obj.

// const entries = Object.entries(hotel); //[Array(2), Array(2), Array(2)]


//  // На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  // в переменную key, а второй (значение) в переменную value
// for (const entry of entries) {   
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`)
// }


//Подсчет общего количества продуктов в объекте

const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};

const values = Object.values(goods);
console.log(values);

let total = 0;
for (const value of values) {
    total += value;
    
};
console.log(total); //20

//-----ОПЕРАЦИИ SPRED И REST-----

//Операция Spread(Распыление)

const temperatures = [18, 14, 12, 21, 17, 29]; //Распыление аргументов
let min = Math.min(temperatures); 
console.log(min); //NaN

min = Math.min(...temperatures);
console.log(min); //12

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']; // Распыление массивов
const copyOfHouses = [...houses]; // Можно скопировать один массив в другой
console.log(copyOfHouses);

const sliceCopyOfHouses = houses.slice(); //То же самое через метод slice
console.log(sliceCopyOfHouses);

const completeHouses = [...houses, 'Targaryen']; //Добавление элемента в массив
console.log(completeHouses);

const firstBatch = ['Arryn', 'Frey', 'Greyjoy']; 
const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
const houses1 = [...firstBatch, ...secondBatch]; //Объединение нескольких массивов в один
console.log(houses1);


//Комбинирование классических методов массива с операцией spread
const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];
console.log(housesInDebt);

//Обновление элементов и создание с ними нового массива
const updateHouses = [...houses.slice(0, 1), 'Frey of the Crossing', ...houses.slice(2)];
console.log(updateHouses);

//Распыление объектов

const a = { x: 1, y: 2 };
const b = { x:0, z:3 };

const c = Object.assign({}, a, b);
console.log(c); //{x: 0, y: 2, z: 3}

const d={...a, ...b} //То же самое используя операцию spread
console.log(c);

//-----свойства распыляемого объекта могут перезаписать значение существующего свойства,----- 
//-----если имена ключей совпадают-----
const e = { x: 5, j: 10, ...a, z: 15, ...b };
console.log(e); //{x: 0, j: 10, y: 2, z: 3}

//-----ДЕСТРУКТУРИЗАЦИЯ-----

const newHotel = {
    name: 'Rixos',
    stars: 5,
    capacity: 150,
}

// const { name, stars, capacity } = newHotel;
// console.log(name, stars, capacity); //Rixos 5 150

const { name: hotelName, stars, capacity: hotelCapacity } = newHotel; //Можно переопределить имена переменных в процессе присвоения
console.log(hotelName, stars, hotelCapacity) //Rixos 5 150

//Деструктуризация массивов происходит так же, только с использованием квадратных скобок
