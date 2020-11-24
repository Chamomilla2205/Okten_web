// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
        // {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        // {/*some props and values*/},
        // {/*...*/},
        // {/*...*/},
//         ]

//    }
// ==============================================

// function Tag (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No Title';
//     this.action = action || 'No action';
//     this.attrs = attrs || [];
// }

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let atributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag (title, action, atributes);
// console.log(a);

// let title = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];

// let div = new Tag (title, action, atributes);
// console.log(div)

// let title = '<h2>';
// let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
// ];

// let h2 = new Tag (title, action, atributes);
// console.log(h2)

// let title = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atributes = [];

// let span = new Tag (title, action, atributes);
// console.log(span)

// let title = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atributes = [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
// ];

// let input = new Tag (title, action, atributes);
// console.log(input)

// let title = '<form>';
// let action = 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.';
// let atributes = [];

// let form = new Tag (title, action, atributes);
// console.log(form)

// let title = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atributes = [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'lable', actionOfAttr: 'Указание метки пункта списка.'},
// ];

// let option = new Tag (title, action, atributes);
// console.log(option)

// let title = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atributes = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
// ];

// let select = new Tag (title, action, atributes);
// console.log(select)


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Tag {
//     constructor (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No Title';
//     this.action = action || 'No action';
//     this.attrs = attrs || [];
//     }
// }

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let atributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag (title, action, atributes);
// console.log(a);

// let title = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];

// let div = new Tag (title, action, atributes);
// console.log(div)

// let title = '<h2>';
// let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
// ];

// let h2 = new Tag (title, action, atributes);
// console.log(h2)

// let title = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atributes = [];

// let span = new Tag (title, action, atributes);
// console.log(span)

// let title = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atributes = [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
// ];

// let input = new Tag (title, action, atributes);
// console.log(input)

// let title = '<form>';
// let action = 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.';
// let atributes = [];

// let form = new Tag (title, action, atributes);
// console.log(form)

// let title = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atributes = [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'lable', actionOfAttr: 'Указание метки пункта списка.'},
// ];

// let option = new Tag (title, action, atributes);
// console.log(option)

// let title = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atributes = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
// ];

// let select = new Tag (title, action, atributes);
// console.log(select)



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let cars = {
//     model: 'Cruiser PT',
//     produser: 'USA',
//     year:'2001',
//     maxSpeed:130,
//     engineCapacity: '2500cm',
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(`
//         model: ${this.model},
//         produser: ${this.produser},
//         year: ${this.year},
//         maxSpeed:${this.maxSpeed},
//         engineCapacity: ${this.engineCapacity},`)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     },
//     changeYear: function (newValue) {
//         console.log(this.year = newValue);
//     },
//     addDriver: function (driver) {
//         console.log(this.driver = driver);
//     }
// };
// let driver = {name: 'Roman', age: 25}
// cars.addDriver(driver)

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function cars (model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         },
//         this.info= function () {
//             console.log(`
//             model: ${this.model},
//             produser: ${this.produser},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             engineCapacity: ${this.engineCapacity},`)
//         },
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(this.maxSpeed += newSpeed);
//         },
//         this.changeYear = function (newValue) {
//             console.log(this.year = newValue);
//         },
//         this.addDriver = function (driver) {
//             console.log(this.driver = driver);
//         }
//     };


// const Chrysler =  new cars ('Cruiser PT', 'Usa', '2001', 130, '2500cm')
// console.log(Chrysler)

// Chrysler.changeYear (20)

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class cars {
//     constructor (model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//         this.info = function () {
//             console.log(
//                 this.model,
//                 this.producer,
//                 this.year,
//                 this.maxSpeed,
//                 this.engineCapacity
//             )
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(maxSpeed += newSpeed)
//         }
//         this.changeYear = function (newValue) {
//             console.log(newValue)
//         }
//         this.addDriver = function (driver) {
//             console.log(driver)
//         }
//     }
// }

// const Chrysler =  new cars ('Cruiser PT', 'Usa', '2001', 130, '2500cm')
// console.log(Chrysler)

// Chrysler.increaseMaxSpeed (30)


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Human {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Sinderella extends Human {
//     constructor (name, age, legSize) {
//         super (name,age);
//         this.legSize = legSize;
//     }

// }

// class Prince extends Human {
//     constructor (name, age, shoeSize) {
//         super (name,age);
//         this.shoeSize = shoeSize;
//     }
//     findSinderella(array) {
//         let find = null;
//         for (const first of array) {
//             if (first.legSize === this.shoeSize) {
//                 find = first;
//             }
//         }
//         if (find) {
//             console.log('My Sinderella name is ' + find.name);
//         } else {
//             console.log('ITS NOT MY BABY')
//         }
//     }
// }

// const one = new Sinderella ('Polina', 26, 36);
// const two = new Sinderella ('Mary', 26, 45);
// const three = new Sinderella ('Julia', 15, 36);
// const four = new Sinderella ('Helen', 26, 39);
// const five = new Sinderella ('Olha', 18, 36);
// const six = new Sinderella ('Kateryna', 28, 37);
// const seven = new Sinderella ('Iryna', 26, 38);
// const eight = new Sinderella ('Galyna', 26, 40);
// const nine = new Sinderella ('Bohdana', 26, 41);
// const ten = new Sinderella ('Helga', 26, 35);

// const arrayOfSinderellas = [];
// arrayOfSinderellas.push(one, two , three, four, five, six, seven, eight, nine, ten);
// console.log(arrayOfSinderellas)

// let ask = parseInt(prompt('Which size of shoe do you have?'));
// if (ask > 50) {
//     console.log('What a giant leg!')
// }else if( ask < 35) {
//     console.log('I ma goin to prison!!!!!!!')
// }

// const prince = new Prince ('Vladik ', 13, ask);
// prince.findSinderella(arrayOfSinderellas)




// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================


// function Sinderella (name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
// }

// function Prince (name, age, shoeSize) {
//     this.name = name;
//     this.age = age; 
//     this.shoeSize = shoeSize;

//     this.findSinderella = function (array) {
//         let find = null;
//         for (const first of array) {
//             if (first.legSize === this.shoeSize) {
//                 find = first;
//             }
//         }
//         if (find) {
//             console.log('My Sinderella name is ' + find.name);
//         } else {
//             console.log('ITS NOT MY BABY')
//         }
//     }
// }

// const one = new Sinderella ('Polina', 26, 36);
// const two = new Sinderella ('Mary', 26, 45);
// const three = new Sinderella ('Julia', 15, 36);
// const four = new Sinderella ('Helen', 26, 39);
// const five = new Sinderella ('Olha', 18, 36);
// const six = new Sinderella ('Kateryna', 28, 37);
// const seven = new Sinderella ('Iryna', 26, 38);
// const eight = new Sinderella ('Galyna', 26, 40);
// const nine = new Sinderella ('Bohdana', 26, 41);
// const ten = new Sinderella ('Helga', 26, 35);

// const arrayOfSinderellas = [];
// arrayOfSinderellas.push(one, two , three, four, five, six, seven, eight, nine, ten);
// console.log(arrayOfSinderellas)

// let ask = parseInt(prompt('Which size of shoe do you have?'));
// if (ask > 50) {
//     console.log('What a giant leg!')
// }else if( ask < 34) {
//     console.log('I ma goin to prison!!!!!!!')
// }

// const prince = new Prince ('Vladik ', 13, ask);
// prince.findSinderella(arrayOfSinderellas)