'use strict';

// 1) Переберите ['Капуста', 'Репа', 'Редиска', 'Морковка'] и верните элементы, длина которых составляет больше или равно 7.
// const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка','Баклажан', 'Лук', 'Картошка'];
// const result = arr.filter((el)=>{
//     return el.length >= 7
// } );
// console.log(result);


// 2) Дан массив с числами. Оставьте в нем только положительные числа.
// const arr = [13, -5, 10, 1, 2, -6, -9];
// const result = arr.filter((el)=>{
//     return el >= 0
// });
// console.log(result);


// 3) Пусть у вас есть массив с названиями месяцев.
// С помощью циклов  for-of, for, forEach выведите на экран все месяцы из массива.
// Должно быть 3 варианта решения.
// const arr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

// for (let month of arr) console.log(`Месяц = ${month}`);

// arr.forEach((element) => {
//     console.log(`Месяц = ${element}`)
// });

// for (let index = 0; index < arr.length; index++){
//     console.log(`Месяц = ${arr[index]}`)
// }


// 4) Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// const arr = ['проснуться','умыться','покушать','учится','играть','спать'];
// const result = arr.map((element) => {
//     return element + '!'
// });
// console.log(result);