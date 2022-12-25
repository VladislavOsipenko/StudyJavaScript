
/* const pi = 3.14;

let myName = 'Vlad';

let bool = true;

let modal;



console.log(myName);

console.log(4/0);

 */


/* let answer = confirm('lox');
console.log(answer); */
/* let answer = prompt('lox', '');
console.log(answer); */

/* let answers = [],
    questions = [
        'scho!',
        'AAA',
        'BBB'
    ];

    
for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

document.write(answers); */

/* let i = 0
do {
    console.log(i);
    i++;
} while (i < 10); */

/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;
} */

/* let age = prompt('Hawww','');

if (age < 18) {
    alert('HHHHHHH');
} else if(age > 60) {
    alert('mmmmm');
} else {
    alert('ok');
}

switch (age) {
    case '18':
        alert('HHHHHHH');
    break;
    case '100':
        alert('mmmmm');  
    break;
    default:
        alert('ok');
} */


/* function iSayHelo (user) {
    console.log('Helo ' + user + '!');
}
iSayHelo ("Vlad"); */


/* function myFirstApp(name, age) {
    alert(`Привет я, ${name}, мне ${age}, и это мой первый проeкт.`);

    function showSkils () {
        let skills = ['html', 'css', 'js'];
        alert(`Я изучаю ${skills}`);
    }
    showSkils();
    function checkAge() {
        let age = prompt('Сколько лет?', '');

        if (age < 18) {
            alert('рано');
        } else if (age > 18)  {
            alert('Входи');
        }
    }
    checkAge();
    function calcPow(num) {
        let number = 4;
        number = number * num;
    }
    console.log(calcPow(4));
}
myFirstApp("Vlad", "21"); */

/* let x = 5;
x = x + 20;
x--;
console.log(x); */
"use strict";

const { Value, compileString } = require("sass");


/* const arr = [1, 2, 3]; //Вывод формы в консоль
console.log(arr); */

/* alert('Hello'); */  //Фраза привет которая выводится на главный экран и накоторый можно ответить только да или нет

/* const result = confirm('Ti tut!'); //Вывод предлежения на главный экран на котоый можно ответить да или нет.
console.log(result); */

/* const answer = prompt('Tebe est 18', ''); */

/* const answers = []; // Вывод сообщения на главный экран на которое можно ответить 

answers[0] = prompt('Kto','');
answers[1] = prompt('Ti','');
answers[2] = prompt('Takoi','');

document.write(answers); */

/* console.log('arr' + " - object");
console.log(4 + +"5"); */


let incr = 10,
    decr = 10;

incr++; //Постискные
decr--;

++incr;  //Префиксные
--decr;

console.log(incr);
console.log(decr);


console.log(5%2); //Делит на столько то раз что в итогу дает еденицу.


console.log(2*4 === 8); //3 знака равенства означает сравнение по типу данных в этом случе число строго ровняется числу.




const isChecket = true, 
      isCloce = true;

console.log(isChecket && isCloce);//Проверка, что два эти класса правдивые.



const isCheckeet = true, 
      isClocce = false;

console.log(isCheckeet || isClocce);// Проверка, или то или другое правдивое.


console.log(2 + 2 * 2 !=8);// Переводится как не равен из-зи знака !.


const num = 50;    //Условия.

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Meny');
} else {
    console.log('OK!');
}
(num === 50) ? console.log('Ok!') : console.log('Error');  //Тернарный оператор.


const numm = 51;

switch (numm) {      //Строгое ставнение в отличии от обычных условий.
    case 49: 
        console.log('Neee!');
        break;       //Писать обязательно.
    case 100:
        console.log('Neee!');
        break;  
    case 50:
        console.log('yeap!');
        break;
    default:         //Стандартное действие.
        console.log('hmmm');
        break;
}



//Условия

let nummm = 50;

/* while (nummm <=55) {         //ПОка что цыкл выполняется мы будем делать какие то действия 
    console.log(nummm);
    nummm++;
}   */ 

do {                           //Сначала цыкл выполняется а потом проверяется
    console.log(nummm);
    nummm++;
}
while (nummm <=55);

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}


for (let r = 2; r <=10; r++) {
    if (r % 2 ===0) {
        console.log(r);
    }
}


