// - з 5 числових значень
// let first_mas = [1,2,3,4,5];
// console.log(first_mas)

// - з 5 стічкових значень
// let second_mas = ['a','b','c','d','f'];
// console.log(second_mas)

// - з 5 значень стрічкового, числового та булевого типу
// let third_mas = ['a','b',2,3,false];
// console.log(third_mas)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let mass = [];
// mass[1] = 'b';
// mass[0] = 'a';
// mas[2] = 'c';
// mass[3] = 'd';
// mass.push('Roman');
// let Roman = mass.pop()    //pop стираэ оостаннє
// mass.unshift ('Stas');
// let Stas = mass.shift()   // стирає перше


// console.log(mass);
// console.log(Roman);
// console.log(Stas);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for (let i = 0; i<11; i++) {
//     document.write('<div>Text</div>');
    
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i<11; i++) {
//     document.write('<div>Text: ' +i+ '</div>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while(i<20) {
//     i++;
//     document.write('<h1>Random text</h1>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20) {
//     i++;
//     document.write('<h1>Random text: '+i+'</h1>')
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// itar
// const arrayNumb = [1,2,3,4,5,6,7,8,9,0];
// for (let i =0; i<arrayNumb.length; i++) {                                  
//     console.log(arrayNumb[i])
// }
// ||
// iter
// const arrayNumb = [1,2,3,4,5,6,7,8,9,0];
// for (const number of arrayNumb) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// const arrayStr = ['a','b','c','d','e','f','g','j','k','l'];
// for (let i =0; i<arrayStr.length; i++) {                                  
//     console.log(arrayStr[i])
// }

// const arrayStr = ['a','b','c','d','e','f','g','j','k','l'];
// for (const number of arrayStr) {
//     console.log(number)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const arrayAll = ['a','2',25,'4',true,false,'true',25,'k',40];
// for (let i =0; i<arrayAll.length; i++) {                                  
//     console.log(arrayAll[i])
// }

// const arrayAll = ['a','2',25,'4',true,false,'true',25,'k',40];
// for (const number of arrayAll) {
//     console.log(number)
// }


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const arrayAll = ['a',false,25,'4',true,false,'true',25,'k',40];
// for(let i = 0; i<arrayAll.length; i++) {
    // typeof arrayAll[i] === 'boolean' 
    //     ? console.log(arrayAll[i]) 
    //     : ''
// }
// тернарный оператор
// const arrayAll = ['a',false,25,'4',true,false,'true',25,'k',40];
// for (let i = 0; i<arrayAll.length; i++) {    
//     if (typeof arrayAll[i] === 'boolean') {
//         console.log(arrayAll[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const arrayAll = ['a',false,25,'4',true,false,'true',27,'k',40];
// for(let i = 0; i<arrayAll.length; i++) {
//     typeof arrayAll[i] === 'number' 
//         ? console.log(arrayAll[i]) 
//         : ''
// }

// const arrayAll = ['a',false,25,'4',true,false,'true',35,'k',40];
// for (let i = 0; i<arrayAll.length; i++) {    
//     if (typeof arrayAll[i] === 'number') {
//         console.log(arrayAll[i])
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const arrayAll = ['a',false,25,'4',true,false,'true',25,'k',40];
// for(let i = 0; i<arrayAll.length; i++) {
//     typeof arrayAll[i] === 'string' 
//         ? console.log(arrayAll[i]) 
//         : ''
// }

// const arrayAll = ['a',false,25,'4',true,false,'true',25,'k',40];
// for (let i = 0; i<arrayAll.length; i++) {    
//     if (typeof arrayAll[i] === 'string') {
//         console.log(arrayAll[i])
//     } else {

//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// const emptyArray = [];
// console.log(emptyArray[1] = 1);
// console.log(emptyArray[2] = true);
// console.log(emptyArray[3] = 'str');
// console.log(emptyArray[4] = 'false');
// console.log(emptyArray[5] = false);
// console.log(emptyArray[6] = 100);
// console.log(emptyArray[7] = true);
// emptyArray[8] = 'Polina';
// console.log(emptyArray[8]);
// emptyArray[9] = 16;
// console.log(emptyArray[9]);
// emptyArray[0] = 10;
// console.log(emptyArray[0]);

// or

// const emptyArray = [];
// emptyArray[1] = 1;
// emptyArray[2] = true;
// emptyArray[3] = 'str';
// emptyArray[4] = 'false';
// emptyArray[5] = false;
// emptyArray[6] = 100;
// emptyArray[7] = true;
// emptyArray[8] = 'Polina';
// emptyArray[9] = 16;
// emptyArray[0] = 10;
// for (let i = 0; i< emptyArray.length; i++) {
//     console.log(emptyArray[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i<10; i++) {
//     console.log('step : ',i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i<100; i++) {
//     console.log (`step : `,i);
//     document.write(`step :` + i +`<br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(i = 0; i<200; i +=2) {
//     console.log(`step : `,i);
//     document.write(`step : ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(i = 0; i<100; i +=1) {
//     if (i%2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
    
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(i = 0; i<100; i ++) {
//     if (i%2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write 

// for(i = 0; i<100; i++) {
//     if (i%2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }





// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// const time = 59;
// const timeHours = 23;
// let sec = 0;
// let minute = 0;
// let hour = 0;
// for ( i = 0; i <= timeHours ; i++) {
//     console.log('hours :', hour++)
//     for(i = 0; i <= time ; i++) {
//         console.log('minutes :', minute++)
//         for (i = 0; i <= time; i++) {
//              console.log('seconds :', sec++)
//         }
//         sec = 0;
//     }
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.





// const construct = [ 'a', 'b', 'c'];
// let str = '';
// for (i = 0; i < construct.length; i++) {
//     str = str + construct[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// const construct = [ 'a', 'b', 'c'];
// let str = '';
// let i = 0;
// while(i < construct.length) {
//     str = str + construct[i];
//     i++;
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// const construct = [ 'a', 'b', 'c'];
// let str = '';
// for (let string of construct) {
//     str = str + string;
// }
// console.log(str)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// const arr = [ 'a', 'b', 'c'];
// let str = '';
// for(let letter in arr) {
//     str = str + arr[letter];
// }
// console.log(str)


// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// const arr = ['a', 'b', 'c'];
// for (i = 1; i < 4; i++ ) {
//     arr.push(i)
// }
// console.log(arr)
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// const arrNumer = [1, 2, 3];
// let newArr = [];
// console.log(newArr);
// console.log(arrNumer)
// for (i= arrNumer.length-1;i>=0;i--) {
//     newArr.push(arrNumer[i])
// }
// console.log(newArr)

// console.log(arrNew)
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3]; 
// for(i = 3; i < 7; i++) {
//     arr.push(i)
// }
// console.log(arr)


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// const arr = [1, 2, 3];
// for (i=6; i>3 ; i = i - 1) {
//     arr.unshift(i)
// }
// console.log(arr)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// const arr = ['js', 'css', 'jq'];
// console.log(arr.shift())


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// const arr = ['js', 'css', 'jq']

// let pop =arr.pop()
// console.log(pop)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let numb = [1, 2, 3, 4, 5];
// console.log(numb.slice(3));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let numb = [1,2,3,4,5];
// console.log(numb.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//  Сплайс вирізає з масиву данні сплайс(з, до), а виводимо в консоль сам масив

// let numb = [1, 2, 3, 4, 5];
// numb.splice(1,2)      
// console.log(numb);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const array = [1, 2, 3, 4, 5];
// let number = array.splice(3, 0, 'a', 'b', 'c')
// console.log(array)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const array = [1, 2, 3, 4, 5];
// let numb3 = array.splice(5,0,'e');
// let numb2 = array.splice(4,0,'c');
// let numb = array.splice(1,0,'a','b');
// console.log(array)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// const arr = [2,17,13,6,22,31,45,66,100,-18]
// for(i = 0; i < arr.length; i++) {
//     if(arr[i]%2 === 0) { 
//         console.log(arr[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let arr2 = [];
// for(i = 0; i < arr.length; i++) {
    
//     // console.log(arr[i])
//     arr2.push(arr[i])
// }
// console.log(arr2)
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let arr2 = [];
// for(i = arr.length - 1; i >= 0; i--) {
//     arr2.unshift((arr[i]))
// }
// console.log(arr2)


// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let arr2 = [];
// for(i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i]
// }
// console.log(arr2)

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// const arrayNumb = [2,17,13,6,22,31,45,66,100,-18];
// i=-1;
// while (i<arrayNumb.length - 1) {
//     i++;
//     console.log(arrayNumb[i])
// }

// 2. перебрати його циклом for

// const arrayNumb = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < arrayNumb.length; i++) {
//     console.log(arrayNumb[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < arrNumer.length ) {
//     if (arrNumer[i] % 2 !== 0 ){
//         console.log(arrNumer[i])
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i<arrNumer.length; i++) {
//     if (i%2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < arrNumer.length) {
//     if (arrNumer[i] % 2 ==0) {
//         console.log(arrNumer[i])
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < arrNumer.length; i++) {
//     if(arrNumer[i]%2 === 0) {
//         console.log(arrNumer[i])
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten" 

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arrNumer);
// for(i = 0; i < arrNumer.length; i++) {
//     if(arrNumer[i]%3 === 0) {
//         arrNumer[i] = 'okten';
//     }
// }
// console.log(arrNumer)



