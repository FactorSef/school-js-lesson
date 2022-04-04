// Определение переменных

/**
 * Устаревшее ключевое слово `var`
 * Область видимости ограничено функцией
 */
var variable1 = '';
/**
 * Новое ключевое слово `let`
 * Имеет блочную область видимости
 */
let variable2 = '';
/**
 * Новое ключевое слово `const`
 * Имеет блочную область видимости
 * Запрещает переопределять переменные
 */
const variable3 = '';


// Типы данных ------------------------------------------------

// Примитивы типы

// Строка
let str = 'Hello, world!';
// Число
let num1 = 1; // Целочисленное
let num2 = 1.2; // С плавающей запятой
// Логические
let boolean = true;
// Объекты
let obj = { prop: 'value', prop2: 123 };
// Массивы
let arr = [1, 'str', { prop: null }, [1, 2, 3]];
// Регулярные выражения
let reg = /^\w$/;

// Объектные типы

// Строка
let strObj = new String('Hello, world!');
// Число
let numObj = new Number(1);
// Логические
let booleanObj = new Boolean(false);
// Объекты
let objObj = new Object({ prop: 'value', prop2: 123 });
// Массивы
let arrObj = new Object([1, 'str', { prop: null }, [1, 2, 3]]);
// Регулярные выражения
let regObj = new RegExp('^\w$');


// Функции ------------------------------------------------

/**
 * Функция
 * Имеет контекст this
 */
function testFn() {
    this.a = 10;

    testFn2.call(this);
}

function testFn2() {
    console.log(this.a); // 10
}

function testFn3() {
    this.a = 10;

    function testFn() {
        this.b = 20;
        console.log(this.a) // => undefinded
        console.log(this.b) // => 20
    }
}

/**
 * Стрелочная функция
 * Не имеет контекста this
 */
const arrowFn = () => {
    this.a = 10;

    console.log(this.a) // => undefinded
}

function arrowFn2() {
    this.a = 10;

    const arrowFn2 = () => {
        console.log(this.a) // => 10
    }
}


// Rest/spread оператор ------------------------------------------------

// Деструктуризация объекта
const testObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

const {
    a,
    b: bVar, // Переименование при деструктуризация
    e = 10, // Определение значения по умолчанию
    ...restObj // Объединение невыбранных переменных в объект с помощью rest/spread оператора
} = testObj;

console.log(a, bVar, e, restObj) // => 1, 2, 10, { c: 3, d: 4 }

// Деструктуризация массива

const testArr = [1, 'str', null, true];

const [
    first,
    second,
    third = 100,
    ...restArr
] = testArr;

console.log(first, second, third, restArr) // => 1, 'str', 100, [true]

// Передача параметров в функцию

const params = [1, 2, 3];

function testSpread(a, b, c) {
    console.log(a, b, c); // => 1, 2, 3
}
testSpread(...params);

function testSpread2(...args) {
    console.log(args); // => [1, 2, 3]
    console.log(...args); // => 1, 2, 3
}
testSpread2(...params)


// Классы ------------------------------------------------

// Описание структуры точки
class Point2D {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    getPoint() {
        return { x: this.x, y: this.y }
    }
}

const point2d = new Point2D(10, 20);
point2d.getPoint() // => { x: 10, y: 20 }

// Наследование
class Point3D extends Point2D {
    constructor (x, y, z) {
        super(x, y); // Ключевое слово, позволяющее выполнить метод родителя
        this.z = z;
    }

    getPoint() {
        const res = super.getPoint();
        return { ...res, z: this.z }
    }
}
const point3d = new Point3D(1, 2, 3);
point3d.getPoint() // => { x: 1, y:2, z: 3 }