for (let i = 1; i <= 10; i++) { 

    if (i === 6) {    //Вложеный цыкл
        /* break; */  //Остановка на 6 эл.
        continue;     //Дойдет до 10 но пропустит 6 элемент
    }
        
    console.log(i);
}


for (let y = 1; y <= 10; y++) {

    if (y == 1, 3, 5, 9) {
        continue;
    }
    console.log(y);
}



let result = '';        //Создание ёлочки
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result +="*";

    }

    result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++) {   //Цикл в цикле 
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    } 
}



const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
/* return arrayOfNumbers; */


/* const burger = true;
const pivo = false;

if (burger && pivo) {
    console.log('Nise!');
} else {
    console.log('blia!');
} */

const burger = 2;
const pivo = 1;
const cola = 0;

if (burger ===2 && cola === 2 && pivo) {
    console.log('Nise!');
} else {
    console.log('blia!');
}

console.log(1 && 0); //Оператор && показывает в True последний результат,когда False показывает его и останавливает код
console.log(1 && 7);
console.log(null && 6);
console.log(0 && 'sdasdasdasd');



const syp = 2;
const voda = 0;
const kanfeta = 0;

if (syp || voda || kanfeta) { //Что бы условие выполнилось достаточно чего то одного. Оператор ||.
    console.log('poydet!');
} else {
    console.log('nu i ladno');
}


const tort = 1;
const vodka = 2;
const sahar = 0;
const nagets = 2;

/* if (tort || vodka ===2 && sahar || nagets ===2) { //Комбинация операторов.
    console.log('Nise');
} else {
    console.log('blia');
} */

if (tort && vodka ===2 || sahar && nagets ===2) { //Комбинация операторов.
    console.log('Nise');
} else {
    console.log('blia');
}



console.log(!0);  //Оператор не(False меняет на True)


console.log( 5 === 5 && 3 > 1 || 5);


let row = '';
const numb = 7;

for (let i = 1; i < numb; i++) {   //Цикл в цикле.

    for (let j =0; j < i; j++) {
        row += "lox";
    }

    row +='\n';
}

console.log(row);

const lines = 5;     //Ёлочка
let resultt = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        resultt += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        resultt += "*";
    }
    resultt += "\n";
}

console.log(resultt);



const data = [5, 10, 'Shopping', 20, 'Homework']; //умножение чисел и добавление 'povna' для строк

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);


const oppa = [5, 4, 'Sraka', 35, 'dupa'];  //умножение чисел и добавление 'povna' для строк
for (let i = 0; i < oppa.length; i++) {
    if (typeof(oppa[i]) === 'number') {
        oppa[i] = oppa[i] * 2;
    } else if (typeof(oppa[i]) === 'string') {
        oppa[i] = `${oppa[i]} - povna`;
    }
}
console.log(oppa);





const dataa = [5, 10, 'Shopping', 20, 'Homework'];  //Обратная запись масива
const ressult = [];
for (let i = 1; i <= dataa.length; i++) {
    ressult[i - 1] = dataa[dataa.length - i]
}
console.log(ressult);




const str = 'HEllo!';    
console.log(str.toUpperCase());  //Верхний регист
console.log(str.toLowerCase());  //Нижний регист



const fruit = 'Some Fruit';  //Поиск Пот строки.
console.log(fruit.indexOf('Fruit'));  //С пятой позиции начинается слово которое указано в консоль.лог




const logg = "Hello World!";

console.log(logg.slice(6, 12)); //Вырезание слова которое начинается с 6 и заканчивается на 12 позиции.
console.log(logg.slice(0)); //Вырезаем слова которые начинаются с 0 позиции.
console.log(logg.substring(6, 12)); //Похожая команда, работает почти так же, особой разницы не имеет.
console.log(logg.substr(6, 5)); //С 6 строчки начинаем вырезание и вырезаем 5 символов.




const nuum = 12.4;
console.log(Math.round(nuum)); //Округления числа к ближайшему целому.


const test = '12.2pxs';
console.log(parseInt(test));   //Переводит число в другую систему исчесления(Н.: Строка меняестя в число)
console.log(parseFloat(test)); //Берет число или строку и возвращяет его в десятичном варианте.




function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

        volume = length * length * length;
        area = 6 * (length * length);

        return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
}
console.log(calculateVolumeAndArea(15));




function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}

getCoupeNumber(33);




