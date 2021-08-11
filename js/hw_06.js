//Task 1
//Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - 
//массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется 
//в переменной totalPrice и возвращается как результат работы функции.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

    orderedItems.forEach(number => totalPrice += number);

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//Task 2
//Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает 
//новый массив, в котором будут только те элементы оригинального массива, 
//которые больше чем значение параметра value.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number)
        }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

//Task 3
//Функция getCommonElements(firstArray, secondArray) принимает два массива 
//произвольной длины в параметры firstArray и secondArray, и возвращает новый 
//массив их общих элементов, то есть тех которые есть в обоих массивах.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
  
    firstArray.forEach(number => {
        if (secondArray.includes(number)) {
           commonElements.push(number) 
        }
    })
    return commonElements;
    // Пиши код выше этой строки
}
  
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));