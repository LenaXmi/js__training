//Task 2
//Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов.
//Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }


// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Ультрасыр', deliverPizza));

//Task 3
//Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName),
//которая логирует строку 'Едим пиццу <имя пиццы>'

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName){
//     console.log(`Едим пиццу ${pizzaName}`)
// });

//Task 4
//Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, 
//чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

//Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 
//'В ассортименте нет пиццы с названием <имя пиццы>.'

//Если в свойстве pizzas есть пицца с названием из параметра pizzaName, 
//метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

//После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.
//Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
      
//         if (this.pizzas.includes(pizzaName)) {
//          return (onSuccess(pizzaName)) ;
            
        
                  
//         }
//         const error = `В ассортименте нет пиццы с названием ${pizzaName}.`;
//         return onError(error);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

//Task 5
//Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this
//в местах обращения к свойствам и методам объекта.

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
    order(pizzaName) {
      
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};


// console.log(pizzaPalace.order('Аль Копчино'));
// console.log(pizzaPalace.order('Четыре нарезона'));
// console.log(pizzaPalace.order('Биг майк'));
// console.log(pizzaPalace.order('Венская'));

//Task 7
//Сервису приготовления и доставки еды требуется функция генерации сообщений 
//о статусе заказа.
//Дополни функцию composeMessage(position) так, чтобы она возвращала строку 
//в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' 
//Позиция это значение параметра position - позиция элемента в массиве(на единицу больше чем индекс).

//Не объявляй дополнительные параметры функции composeMessage(position).
//Используй call для вызова функции в контексте одного объекта-заказа.
//Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
//Дополни код так, чтобы в переменной messages получился массив сообщений 
//о статусе заказов из массива orders с помощью цикла for.

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];


// // Пиши код ниже этой строки
// function composeMessage(position) {

// return  ` Готовим ${this.dish} для ${this.email}. Ваш заказ  ${position}-й в очереди. `

// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1){
//     console.log(orders[i])
//     messages.push(composeMessage.call(orders[i], i+1))
    
// }

// console.log(messages)

//Task 8
//Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// console.log(messages)

//Task 9
//Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. 
//Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer 
//были её копии с привязанным контекстом к соответствующим объектам.

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

//Task 10
//Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. 
//Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.
//Сбор статистики симулируется логированием строки.Разберись и дополни код так, чтобы он работал верно.

//Объявлена переменная service.
//Значение переменной service это оригинальный объект.
//Объявлена функция logAndInvokeAction(email, action).
//Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
//Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
//Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
//Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
     
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