function getTimeFromMinutes(time) {
    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
            hoursStr = 'часа';
            break;
        case 3:
            hoursStr = 'часа';
            break;
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;

}
getTimeFromMinutes(150);





function MaxNumber (a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c ,d);
    }
}
MaxNumber (1, 5, 6.6, 10.5);  //Вывод самого большого числа 
MaxNumber (1, 5, '6', 10);



function fib(num) {               //Число Фибаначи
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    } 
    
    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }

    return result;
    
}
fib(5);


//Callback

function learnJS (lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('i am SPIDERMAN');
}

learnJS('JavaScript', done);
/* learnJS('JavaScript', function() {
    console.log('i am SPIDERMAN')
}); */


//Обьекты. Диструкция обьектов.

const options = {
    name: 'text',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;  //Диструктизация (Вынос обьекта из масива)
console.log(border, bg);

/* console.log(options.name);


delete options.name;

console.log(options); */

/* let counter = 0;  //Счетчик

for (let key in options) {      //Перебор в обьекте свойства 
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имее значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имее значение ${options[key]}`);
        counter++;
    }   
   
}
console.log(counter); */


console.log(Object.keys(options).length);                       //object keys (Ключи нашего обьекта)




const arrr = [1, 2, 3, 4, 5, 6, 7,];
arrr.sort(compeareNum);

function compeareNum(a, b) {   //callback, правильная сортировка чисел(цифры пойде по заданому порядку)
    return a - b;
}

/* arrr.push(112); */   //Добаваляет обьект в масив в конец
/* arrr.pop();   */           //Убирает обьект с масива в конец

/* console.log(arrr); */

arrr.forEach(function(item, i, arrr) {   //Метот позволяет гибко перебрать елементы в нутри масива c callback
    console.log(`${i}: ${item} внутри масива ${arrr}`);
});

  

for (let i = 0; i <arrr.length; i++) {  //С помошью цикла перебрали элементы и вывели в концоль
    console.log(arrr[i]);
}

for (let value of arrr) {  //Так же перебираем елементы в масиве, эфект тот же, of работате только с масивами 
    console.log(value);
}




const sttr = prompt("sho!", "");  
const products = sttr.split(', ');//Формирование масива по ответам пользователя на сайте
products.sort();                  //Сортирует строки по алфавиту (Числа по первой чифре Н: 1, 12, 23, 24, 34, 56, 77)
console.log(products.join('; '));  //Обьединение обьектов в масив(Полученые данные переcтрою чере ; )



//Передача данных по ссылке или по значению


/* const obj = {
    a: 3,
    b: 32
};

const copy = obj; //link

copy.a = 10;

console.log(copy); */


function copyy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 4,
        y: 9
    }
};

const newNumbers = copyy(numbers);

newNumbers.a = 19;
console.log(newNumbers);
console.log(numbers);

const add = {   //Добавление обьектов в numbers.
    d: 14,
    e: 20
};

console.log(Object.assign(numbers, add)); //В первый обьект пишем то во что хотим поместить, вторым, что хотим поместить

const clone = Object.assign({}, add);  //Поверхносное копирование add и меняем d на 20

clone.d = 20;

console.log(clone);
console.log(add);


const oldArray = ['a', 'd', 'r'];    //Поверхносное копирование масива
const newArray = oldArray.slice();

newArray[1] = 'sho takoe bliat';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'video', 'rutube'],  //Вытаскивание елементов и помещение в масив internet с помощью ...
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'instagram'];
      console.log(internet);

function log(a, b, c) {  //Создание резервной  копии обьектов 
    console.log(a);
    console.log(b);
    console.log(c);
}
const nnuum = [2, 5 ,6];
log(...nnuum);


const array = ["a", "b"]; //Создание резервной копии масива
const newAarray = [...array];

const q = {     //Создание резервной копии
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(leng) {
            str += `${leng.toUpperCase}`;
        });
        return str;
        
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach (city => {
        console.log(city.toLowerCase())
    })
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';   //переворачивание предложения

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }

    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr
}
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        str += `${arr[i]}\n`;
    }
    return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');



const Soldat = {
    armor: 100,
    hals: 300
};

const Vlad = Object.create(Soldat) //Влад Прототипно наследуется от солдата для того что бы иметь доступ к методам и свойствам

/* const Vova = {
    armot: 50
};
Object.setPrototypeOf(Vova, Soldat);  //Передача свойств к Vova ot Soldat */





