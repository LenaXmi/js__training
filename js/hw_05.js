//Task 6
//С помощью Function Declaration напиши функцию-конструктор Storage, 
//которая будет создавать объекты для управления складом товаров.
//Функция ожидает только один аргумент - начальный массив товаров, 
//который записывается на создаваемый объект в свойство items.

//Добавь методы на прототип:

//getItems() - возвращает массив текущих товаров в свойстве items объекта, 
//который вызывает этот метод.
//addItem(newItem) - принимает новый товар newItem и добавляет его в массив 
//товаров в свойстве items объекта, который вызывает этот метод.
//removeItem(item) - принимает товар item и удаляет его из массива товаров
//в свойстве items объекта, который вызывает этот метод.
//  function Storage (items) {
//     this.items = items;
// }

// Storage.prototype.getItems = function () {
//     return this.items
// };
// Storage.prototype.addItem = function (newItem) {

//     return this.items.push(newItem);
// }
// Storage.prototype.removeItem = function (item) {
//     const indexOfItem = this.items.indexOf(item);
//     this.items.splice(indexOfItem, 1);
//     return this.items;
// };


// Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage)
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//Task 7
//С помощью Function Declaration напиши функцию-конструктор StringBuilder, 
//которая принимает один параметр baseValue - произвольную строку, 
//которая записывается на создаваемый объект в свойство value.

//Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец 
//значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало 
//значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и 
//в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
//в той последовательности, в которой твой код будут проверять тесты.


// function StringBuilder(baseValue) {
//     this.value = baseValue;
   
// };

// StringBuilder.prototype.getValue = function (){
//     return this.value
   
// }
// StringBuilder.prototype.padStart = function (str) {
//    this.value= str += this.value;
    
// }

// StringBuilder.prototype.padEnd = function (str) {
//     this.value =this.value + str;
// }


// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//Task 12
//Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
//Сделай так, чтобы свойство items было приватным.

class Storage {
    #items;
    constructor( items  ) {
        this.#items = items;
      
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
      return  this.#items.push(newItem)
    }

    removeItem(item) {
        const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
    }
 
}

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };



// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//Task 13
//Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс 
//с методами.Сделай так, чтобы свойство value было приватным.


class StringBuilder{
    #value;

    constructor(baseValue) {
        this.#value = baseValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(str) {
      this.#value= str+= this.#value ;
    }

    padEnd(str) {
      
        this.#value += str;
    }

    padBoth(str) {
        // this.#value = str + this.#value + str;

        this.padStart(str);
        this.padEnd(str);
    }

}

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User{
static AccessLevel = 
  {BASIC:'basic', 
   SUPERUSER:'superuser'}
}

console.log(Admin.AccessLevel.BASIC)
console.log(Admin.AccessLevel.SUPERUSER)

