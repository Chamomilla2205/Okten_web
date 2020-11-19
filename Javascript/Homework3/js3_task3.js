// 1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let me = {
    name: 'Roman',
    age:25,
    sex: 'male',
};
let sis = {
    name: 'Mariana',
    age: 19,
    sex: 'female',
};
let mom = {
    name: 'Iryna',
    age: 50,
    sex: 'female',
}
let father = {
    name: 'Ruslan',
    age: 49,
    sex: 'male',
}
let cat = {
    name: 'Asia',
    alive: false,
    color: 'black',
    female: true
}

// 2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = { name: 'kokos',
//             skills : ['java','js'] ,
//             wife: { name: 'cherry' }, 
//         };
// let girl = {
//             name: 'Polina',
//             skills : ['farmacy','exele'] ,
//             husbend: false,
//             home: {
//                 country: 'Ukraine',
//                 sity: 'Kryvyj Rih'
//             }
//             }
// let house = {
//     location: {
//         continent: 'Europe',
//         village: 'Hlybochycia'
//     },
//     roof: true,
//     swimming_pool: false,
//     houseHave: ['windows', 'doors', 'rooms']
// }
// let garden = {
//     size: {
//         width: '300m',
//         letgth: '500m',
//     },
//     trees: true,
//     items: ['trees', 'tools', 'flowers'],
//     people: 3
// }
// let lake = {
//     animals: {
//         fish: true,
//         ducks: false,
//         swans: 6
//     },
//     deep: '3m',
//     nearHouse: true,
//     band : ['3 axes', 'friends', 'beer'],
//     lakeBottom: 'MY ENEMIES'
// }

// 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let a in me) {
//     console.log(a)
// }
// for (let a in sis) {
//     console.log(a)
// }

// for (let a in mom) {
//     console.log(a)
// }

// for (let a in father) {
//     console.log(a)
// }

// for (let a in cat) {
//     console.log(a)
// }

// for (let a in man) {
//     console.log(a)
// }

// for (let a in girl) {
// }

// for (let a in house) {
//     console.log(a)
// }

// for (let a in garden) {
//     console.log(a)
// }  

// for (let a in lake) {
//     console.log(a)
// }


// // 4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2


// console.log(Object.keys(me));

// console.log(Object.keys(sis));

// console.log(Object.keys(mom));

// console.log(Object.keys(father));

// console.log(Object.keys(cat));

// console.log(Object.keys(man));

// console.log(Object.keys(girl));

// console.log(Object.keys(house));

// console.log(Object.keys(garden));

// console.log(Object.keys(lake));

// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let auto = [{
//         marka: 'Rover',
//         model: 75,
//         year: 2001,
//         hp: 150,
//         color: 'darkgreen'
//     },
//         {
//         marka: 'Rover',
//         model: 200,
//         year: 2004,
//         hp: 120,
//         color: 'blue'
//     },
//         {
//         marka: 'Rover',
//         model: 400,
//         year: 2000,
//         hp: 130,
//         color: 'red'
//     },
//         {
//         marka: 'Chrysler',
//         model: '300c',
//         year: 2004,
//         hp: 180,
//         color: 'gray'
//     },
//         {
//         marka: 'Chrysler',
//         model: 'Crossfire',
//         year: 2001,
//         hp: 220,
//         color: 'darkblue'
//     },
//         {
//             marka: 'Chrysler',
//         model: 'PT Cruiser',
//         year: 2001,
//         hp: 120,
//         color: 'red'
//     },
//         {
//         marka: 'Chrysler',
//         model: 'Grand Voyager',
//         year: 2005,
//         hp: 150,
//         color: 'blue'
//     },
//         {
//         marka: 'Mercedes',
//         model: 'E500',
//         year: 2008,
//         hp: 150,
//         color: 'black'
//     },
//         {
//         marka: 'Mercedes',
//         model: 'W211',
//         year: 2007,
//         hp: 150,
//         color: 'white'
//     },
//         {
//         marka: 'Mercedes',
//         model: 'W209',
//         year: 2012,
//         hp: 180,
//         color: 'darkgreen'
//     }
// ]

// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [  
//         {name: 'Zhytomyr',
//         population: '250 k',
//         country: 'Ukraine',
//         region: 'Zhytomyrska obl.',
//         },

//         {name: 'Kharkiv',
//         population: '1 mln',
//         country: 'Ukraine',
//         region: 'Kharkivska obl.',
//         },

//         {name: 'Kyiv',
//         population: '3 mln',
//         country: 'Ukraine',
//         region: 'Kyivska obl.',
//         },

//         {name: 'Wroclaw',
//         population: '300 k',
//         country: 'Poland',
//         region: 'Wroclaw obl',
//         },

//         {name: 'Minsk',
//         population: '2.7 mln',
//         country: 'Belarus',
//         region: 'Minsk obl.',
//         },

//         {name: 'Vyshhorod',
//         population: '75 k',
//         country: 'Ukraine',
//         region: 'Kyivska obl.',
//         },

//         {name: 'Berdychiv',
//         population: '75 k',
//         country: 'Ukraine',
//         region: 'Zhytomyrska obl.',
//         },
// ]

// 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

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

// 8- проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < auto.length) {
//     let q = auto[i];
//     console.log(q)
//     i++;
// }

// let n = 0;
// while (n < cities.length) {
//     let q =  cities[n];
//     console.log(q)
//     n++;
// }

// let s = 0;
// while (s < cars.length) {
//     let q = cars[s];
//     console.log(q)
//     s++;
// }

// 9- проитерировать каждый массив из задания 5,6,7 при помощи for .

// for ( i = 0; i < auto.length; i++) {
//     let s = auto[i];
//     console.log(s)
// }

// for ( i = 0; i < cities.length; i++) {
//     let s = cities[i];
//     console.log(s)
// }

// for ( i = 0; i < cars.length; i++) {
//     let s = cars[i];
//     console.log(s)
// }

// 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let a of auto) {
//     console.log(a)
// }

// for (let a of cities) {
//     console.log(a)
// }

// for (let a of cars) {
//     console.log(a)
// }

// 11- взять объекты из задания 1 и превратить каждый в json.


// let q = JSON.stringify(me);
// console.log(q)

// let w = JSON.stringify(sis);
// console.log(w)

// let e = JSON.stringify(mom);
// console.log(e)

// let r = JSON.stringify(father);
// console.log(r)

// let t = JSON.stringify(cat);
// console.log(t)

// - взять json из задания 11 и превратить их обратно в объекты.

// console.log(JSON.parse(q))

// console.log(JSON.parse(w))

// console.log(JSON.parse(e))

// console.log(JSON.parse(r))

// console.log(JSON.parse(t))


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .


// for ( i = 0; i < auto.length; i++) {
//     let auto1 = auto[i];
//     let result = JSON.stringify(auto1)
//     console.log((result))
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .


// for ( i = 0; i < cities.length; i++) {
//     let auto1 = cities[i];
//     let result = JSON.stringify(auto1)
//     console.log((result))
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let mass = [];
// for ( i = 0; i < cars.length; i++) {
//     let auto1 = cars[i];
//     let result = JSON.stringify(auto1);
//     mass.push(result)
//     console.log((result))
// }
// console.log(mass)


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let arr = [  
//     {name: 'Helen',
//     lastname: 'Voloshyna',
//     age: 26,
//     sex: 'female',
//     skills: ['shooting', 'driving', 'cooking'],
//     },

//     {name: 'Roman',
//     lastname: 'Makota',
//     age: 25,
//     sex: 'male',
//     skills: ['pharmacy', 'driving', 'karate-do'],
//     },

//     {name: 'Mariana',
//     lastname: 'Makota',
//     age: 19,
//     sex: 'female',
//     skills: ['cooking', 'smoking', 'karate-do'],
//     },

//     {name: 'Iryna',
//     lastname: 'Makota',
//     age: 50,
//     sex: 'female',
//     skills: ['pharmacy', 'driving', 'fighting'],
//     },

//     {name: 'Ruslan',
//     lastname: 'Makota',
//     age: 48,
//     sex: 'male',
//     skills: ['sambo', 'driving', 'ingeniering'],
//     },

//     {name: 'Julia',
//     lastname: 'Dobrovinska',
//     age: 25,
//     sex: 'female',
//     skills: ['logistic', 'driving', 'dances'],
//     },

//     {name: 'Stas',
//     lastname: 'Mirko',
//     age: 26,
//     sex: 'male',
//     skills: ['pharmacy', 'driving', 'coding'],
//     },
// ]

// for (i = 0; i < arr.length; i++) {
//     let s = arr[i];
//     console.log(s)
//     if (s.skills){
//         console.log(s.skills);
//     for ( let c of s.skills){
//         console.log(c)
//     }
// }

// }


// 


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let arrayAll = [];

// let arr = [  
//     {name: 'Helen',
//     lastname: 'Voloshyna',
//     age: 26,
//     sex: 'female',
//     skills: ['shooting', 'driving', 'cooking'],
//     },

//     {name: 'Roman',
//     lastname: 'Makota',
//     age: 25,
//     sex: 'male',
//     skills: ['pharmacy', 'driving', 'karate-do'],
//     },

//     {name: 'Mariana',
//     lastname: 'Makota',
//     age: 19,
//     sex: 'female',
//     skills: ['cooking', 'smoking', 'karate-do'],
//     },

//     {name: 'Iryna',
//     lastname: 'Makota',
//     age: 50,
//     sex: 'female',
//     skills: ['pharmacy', 'driving', 'fighting'],
//     },

//     {name: 'Ruslan',
//     lastname: 'Makota',
//     age: 48,
//     sex: 'male',
//     skills: ['sambo', 'driving', 'ingeniering'],
//     },

//     {name: 'Julia',
//     lastname: 'Dobrovinska',
//     age: 25,
//     sex: 'female',
//     skills: ['logistic', 'driving', 'dances'],
//     },

//     {name: 'Stas',
//     lastname: 'Mirko',
//     age: 26,
//     sex: 'male',
//     skills: ['pharmacy', 'driving', 'coding'],
//     },
// ]

// for ( i = 0; i < arr.length; i++) {
//     let first = arr[i];
    
//     if (first.skills){
//         for ( let second of first.skills) {
//             arrayAll.push(second)
//         }
//     }
// }
// console.log(arrayAll)


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for ( i = 0; i < users.length; i++) {
//     let one = users[i];
//     console.log(one)
//     if (one.skills) {
//         for ( let smallArr of one.skills) {
//             console.log(smallArr)            
//         }
//     }
// }


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.



            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			// }];

// let arrAddress = [];

// for ( let point of users) {
//     arrAddress.push(point.address)
// }
// console.log(arrAddress)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
//   Всі данні в одному блоці.

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     let home = JSON.stringify(user.address)
//     div.innerText = `${user.name} ${user.age} ${user.status} ${home}`;
//     document.body.appendChild(div);
// }

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     let address = '';
//     for (let home in user.address) {
//         address = address + ' ' + home + ': ' + user.address[home];
//     }
//     div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
//     document.body.appendChild(div);
// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//  розділивши всі властивості по своїм блокам (div>div*4)

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     let divDiv = document.createElement('div', div)
//     let home = JSON.stringify(user.address)
//     div.innerText = `${user.name} ${user.age} ${user.status} ${home}`;
//     document.body.appendChild(div);
// }

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     let divN = document.createElement('div');
//     let divA = document.createElement('div');
//     let divS = document.createElement('div');
//     let divAdd = document.createElement('div');
//     let address = '';
//     for (let home in user.address) {
//         address = address + ' ' + home + ': ' + user.address[home];
//     }
//     divN.innerText = user.name;
//     divA.innerText = user.age;
//     divS.innerText = user.status;
//     divAdd.innerText = address;
//     div.appendChild(divN);
//     div.appendChild(divA);
//     div.appendChild(divS);
//     div.appendChild(divAdd);
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//  розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     let divN = document.createElement('div');
//     let divA = document.createElement('div');
//     let divS = document.createElement('div');
//     let divAdd = document.createElement('div');
//     let addCi = document.createElement('div');
//     let addCo = document.createElement('div');
//     let addSt = document.createElement('div');
//     let addHo = document.createElement('div');
//     divN.innerText = user.name;
//     divA.innerText = user.age;
//     divS.innerText = user.status;
//     addCi.innerText = user.address.city;
//     addCo.innerText = user.address.country;
//     addSt.innerText = user.address.street;
//     addHo.innerText = user.address.houseNumber;

//     div.appendChild(divN);
//     div.appendChild(divA);
//     div.appendChild(divS);

//     divAdd.appendChild(addCi);
//     divAdd.appendChild(addCo);
//     divAdd.appendChild(addSt);
//     divAdd.appendChild(addHo);

//     div.appendChild(divAdd)
    
//     document.body.appendChild(div);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

    // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
    //                    {id: 2, name: 'petya', age: 30, status: true},
    //                    {id: 3, name: 'kolya', age: 29, status: true},
    //                    {id: 4, name: 'olya', age: 28, status: false},];
    // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
    //                     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    //                     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    //                     {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let ddssarray = [];

// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId)
// ddssarray.push(usersWithId)
// console.log(ddssarray)


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elementById = document.getElementById('first');
// console.log(elementById.innerText = 'alloha');
// elementById.style.width = '200px';
// elementById.style.height = ' 150px';


// let elementByClass = document.getElementsByClassName('last');
// for ( i = 0; i < elementByClass.length; i++) {
//     let elem = elementByClass[i];
//     elem.style.height = '200px';
//     elem.style.width = '200px';
//     elem.innerText = 'ALLOHA';
//     console.log(elem)
// }


// let elementByTag = document.getElementsByTagName('div');
// for ( i = 0; i < elementByTag.length; i++) {
//     let elem = elementByTag[i];
//     elem.style.height = '200px';
//     elem.style.width = '200px';
//     elem.innerText = 'ALLOHA';
//     console.log(elem)
// }


// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement('table');
// for ( i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     const td3 = document.createElement('td');
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

    
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// 
// let table = document.createElement('table');
// for ( n = 0; n < 10; n++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for ( i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
// }
// document.body.appendChild(table);


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let table = document.createElement('table');
// let ask1 = prompt('How much lines do you want?')
// let ask2 = prompt('How much cells do you want?')
// for ( n = 0; n < ask1; n++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for ( i = 0; i < ask2; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
// }
// document.body.appendChild(table);


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний


// let elemTags = document.getElementsByTagName('*');
// for (let o of elemTags) {
//     if (o.getAttribute('class')) {
//         console.log(o)
//     }
// }

// let paragraph = document.getElementsByTagName('p');
// for (let n of paragraph) {
//     n.innerText = 'Hello oktenweb !'
// }

// let div = document.getElementsByTagName('div');
// for (let i of div) {
//     i.style.color = 'red'
// }


// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// My job
// let elem = document.getElementsByTagName('h2');
// let list = document.createElement('ul');
// let elemId = document.getElementById('content');
// for (let h of elem) {
//     let line = document.createElement('li');
//     line.appendChild(h);
//     list.appendChild(line);
// }
// elemId.appendChild(list)

// let elem = document.getElementsByTagName('h2');
// let list = document.createElement('ul');
// let elemId = document.getElementById('content');
// for (let h of elem) {
//     let line = document.createElement('li');
//     line.innerText = h.innerText
//     list.appendChild(line);
// }
// elemId.appendChild(list)


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
// 	},

// ];

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html




// const wrap = document.createElement('div');
// wrap.id = 'wrap';
// for ( i = 0; i < rules.length; i++) {
//     let rule = rules[i];
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const paragraph = document.createElement('p');
//     div.className = `rules rule${i + 1}`;
//     h2.innerText = rule.title;
//     paragraph.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(paragraph);
//     wrap.appendChild(div)
// }


// document.body.appendChild(wrap);

    


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

let users = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(r => {
        console.log(r)
    })

    console.log(users)

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch,
// который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


// setTimeout(() => {
    
// }, timeout);