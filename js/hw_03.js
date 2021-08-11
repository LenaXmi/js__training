//Task 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location =  {country: 'Jamaica', city: 'Kingston'};

// console.log(apartment);
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

//Task 10
// const apartment1 = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// for (const key in apartment1) {
//     console.log(key)
// }
// for (const value in apartment1) {
//     console.log(apartment1[value])
// }

//Task 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//     if (apartment.hasOwnProperty(key)) {

//   keys.push(key);
//   values.push(apartment[key]);
//     }
// }

// console.log(keys);
// console.log(values);
// console.log(advert);
// console.log(apartment);

//Task 12
// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             const key = 1;
//             propCount += key;

//         };
//     };
//     return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

//Task 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// ;

// for (const key of keys) {

//    values.push(apartment[key])

// }

// console.log(values)

//Task 14
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  console.log(keys);

  return Object.keys(object).length;
}

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

//Task 16
//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
//где имя свойства это имя сотрудника, а значение свойства это зарплата.
//Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const b = Object.keys(salaries);
  const allSalaries = Object.values(salaries);

  for (const salary of allSalaries) {
    totalSalary += salary;
  }

  return totalSalary;
}
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//Task 17
//Перебери массив объектов colors используя цикл for...of.
//Добавь в массив hexColors значения свойств hex, а в массив rgbColors
//значения свойств rgb из всех объектов массива colors.

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  const clr = Object.values(color);

  hexColors.push(clr[0]);
  rgbColors.push(clr[1]);
}
// console.log(hexColors);
// console.log(rgbColors);

//Task 18
//Напиши функцию getProductPrice(productName) которая принимает один параметр
//productName - название продукта.Функция ищет объект продукта с таким именем(свойство name)
//в массиве products и возвращает его цену(свойство price).Если продукт с таким названием не найден,
//функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const product of products) {

//         console.log(product);
//         if (product.name === productName) {
//             return product.price;
//         }

//     }
//  return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

//Task 19
//Напиши функцию getAllPropValues(propName) которая принимает один параметр
//propName - имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем
//из каждого объекта в массиве products.Если в объектах нет свойства с таким именем,
//функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//    let allValues = [];

//     for (const product of products) {

//        if (product.hasOwnProperty(propName)) {
//                 allValues.push(product[propName]);
//         }

//     }
//     return allValues;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

//Task 20
//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
//productName - название товара.Функция должна вернуть общую стоимость(цена * количество)
//товара с таким именем из массива products.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const product of products) {
    let pricePerPiece = product.price;
    let quantity = product.quantity;
    let totalPrice = pricePerPiece * quantity;

    if (product.name === productName) {
      return totalPrice;
    }
  }

  return 0;
}

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

//Task 25
//Мы получили прогноз погоды на два дня, с минимальными и максимальными
//температурами, а также необязательными иконками.Замени объявления всех переменных
//одной операцией деструктуризации свойств объекта forecast.Задай значение
//по умолчанию для иконок, переменных todayIcon и tomorrowIcon -
//строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

//Task 30
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, 
//значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. 
//Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
   const completed = false;
  const category = 'General';
  const priority = 'Normal';
   const newObj = { completed, category, priority,...data };
    return newObj;
    
}

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

//Task 31
//Используя операцию rest дополни код функции add() так, 
//чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

function add(...args) {
   
   let sum = 0;
    for (const arg of args) {
     
       sum +=arg;
    }
    return sum;
}

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

//Task 32
//Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так,
//чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
//Это число должно быть первым параметром функции.

function addOverNum(number,...args) {
      let total = 0;

    for (const arg of args) {
        if (arg > number) {
            total += arg;
     }
  }

  return total;
}

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//Task 33
//Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, 
//а остальные аргументы будут просто числами.
//Дополни код функции так, чтобы она возвращала новый массив matches, 
//в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
//Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], 
//потому что только они есть в массиве первого аргумента.

function findMatches(arr,...args) {
    const matches = [];
    
    
    for (const arg of args) {
        if (arr.includes(arg)) {
            matches.push(arg);
     }
 }
    


    return matches;
}

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//Task 34
//Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки 
//по аналогии с getBooks() и addBook(bookName).
//Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>",
//где < имя книги > это значение параметра bookName.
//Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
//Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > 
//это значения параметров oldName и newName соотвественно.

// const bookShelf = {

//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }

// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

//Task 35
//Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
//Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    
  
     this.books.splice(bookIndex, 1, newName);
  
	return this.books
	
    // Change code above this line
  },
   
};

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//Task 37
//Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {

//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions
//   }
 
// };

// console.log(atTheOldToad.potions);

//Task 38
//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

//Task 39
//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

//Task 40
//Дополни метод updatePotionName(oldName, newName) так, 
//чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
    
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions
//   },
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

//Task 41
//Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, 
//а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions 
//будет храниться массив объектов со следующими свойствами:
// {
//   name: "Dragon breath",
//   price: 700
// }

//Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {

    this.potions.push(newPotion);
    return this.potions;
    
  },
  removePotion(potionName) {
   
    for (let i = 0; i < this.potions.length; i += 1) {

      const potionProp = this.potions[i].name
      
      if (potionName === potionProp) {
       
        this.potions.splice(i, 1);
       
      }

    }
    return this.potions
  },
    updatePotionName(oldName, newName) {
     
      for (const potion of this.potions) {
        console.log(potion)
        if (potion.name === oldName) {
          potion.name = newName;
        }
      }
      return this.potions;
     
    }

  }


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));



