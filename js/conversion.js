//TO STRING

let value = 1;
let toString = String(value);
console.log(`${ value }, через конструктор String():`, toString);
console.log(`Тип данных ${value}, через конструктор String():`, typeof toString);




//Concatenation way
toString = value + "";
console.log(toString);
console.log(`Тип данных ${value}, через конкатенацию:`,typeof toString);


value = Infinity;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`Тип данных ${value}, через конкатенацию:`, typeof toString)


//TO NUMBER

value = 'I am a string';
let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`,toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через конкатенацию(унарный +):`, toNumber);
console.log(`Тип данных ${value}, через конкатенацию(унарный +):`, typeof toNumber);

value = '888';
toNumber = Number(value);

console.log(`${value}, через конструктор Number():`,toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через конкатенацию(унарный +):`, toNumber);
console.log(`Тип данных ${value}, через конкатенацию(унарный +):`, typeof toNumber);

value = '';
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`,toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через конкатенацию(унарный +):`, toNumber);
console.log(`Тип данных ${value}, через конкатенацию(унарный +):`, typeof toNumber);


value = true;
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`,toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через конкатенацию(унарный +):`, toNumber);
console.log(`Тип данных ${value}, через конкатенацию(унарный +):`, typeof toNumber);

//TO BOOLEAN

value = 1;
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

value = '1';
 toBoolean = Boolean(value);
console.log(`Строчная ${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип данных строчной ${value}, через конструктор Boolean():`, typeof toBoolean);

value = undefined;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

value = !!undefined;
toBoolean = Boolean(value);
console.log(`${value}, через двойное отрицание(!!):`, toBoolean);
console.log(`Тип данных ${value}, через двойное отрицание(!!):`, typeof toBoolean);

value = null;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

value = NaN;
toBoolean = Boolean(value);
console.log(`${value}, через двойное отрицание(!!):`, toBoolean);
console.log(`Тип данных ${value}, через двойное отрицание(!!):`, typeof toBoolean);


