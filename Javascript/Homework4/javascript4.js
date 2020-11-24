// - створити функцію яка виводить масив

// let array =[1,2,3,4,5,6,7];
// function printArray(arr) {
//     console.log(arr)
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }

// }

// printArray(array)


// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function createArray(length, min, max) {
//     let array = [];
//     for ( i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() *(max - min) + min))
//     }
//     return array;
// }
// const array1 = createArray(10,10,100);
// printArray(array1)


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function returnMinFromThree(a,b,c) {
//     let min;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= a && c <= b) min = c;

//     console.log('min', min);
//     return min;
// }
// const min = returnMinFromThree(5,8,10);
// console.log(min)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function returnMaxFromThree(a,b,c) {
//     let max;
//     if (a >= b && a >= c) {
//         max = a;
//     }
//     if (b >= a && b >= c) {
//         max = b;
//     }
//     if (c >= a && c >= b) {
//         max = c;
//     }

    // console.log('max', max);
    // return max;
// }
// const max = returnMaxFromThree(5,8,10);
// console.log(max)

// function returnMaxFromThree(a,b,c) {
//     let max;
//     a > b ? max = a : max = b;
//     max > c ? max : max = c;
    // console.log('max', max);
    // return max;
// }
// const max = returnMaxFromThree(100,11,10);
// console.log(max)

// function returnMaxFromThree(a,b,c) {
//     let max = Math.max(a,b,c)
//     console.log('max', max);
//     return max;
// }
// const max = returnMaxFromThree(100,11,10);
// console.log(max)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function returnMinPrintMax() {
//     console.log(arguments)
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argument of arguments) {
//         if (argument > max) max = argument;
//         if (argument < min) min = argument;
//     }
//     console.log('max', max);
//     return min;
// }
// const min = returnMinPrintMax(1,2,3,4,5);
// console.log('min', min)



// - створити функцію яка виводить масив

// let array =[8,9,10,11,12,13,14,15];
// function printArray (arr) {
//     console.log(arr)
//     for (let elem of arr) {
//         console.log(elem)
//     }
// }
// printArray(array)

// - створити функцію яка повертає найбільше число з масиву


// let arr = [1,23,455464,685,242546,96,345,67];
// const returnMaxFromArray = (array) => {
//     let max = array[0];
//     for (let item of array) {
//         if (max < item) max =item;
//     }
//     return max;
// }
// let max = returnMaxFromArray(arr);
// console.log(max)


// - створити функцію яка повертає найменьше число з масиву

// let arr = [5,23,455464,685,242546,96,345,67];
// let returnMinFromArray = (array) => {
//     let min = array[0];
//     for(let item of array) {
//         if (min > item) min = array[item];
//     }
//     return min;
// }
// let min = returnMinFromArray(arr);
// console.log(min)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumArray () {
//     let sum = 0;
//     for (let item of arguments) {
//         sum = sum + item;
//     }
//     return sum;
// }
// let sum = sumArray(53,88,95,75245,5554,5);
// console.log(sum)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function getMidNumbOfarr() {
//     let MidSum = 0;
//     for ( i = 0; i < arguments.length; i++) {
//         MidSum = MidSum + arguments[i];
//     }
//     MidSum = MidSum / arguments.length
//     return MidSum;
// }
// let midSum = getMidNumbOfarr(1,2,3,4,5,6,7);
// console.log(midSum)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// My variant
// let getNumbOfObjects = (array) => {
//     let sumIndex = array.length;
//     return sumIndex;
// }
// let sumOfObjects = getNumbOfObjects([{numb: 1,isRich: true,haveHouse: 'false'}, {str:'sdsd',srt:'sdsdger',rooms:23},{},{},{}])
// console.log(sumOfObjects)

// const arrayOfObj = [{numb: 1,isRich: true,haveHouse: 'false'}, {str:'sdsd',srt:'sdsdger',rooms:23},2,'false',{},[],{}];
// function countFields (arr) {
//     let count = 0;
//     for (let obj of arr) {
//         if (typeof obj === 'object' && !Array.isArray(obj)) {
//             count++;
//         }
//     }
//     return count;
// }
// let summ = countFields(arrayOfObj);
// console.log(summ)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// My variant
// function getNumbOfFields() {
//     let fields =[];
//     for (let arr of arguments) {
//         for(let obj of arr) {
//             for (let field in obj) {
//                 fields.push(field)
//                 fields1 = arguments.length
//             }
//         }
//     }
//     return fields1;
// }
// let numbOfFields = getNumbOfFields ([{numb: 1,isRich: true,haveHouse: 'false'}, {str:'sdsd',srt:'sdsdger',rooms:23},{name: 'Roman'},{},{}]);
// console.log(numbOfFields)

// const arrayOfObj = [{numb: 1,isRich: true,haveHouse: 'false'}, {str:'sdsd',srt:'sdsdger',rooms:23},2,'false',{},[],{}];
// function countFields (arr) {
//     let count = 0;
//     for (let obj of arr) {
//         if (typeof obj === 'object' && !Array.isArray(obj)) {
//             for (let field in obj) {
//                 count++
//             }
//         }
//     }
//     return count;
// }
// let summ = countFields(arrayOfObj);
// console.log(summ)




// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function addValueFromDifferentObj (arr1,arr2) {
//     let sum = [];
//     for ( i = 0; i < arr1.length; i++) {
//         sum.push(arr1[i] + arr2[i]);
//     }
//     return sum
// }
// let sum = addValueFromDifferentObj([10,8,9,6],[5,6,3,4])
// console.log(sum)

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" ????????????????????????????//

// let array1 = [1,2,3,4];
// function changer (arr, index) {

//     let array = [...arr]
//     if (index < arr.length -1) {
//         let temp = array[index];
//         array[index] = array[index+1];
//         array[index + 1] = temp;

//     }
//     return array;
// }
// let result = changer(array1, 1);
// console.log(array1)
// console.log(result)

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function zeroInEnd (arr) {
//     let array = [...arr]
//     for ( i = arr.length - 1; i>=0; i--) {
//         if (array[i] === 0) {
//             array.splice(i,1);
//             array.push(0);
//         }
//     }
//     return array;
// }
// console.log(zeroInEnd([1,0,6,0,3]));
// console.log(zeroInEnd([0,1,2,3,4]));
// console.log(zeroInEnd([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function addText () {
//     let block = document.createElement('div');
//     block.innerText = 'Hello owu'
//     document.body.appendChild(block)
// }
// addText()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addText (message, typeTag) {
//     let tag = document.createElement(typeTag);
//     tag.innerText = message || 'HELLO WORLD'
//     document.body.appendChild(tag)
// }
// addText('Time to work', 'div')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. ??????????????????????????????????/

// let cars = [{
//     marka: 'Rover',
//     model: 75,
//     year: 2001,
//     hp: 150,
//     color: 'darkgreen',
//     driver: {
//             name: 'Roman',
//             age: '25',
//             sex: 'male',
//             expirience: '7'
//             }
// },
//     {
//     marka: 'Rover',
//     model: 200,
//     year: 2004,
//     hp: 120,
//     color: 'blue',
//     driver: {
//         name: 'Stas',
//         age: '27',
//         sex: 'male',
//         expirience: '7'
//         }
// },
//     {
//     marka: 'Rover',
//     model: 400,
//     year: 2000,
//     hp: 130,
//     color: 'red',
//     driver: {
//         name: 'Polina',
//         age: '27',
//         sex: 'female',
//         expirience: '4'
//         }
// },
//     {
//     marka: 'Chrysler',
//     model: '300c',
//     year: 2004,
//     hp: 180,
//     color: 'gray',
//     driver: {
//         name: 'Kateryna',
//         age: '28',
//         sex: 'female',
//         expirience: '6'
//         }
// },
//     {
//     marka: 'Chrysler',
//     model: 'Crossfire',
//     year: 2001,
//     hp: 220,
//     color: 'darkblue',
//     driver: {
//         name: 'Olena',
//         age: '26',
//         sex: 'female',
//         expirience: '7'
//         }
// },
//     {
//         marka: 'Chrysler',
//     model: 'PT Cruiser',
//     year: 2001,
//     hp: 120,
//     color: 'red',
//     driver: {
//         name: 'Julia',
//         age: '25',
//         sex: 'female',
//         expirience: '3'
//         }
// },
//     {
//     marka: 'Chrysler',
//     model: 'Grand Voyager',
//     year: 2005,
//     hp: 150,
//     color: 'blue',
//     driver: {
//         name: 'Mariana',
//         age: '19',
//         sex: 'female',
//         expirience: '1'
//         }
// },
//     {
//     marka: 'Mercedes',
//     model: 'E500',
//     year: 2008,
//     hp: 150,
//     color: 'black',
//     driver: {
//         name: 'Vlad',
//         age: '25',
//         sex: 'male',
//         expirience: '2'
//         }
// },
//     {
//     marka: 'Mercedes',
//     model: 'W211',
//     year: 2007,
//     hp: 150,
//     color: 'white',
//     driver: {
//         name: 'Oleksiy',
//         age: '27',
//         sex: 'male',
//         expirience: '4'
//         }
// },
//     {
//     marka: 'Mercedes',
//     model: 'W209',
//     year: 2012,
//     hp: 180,
//     color: 'darkgreen',
//     driver: {
//         name: 'Carl',
//         age: '24',
//         sex: 'male',
//         expirience: '4'
//         }
// }
// ]

// function mass(arr,identificator) {
//     let block = document.getElementById(identificator)
//     let ul = document.createElement('ul')
//     for ( i = 0; i < arr.length; i++) {
//         let auto = arr[i];
//         let li = document.createElement('li');
//         li.innerHTML = `${i+1} - ${auto.marka}`;
//         ul.appendChild(li);
//     }
//     let result = block.appendChild(ul);
//     return result
// }
// let result = mass(cars,'Main')

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// function mass(arr,identificator) {
//     let ident = document.getElementById(identificator)
//     // let block1 = document.createElement('div')
//     for ( i = 0; i < arr.length; i++) {
//         let car = arr[i];
//         let block1 = document.createElement('div');
//         let marka = document.createElement('h2');
//         let model = document.createElement('h3');
//         let year = document.createElement('p');
//         let hp = document.createElement('p');
//         let color = document.createElement('p');
//         let driver = document.createElement('h3')
//         for ( let who in driver) {
//             let blockDrive = document.createElement('h4');
//             blockDrive.innerText = driver[who];
//             driver.appendChild(blockDrive);
//         }
//         marka.innerHTML = `${auto.marka}`;
//         model.innerHTML = `${auto.model}`;
//         block2.innerHTML = `${auto.marka}`;
//         block1.appendChild(marka)
//     }
//     let result = ident.appendChild(block1);
//     return result
// }
// let result = mass(cars,'Main')



// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

// function uniteObjInArray (arr1,arr2) {
//     let users = JSON.parse(JSON.stringify(arr1));
//     let cities = JSON.parse(JSON.stringify(arr2));
//     let newArray = [];
//     for(let item of users){
//         for(let index of cities) {
//             if (item.id === index.user_id) {
//                 item.address = index;
//             }
//         }
//     }
//     newArray.push(users)
//     return users
// }
// let result = uniteObjInArray(usersWithId,citiesWithId);
// console.log(result)



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
// 	{
// 		title: 'Первое правило Бойцовского клуба.',
// 		body: 'Никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Второе правило Бойцовского клуба.',
// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Третье правило Бойцовского клуба.',
// 		body: 'В схватке участвуют только двое.'
// 	},
// 	{
// 		title: 'Четвертое правило Бойцовского клуба.',
// 		body: 'Не более одного поединка за один раз.'
// 	},
// 	{
// 		title: 'Пятое правило Бойцовского клуба.',
// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
// 	},
// 	{
// 		title: 'Шестое правило Бойцовского клуба.',
// 		body: 'Поединок продолжается столько, сколько потребуется.'
// 	},
// 	{
// 		title: 'Седьмое правило Бойцовского клуба.',
// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 	},
// 	{
// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
// 		body: 'Новичок обязан принять бой.'
//     }
// ];
// function deviderBlocks (arr) {
//     let result = document.createElement('div');
//     result.id = 'Main'
//     for ( i = 0; i < arr.length; i++) {
//         let rule = arr[i];
//         let table = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let para = document.createElement('p');
//         table.className = `arr rule${i+1}`;
//         h2.innerText = rule.title;
//         para.innerText = rule.body;
//         table.appendChild(h2);
//         table.appendChild(para);
//         result.appendChild(table);
//     }
//     let all = document.body.appendChild(result);
//     console.log(all)
//     return all
// }

// deviderBlocks(rules)
 // "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

let n = parseInt(prompt('Enter your number'));
for ( i = 2; i <= n; i = i * 2) {
    switch (n) {
        case i:  
            console.log('YES')
            break;
        default:
            console.log('NO');
}
}

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========


















// let hello = 'HELLO WORLD';
// let indexOf = hello.indexOf('WO');
// let concat = hello.concat(' JS', ' YOU CAN DO THIS');
// let char = hello.charAt(8);
// let qwe = 'hello {{userName}} welcome to platform';
// let replace = qwe.replace('{{userName}}', 'PIADORRRR');
// let slice = hello.slice(3,7);
// let spl = hello.split(' ')
// console.log(spl);

// let array = ['Vlad', 'Polina', 'Vova', 'Roma'];
// console.log(array.join(' hate '))
// let nm = '        Roman Makota Ruslan';
// let n = nm.split(' ');
// console.log(n)

// let nem = nm.toLowerCase();
// let alla = nem.trim()

// console.log(alla);
// let include = nm.includes('1');
// console.log(include)


// let mail = '   otamah    1995@gmail.com   ';
// let mailTrim = mail.trim();
// let mailSplit = mailTrim.split(' ');
// let mailJoin = mailSplit.join('')
// console.log(mailJoin)

// let normalMail = mail.toLowerCase().trim().split(' ').join('');
// console.log(normalMail)







// function sumator (one, two) {
//     let sum = one + two;
//     console.log('Calculaion started')
//     return sum;
// }

// function devider (sum, devide) {
//     let devide1 = sum/devide;
//     console.log(devide1)
//     return devide1;
// }

// let result1 = sumator(10,5);
// console.log(result1)

// let result2 = devider(result1, 2)
