// - создать массив с 20 числами.

// const array = [43,1010,1000,4,5,6,-87,8,9,25,0,12,75,14,15,16,7,18,19,20]

// -- при помощи метода sort и колбека  отсортировать массив.

// let sort1 = array.sort((a,b) => a - b)
// console.log(sort1)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sort2 = array.sort ((a,b) => b - a)
// console.log(sort2)

// -- при помощи filter получить числа кратные 3

// const filter1 = array.filter((value) => {
//     if (value%3 === 0){
//         return value
//     }
// });
// console.log(filter1)

// -- при помощи filter получить числа кратные 10

// const filter1 = array.filter((value) => {
//     if (value%10 === 0){
//         return value
//     }
// });
// console.log(filter1)

// -- перебрать (проитерировать) массив при помощи foreach()

// let forEach = array.forEach ((value) => console.log(value))
//     console.log(forEach)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let map = array.map((value) => {
//     let result = value * 3;
//     return result
// })
// console.log(map)

// - создать массив со словами на 15-20 элементов.

// const arrayOfUsers = ['roma','True','Stas','Cinderella','Zhytomyr','Yuriy', 'Andriy', 'anna', 'Anna', 'Code', 'JS', 'js', 'kyiv', 'Minsk', 'God', 'Roman']

// -- отсортировать его по алфавиту в восходящем порядке.

