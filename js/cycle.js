//-----WHILE----- Выполняет инструкцию, только если она true

// let counter = 0;
// while (counter < 10) {
//     console.log('counter:', counter);
//     counter += 1;
    
// }

// let clientsCounter = 18;
// const maxClients = 25;
// while (clientsCounter <= maxClients) {
//     console.log(clientsCounter);
//     clientsCounter += 1;
// }

//-----DO...WHILE----- Выполняет инструкцию хотя бы один раз

// let password = '';

// do {
//     password = prompt('Введите пароль длиннее 6-ти символов', '');
// }
// while (password.length < 7)
// console.log('Ввели пароль:', password)

//-----FOR-----

// const max = 10;

// for (let i = 0; i < max; i += 1){
//     console.log(i)
// }

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1){
    sum += i;
}
console.log(sum);

const max = 10;

for (let i = 0; i < max; i += 1){
    console.log(`${max}%${i}=`, max%i)
}

for (let i = 0; i < 10; i += 1){
    if (i === 5) {
        console.log('Дошли до 5-й итерации, прерываем цикл!');
        break
    }
}

const number = 10;

for (let i = 0; i < number; i += 1){
    if (i % 2 === 0) {
        
        continue
    }
    console.log('Нечётное i:', i)
}