// 8. вивести масив в зворотньому порядку.

// const arrayNumb = [2,17,13,6,22,31,45,66,100,-18];
// for(i = arrayNumb.length - 1; i >= 0; i--) {
//     console.log(arrayNumb[i])
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1 перебрати його циклом while
// const arrayNumb = [2,17,13,6,22,31,45,66,100,-18];
// i=arrayNumb.length-1;
// while (i>=0) {
    
//     console.log(arrayNumb[i]);
//     --i;
// }
// console.log('-----------------------')

// 9.2 перебрати його циклом for

// const arrayNumb = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < arrayNumb.length; i++) {
//     console.log(arrayNumb[i])
// }

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// i = arrNumer.length - 1;
// while (i >= 0 ) {
//     if (i % 2 !== 0 ){
//         console.log(arrNumer[i])
//     }
//     i--;
// }


// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// for(i = arrNumer.length; i>=0; i--) {
//     if (i%2 !== 0) {
//         console.log(arrNumer[i]);
//         document.write(arrNumer[i])
//     }
// }

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// i = arrNumer.length;
// while (i > 0) {
//     if (arrNumer[i] % 2 ===0) {
//         console.log(arrNumer[i])
//     }
//     i--;
// }

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// for(i = arrNumer.length; i > 0; i--) {

