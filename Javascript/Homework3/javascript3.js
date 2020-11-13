
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let obj = {
//     dog: {
//         name: 'Homeless',
//         age: 8 +'years',
//         color: 'brown',
//         sex: 'male',
//         weight: 10 + 'kg',
//     },
//     me: {
//         name:'Roman',
//         age: 25,
//         hair: 'blonde',
//         sex: 'male',
//         weight: 74 + 'kg',
//         employed: false,
//     },
//     car: false,
//     flat: {
//         location: ' Zhytomyr',
//         rooms: 2,
//         pool: false,
//         balcony: 2,
//         number: '12',
//     },
//     book: {
//         name: 'Spark of Life',
//         author: 'Erich Maria Remark',
// 		theme: 'WW2 and prisoners in nazy Germany',
// 		color: 'yellow',
// 		isInteresting: true,
//     }
// }
// console.log(obj)

// // // -- Створити масив та вивести його в консоль:
// // // - з 5 собак
// const arrDogs = ['dog1','dog2','dog3','dog4','dog5'];
// console.log(arrDogs);
// // // - 3 5 людей
// const arrPeople = ['Stas','Polina','Yuriy','Roman','Vlad'];
// console.log(arrPeople)
// // // - з 5 автомобілів
// const arrCars = ['Rover', 'Renault', 'Lada', 'BMW', 'Lanos'];
// console.log(arrCars)



// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// const everything = {
// 	house:{ 
// 	color: 'darkGreen',
// 		size: { room: 2,
// 				length: 15 + 'm',
// 				width: 100 + 'm',
// 			},
// 		location: 'Ukraine',
// 		roof: 'red',
// 		warm: true,
// 	},
// 	driver: {
// 		sex: 'male',
// 		height: 180 + 'sm',
// 		heir: false,
// 		education: 'pharmasist',
// 		haveWife: true
// 	},
// 	toy: {
// 		made: 'in China',
// 		touch: 'soft',
// 		big: false,
// 		forKids: true,
// 		strange: true
// 	},
// 	table: {
// 		material: 'tree',
// 		size: 'low',
// 		forJob: true,
// 		color: 'brown',
// 		tall: 'middle'
// 	},
// 	bag: {
// 		size: 40 + 'l',
// 		color: 'black',
// 		sport: true,
// 		nice: true,
// 		inside: [12,false,'t-shirt','head']
// 	}
// }
// console.log(everything)


// Дан массив:

// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
//             ];
//             console.log(Object.keys(users))
//             console.log(Object.entries(users))

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status)
// - статус Максима
// console.log(users[10].status)
// - ім'я передостаннього об'єкту
// console.log(users[9].name)
// - ім'я третього об'єкта
// console.log(users[2].name)
// - вік Олега
// console.log(users[6].age)
// - вік Олі
// console.log(users[3].age)
// - вік + ім'я 5го об'єкта
// console.log(users[4].age,users[4].name)
// - вік + сатус Анни
// console.log(users[5].age, users[5].status)
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.


// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення