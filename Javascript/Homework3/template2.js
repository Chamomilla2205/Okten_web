// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елементу з ід main_header на будь-який інший

// let head = document.getElementById('main_header');
// head.style.color = 'red';

// -- робить шириниу елементу ul 400 пікселів

// let ul = document.getElementsByTagName('ul');
// for ( let a of ul) {
//     a.style.width = '400px'
//     console.log(a)
// }

// -- робить ширину всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList')
// for(let b of linkList) {
//     b.style.width = '50%'
//     console.log(b)
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let listElem2 = document.getElementsByClassName('listElement2')
// for (let c of listElem2) {
//     console.log(c.textContent)
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for(let list of li) {
//     list.style.background = 'grey'
// }
// -- отримує всі елементи 'a' та додає їм клас anchor

// let alla = document.getElementsByTagName('a');
// for(let a of alla) {
//     a.classList.add('anchor')
// }
// console.log(alla)


// -- отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let alla = document.getElementsByTagName('a');
// for ( let first of alla) {
//     if(first.textContent = 'link3') {
//         first.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let classA = document.getElementsByTagName('a');
// for(let a of classA) {
//     let b = a.textContent
//     a.classList.add('element_' + b)
//     console.log(a)
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sub = document.getElementsByClassName(('sub-header'));
// let ask = prompt('Which color you choose?')
// for(let q of sub) {
//     if(ask === 'red') {
//         q.style.background = 'red'
//     } else if (ask === 'blue') {
//         q.style.background = 'blue'
//     } else if (ask === 'green') {
//         q.style.background = 'green'
//     }
// }

// let sub = document.getElementsByClassName(('sub-header'));
// let ask = prompt('Which color you choose?')
// for(let q of sub) {
//         q.style.background = ask
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()


// let sub = document.getElementsByClassName(('sub-header'));
// let ask = prompt('Which color you choose?')
// for(let q of sub) {
//     let text = q.textContent
//     if (text === 'content 2 segment') {
//         q.style.background = ask;
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let firstClass = document.getElementsByClassName('content_1');
// firstClass.contentText = 'Hello';
// console.log(firstClass);


// -- отримати елементи p та змінити їм paddin на довільне значення

// let para = document.getElementsByTagName('p');
// for ( let i of para ) {
//     i.style.padding = '40px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let classText2 = document.getElementsByClassName('text2');
// classText2.contentText = 'Nice job friend';
// console.log(classText2)