// let sort2 = array2.sort((a,b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
// })
// console.log(sort2)

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sort3 = array2.sort((a,b) => {
//     if (a.toLowerCase() < b.toLowerCase()) return 1;
//     if (a.toLowerCase() > b.toLowerCase()) return -1;
// })
// console.log(sort3)

// -- отфильтровать слова длиной менее 4х символов

// let filter1  = arrayOfUsers.filter((value) => value.length < 4 )
// console.log(filter1)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в 

// let changeUsers = arrayOfUsers.map((value) => value + '!' )
// console.log(changeUsers)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
 

// let users = [ {name: 'vasya', age: 31, status: false},
// {name: 'kolya', age: 30, status: true}, 
// {name: 'petya', age: 29, status: true}, 
// {name: 'olya', age: 28, status: false}, 
// {name: 'max', age: 30, status: true}, 
// {name: 'anya', age: 31, status: false}, 
// {name: 'oleg', age: 28, status: false},
// {name: 'andrey', age: 29, status: true}, 
// {name: 'masha', age: 30, status: true}, 
// {name: 'olya', age: 31, status: false}, 
// {name: 'max', age: 31, status: true} ];
// console.log(users)

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortUsersAge = users.sort((a,b) => {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
// })
// console.log(sortUsersAge)

// let sortUsersAge2 = users.sort((a,b) => {
//     if (a.age < b.age) return 1;
//     if (a.age > b.age) return -1;
// })
// console.log(sortUsersAge2)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortNameLetter = users.sort((a,b) => {
//     if (a.name.length > b.name.length) return 1;
//     if (a.name.length < b.name.length) return -1;
// }) 
// console.log(sortNameLetter)

// let sortNameLetter2 = users.sort((a,b) => {
//     if (a.name.length < b.name.length) return 1;
//     if (a.name.length > b.name.length) return -1;
// }) 
// console.log(sortNameLetter2)


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let changeOfUsers = JSON.parse(JSON.stringify(users))
// let addId = changeOfUsers.map((value, index) => {
//     value.id = index;
// })
// console.log(changeOfUsers)

// - відсортувати його за індентифікатором

// const sortOfCOU = changeOfUsers.sort ((a,b) => {
//     if (a.id > b.id) return 1;
//     if (a.id < b.id) return -1;
// })
// console.log(sortOfCOU)

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function Calc(a,b, callback) {
//     return callback(a,b)
// }
// let result = Calc(10,10,function(a,b) {
//     return a + b;
     
// }) 
// console.log(result)

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function Calc(a,b,c, callback) {
//     return callback(a,b,c)
// }
// let result = Calc(10,10,10,function(a,b,c) {
//     return a + b + c;
     
// }) 
// console.log(result)

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


// let cars = [ 
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filter1 = cars.filter((value) => value.volume >= 3);
// console.log(filter1)

// - двигун = 2л
// let filter2 = cars.filter((value) => value.volume === 2);
// console.log(filter2)

// - виробник мерс
// let filterProducer = cars.filter((value) => value.producer === 'mercedes');
// console.log(filterProducer)

// - двигун більше 3х літрів + виробник мерседес
// let filterMoreThreeAndMerc = cars.filter((value) => value.volume >= 3 && value.producer == 'mercedes') 
// console.log(filterMoreThreeAndMerc)

// - двигун більше 3х літрів + виробник субару
// let filterMoreThreeAndSubaru = cars.filter((value) => value.volume >= 3 && value.producer == 'subaru') 
// console.log(filterMoreThreeAndSubaru)

// - сили більше ніж 300
// let filterHp = cars.filter((value) => value.power >= 300);
// console.log(filterHp)

// - сили більше ніж 300 + виробник субару
// let filterHpAndSubaru = cars.filter((value) => value.power >= 300 && value.producer === 'subaru');
// console.log(filterHpAndSubaru)

// - мотор серіі ej
// let engineSeriesEj = cars.filter((value) => value.engine.includes('ej'));
// console.log(engineSeriesEj)

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const filterHpAndSubaruAndEj = cars.filter((value) => value.power >=300 
//                                                     && value.producer == 'subaru' 
//                                                     && value.engine.includes('ej'))
// console.log(filterHpAndSubaruAndEj)

// - двигун меньше 3х літрів + виробник мерседес
// const filterVolumeAndMerc = cars.filter((value) => value.volume < 3 && value.producer == 'mercedes');
// console.log(filterVolumeAndMerc)

// - двигун більше 2л + сили більше 250
// const filterVolumeAndHp = cars.filter((value) => value.volume > 2 && value.power > 250);
// console.log(filterVolumeAndHp)

// - сили більше 250  + виробник бмв
// const filterHpAndBMW = cars.filter((value) => value.power > 250 && value.producer == 'bmw')
// console.log(filterHpAndBMW)



// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
                        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
                        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
                        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
                        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
                        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
                        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
                        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                        {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
                        {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                        {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей

// const sortId = usersWithAddress.sort((a,b) => {
//     if (a.id > b.id) return 1;
//     if (a.id < b.id) return -1;
// });
// console.log(sortId)

// -- отсортировать его по id пользователей в обратном опрядке
// const sortId2 = usersWithAddress.sort((a,b) => {
//     if (a.id < b.id) return 1;
//     if (a.id > b.id) return -1;
// })
// console.log(sortId2)

// -- отсортировать его по возрасту пользователей
// const sortAge = usersWithAddress.sort((a,b) => {
//     if (a.age < b.age) return 1;
//     if (a.age > b.age) return -1;
// })
// console.log(sortAge)

// -- отсортировать его по возрасту пользователей в обратном порядке
// const sortAge = usersWithAddress.sort((a,b) => {
//         if (a.age > b.age) return 1;
//         if (a.age < b.age) return -1;
//     })
//     console.log(sortAge)

// -- отсортировать его по имени пользователей
// const sortName = usersWithAddress.sort((a,b) => {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
// })
// console.log(sortName)


// -- отсортировать его по имени пользователей в обратном порядке
// const sortName = usersWithAddress.sort((a,b) => {
//     if (a.name < b.name) return 1;
//     if (a.name > b.name) return -1;
// })
// console.log(sortName)

// -- отсортировать его по названию улицы  в алфавитном порядке
// const sortStreet = usersWithAddress.sort((a,b) => {
//     if (a.address.street > b.address.street) return 1;
//     if (a.address.street < b.address.street) return -1;
// })
// console.log(sortStreet)

// -- отсортировать его по номеру дома по возрастанию
// const sortNumber = usersWithAddress.sort((a,b) => {
//     if (a.address.number < b.address.number) return 1;
//     if (a.address.number > b.address.number) return -1;
// })
// console.log(sortNumber)


// -- отфильтровать (оставить) тех кто младше 30
// let filterAge = usersWithAddress.filter ((value) => value.age < 30)
// console.log(filterAge)

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filterStatusFalse = usersWithAddress.filter((value) => value.status == 0)
// console.log(filterStatusFalse)

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filterStatusFalseLess30 = usersWithAddress.filter((value) => value.status == false && value.age < 30)
// console.log(filterStatusFalseLess30)

// -- отфильтровать (оставить) тех у кого номер дома четный
// const filterHouseNumb = usersWithAddress.filter((value) => value.address.number % 2 === 0)
// console.log(filterHouseNumb)

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.



// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// const array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

















// числа Фібоначчі

// function recursion (forNow, Privious) {
//     if (arr > 987) {
//         return;
//     }
//     let COUNT = forNow + Privious;
//     console.log(COUNT)
//     recursion(COUNT, forNow);
// }

// recursion(1,0);