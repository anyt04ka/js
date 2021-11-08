"use strict";


// Задание 1

function Count (count) {
    if ((count === 1) || (count > 20 && (count % 10) === 1)) return `${count} товар`;
    if ((count % 10) > 1 && (count % 10) <= 4) return `${count} товара`;
    else return `${count} товаров`;
}
console.log(Count(parseInt(prompt("Введите кол-во товаров"))));


// Задание 2
let array = [], a, b, c;
function range (min, max, step = 1) {
    do {
        array.push(min);
        min = min + step;
    } while (min <= max);
}
a = parseInt(prompt("Введите первое число"));
b = parseInt(prompt("Введите второе число"));
c = parseInt(prompt("Введите шаг"));
range(a, b, c);
console.log(array);


// Задание 3.1
function checkType (input) {
    if (typeof(input) === "number") return console.log("Переменная является числом");
    if (typeof(input) === "string") return console.log("Переменная является строкой");
    if (typeof(input) === "boolean") return console.log("Переменная является логической");
    return console.log("Переменная не определена");
}

a = 25;
checkType(a);

// Задание 3.2
function checkInput (input) {
    if (typeof(input) === "undefined") return console.log("Значение переменной не было присвоено");
}
checkInput();

// Задание 3.3
function checkIfNum (input) {
    if (isNaN(input)) return console.log("Значение переменной не является числом");
    return console.log("Значение переменной является числом");
}
checkIfNum('sdbgw');