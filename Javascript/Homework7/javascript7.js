// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.createElement('button');
// btn.id = 'bestButton';
// let div = document.createElement('div');
// div.id = 'text';
// btn.innerText = 'Thats the WAY!'
// document.body.appendChild(btn);
// document.body.appendChild(div)
// let idText = document.getElementById('text')
// idText.innerText = 'REMOVE ME PLS I WANT DISSAPIAR';
// btn.onclick = (ev) => {
//     idText.hidden
//         ? idText.hidden = false
//         : idText.hidden = true;
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button');
// btn.innerText = 'CLICK ME AND I WILL BE BEHIND YOUR NECK';
// document.body.appendChild(btn);
// btn.onclick = (ev) => {
//     btn.remove(btn)
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

// const btn = document.createElement('button');
// btn.innerText = 'CLICK ME';
// const myForm = document.createElement('form');
// const myInput = document.createElement('input');
// myForm.appendChild(myInput);
// document.body.appendChild(myForm);
// document.body.appendChild(btn)
// btn.onclick = (ev) => {
//     parseInt(myInput.value) > 18
//         ? alert('Your welcome')
//         : alert('Does your mom know?')
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// const a1 = document.getElementById('a');
// const subMenu = document.getElementById('subMenu');
// let flag = false;
// a1.onclick = (ev) => {
//     if(flag) {
//         subMenu.style.display = 'block'
//         flag = false;
//     } else {
//         subMenu.style.display = 'none'
//         flag = true;
//     }
// }



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let div = document.createElement('div');
// div.id = 'main';
// const mainId = document.getElementById('main');
// document.body.appendChild(div)
// const commentArr = [
//     {title : 'gamma', body:'lorem ipsum dolo sit ameti'},
//     {title : 'delta', body: 'lorem sda qsd  sad sa dsf'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'alfa', body:'lorem ipsum dolo sit ameti'},
//     {title : 'beta', body:'lorem ipsum dolo sit ameti'}
// ]
// commentArr.forEach (item => {
//     const blockDiv = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const btn = document.createElement('button');
//     btn.innerText = 'Click and hide';
//     h2.innerText = item.title;
//     p.innerText = item.body;
//     blockDiv.appendChild(h2);
//     blockDiv.appendChild(p);
//     blockDiv.appendChild(btn)
//     div.appendChild(blockDiv)
//     btn.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true;
//     }
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const btn = document.getElementById('btn');
// const input1 = document.getElementById('input11');
// const input2 = document.getElementById('input12');
// const input3 = document.getElementById('input21');
// const input4 = document.getElementById('input22');
// btn.onclick = (ev) => {
//     console.log(input1.value)
//     console.log(input2.value)
//     console.log(input3.value)
//     console.log(input4.value)

// }


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let div = document.createElement('div');
// div.id = 'main';
// const mainId = document.getElementById('main');
// document.body.appendChild(div);
// function createTable(row,col,tag) {
//     const table = document.createElement('table');
//     for ( i = 0; i < row; i++) {
//         const tr = document.createElement('tr');
//         for (n = 0; n < col; n++) {
//             const td = document.createElement('td')
//             td.innerText = i.toString() + n.toString();
//             tr.appendChild(td)
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table)
// }
//
// createTable(4,5,div)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const inputRow = document.createElement('input');
// inputRow.type = 'number'
//
// const inputCell = document.createElement('input');
// inputCell.type = 'number'
//
// const inputValue = document.createElement('input');
// const btn = document.createElement('button');
//
// btn.innerText = 'ENTER';
// document.body.appendChild(inputRow);
// document.body.appendChild(inputCell);
// document.body.appendChild(inputValue);
// document.body.appendChild(btn);
//
// const div = document.createElement('div');
// div.id = 'main';
// document.body.appendChild(div);
//
// function createTable(row,col,tag) {
//     console.dir(inputRow)
//     console.log(inputRow)
//
//     const table = document.createElement('table');
//     for ( i = 0; i < row; i++) {
//         const tr = document.createElement('tr');
//         for (n = 0; n < col; n++) {
//             const td = document.createElement('td')
//             td.innerText = `Val:${inputValue.value} + ${i}`;
//             tr.appendChild(td)
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table)
// }
//
// btn.onclick = () => createTable(inputRow.valueAsNumber, inputCell.valueAsNumber, div)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['сука', 'kutas', 'cunt', 'dick'];
// let btn = document.createElement('button');
// let input = document.createElement('input')
// document.body.appendChild(btn);
// btn.innerText = 'CLICK'
// document.body.appendChild(input);
// btn.onclick = (ev) => {
//     for (let word of array) {
//         if (input.value === word) {alert('bad boy')};
//     }
// }





// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let array = ['сука', 'kutas', 'cunt', 'dick'];
// let btn = document.createElement('button');
// let input = document.createElement('input')
// document.body.appendChild(btn);
// btn.innerText = 'CLICK'
// document.body.appendChild(input);
// btn.onclick = (ev) => {
//     for (let word of array) {
//         if (input.value.includes( word)) {alert('bad boy')};
//     }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте



// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

const block = document.createElement('div');
div.id = 'main';
const divId = document.getElementById('main')
const check1 = document.createElement('checkbox');
const check2 = document.createElement('checkbox');
const check3 = document.createElement('checkbox');
document.divId.appendChild(check1);
document.divId.appendChild(check2);
document.divId.appendChild(check3);
document.body.appendChild(divId);


// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