//     if(arrNumer[i]%2 === 0) {
//         console.log(arrNumer[i])
//     }
// }


// 9.7. замінити кожне число кратне 3 на слово "okten" 

// const arrNumer = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arrNumer)
// for(i = arrNumer.length - 1; i >= 0; i--) {
//     console.log(arrNumer[i])
//     if(arrNumer[i]%3 === 0) {
//         arrNumer[i] = 'okten';
//          console.log(arrNumer[i])
//     }
// }
// console.log(arrNumer)


// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let mass1 = [];
// for(i = 0; i < 100; i++) {
//     if(i%2 === 0) {
//         mass1.push(i)
//     }
// }
// console.log(mass1)
// - заповнити його 50 непарними числами за допомоги циклу.

// let mass1 = [];
// for(i = 0; i < 100; i++) {
//     if(i%2 !== 0) {
//         mass1.push(i)
//     }
// }
// console.log(mass1)

// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.

// let mass = [];
// let i = 0;
// while(i < 100) {
//     if(i%2 === 0) {
//         mass.push(i)
//     }
//     i++;
// }
// console.log(mass)

// 2. заповнити його 50 непарними числами за допомоги циклу.

// let mass1 = [];
// let i = 0;
// while(i < 100) {
//     if(i%2 !== 0) {
//         mass1.push(i)
//     }
//     i++;    
// }
// console.log(mass1)


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

    // const array = [];
    // for(i = 0; i<12; i++) {
    //     array[i] =  Math.floor((Math.random()*732-8)+8)
    // }
    // console.log(array)


//  2. вывести на консоль  каждый третий елемент

// for(i=0; i < array.length; i += 3) {
//     console.log(array[i])
// }

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

// for( i = 0;i<array.length; i += 3) {
//     if(array[i]% 2 === 0) {
//         console.log(array[i])
//     }
// }

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

// const newArr = [];
// for( i = 0;i<array.length; i += 3) {
//     if(array[i]% 2 === 0) {
//         newArr.push(array[i])
//     }
// }
// console.log(newArr)

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// for( i = 0;i<array.length; i++) {
//     if(array[i+1]% 2 === 0) {
//         console.log(array[i])
//     }
// }

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.????????????????????????????????

// const arr = [100,250,50,168,120,345,188];

// let result = 0;
// let a = 1;
// for (i = 0; i < arr.length; i++) {
// result = result + arr[i];
// } 
// console.log(result)

// const arr = [100,250,50,168,120,345,188];
// let result = 0;
// for (i=0; i< arr.length; i++) {
//     result = result + arr[i];
// }
// console.log(result)


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// const mass = [];
// const arr = [];
// for (i = 0; i < 10; i ++) {
//     mass[i] = Math.floor((Math.random() * 12) + 1);
//     let mass1 = mass[i] * 5;
//     arr.push(mass1);
// }
// console.log(mass)
// console.log(arr)


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

// const mass = [1,'true', false, 'cat', 23, 4];
// const mass1 = [];
// for (i = 0; i< mass.length; i++) {
//     typeof mass[i] === 'number'
//                 ? mass1.push(mass[i])
//                 : ''
    
// }
// console.log(mass);
// console.log(mass1)

// const mass = [1,'true', false, 'cat', 23, 4];
// const Mass = [];
// for (i = 0; i < mass.length; i++) {
//     if (typeof mass[i] === 'number') {
//         Mass.push(mass[i]);
//     }
// }
// console.log(Mass)

// let str = 'HELLO WORLD';
// let indexOf = str.indexOf('L')
// console.log(indexOf)
// let lastIndexOf = str.lastIndexOf('L');
// console.log(lastIndexOf)

// let charAt = str.charAt(8)
// console.log(charAt)
// let concar = str.concat(' FROM UKRAINE')
// console.log(concar)
// let replace = str.replace('HELLO','NICE')
// console.log(replace)
// let mass = ['R','o','m','a'];
// let s = mass.join(' say hello to ')
// console.log(s)