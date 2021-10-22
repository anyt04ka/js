"use strict";

/* задание 1 if
    100 - 90 правильных ответов - отлично
    89 - 60 правильных ответов - хорошо
    59 - 40 правильных ответов - удовлетворительно
    39 - 0 правильных ответов - попробуйте еще раз
*/

let count = parseInt(prompt("Введите число")); 
if (count <= 39) {
    console.log("Попробуйте еще раз");
} else if (count >= 40 && count <= 59) {
    console.log("Удовлетворительно");
} else if (count >= 60 && count <= 89) {
    console.log("Хорошо");
} else if (count >= 90 && count <= 100) {
    console.log("Отлично");    
} else if (count > 100) {
    console.log("Ошибка ввода");
} 

// задание 2 switch
let count1 = parseInt(prompt("Введите число 1")); 
let count2 = parseInt(prompt("Введите число 2")); 
let result = prompt("Введите желаемое арифметическое действие: +, -, *, /"); 


switch (result) {
    case "+":        
        console.log("Сложение = " + count1 + "+" + count2);
        
            break; 
    case "-":        
        console.log("Вычитание = " + count1 + "-" + count2);
            break; 
    case "*":            
        console.log("Умножение = " + count1 + "*" + count2);
            break; 
    case "/": 
        console.log("Деление = " + count1 + "/" + count2);
            break;  
    default:
        console.log("Ошибка ввода");   
}

// задание 3 запуталась 
/*
let plates = 12;
let fairy = 5;
while (fairy <= 5) {
    console.log("Осталось моющего средства" + fairy + " и тарелок " + plates);  
if (plates > fairy) {
    console.log("Осталось тарелок " + plates + " моющее средство закончилось");  
    }
}
*/

// задание 4

let a = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
while (a > 1) {
let b = parseInt(prompt("Введите любое число от 1 до 9"));
if (b === a) {
    console.log("Вы угадали");
    break;      
} else if (b < a) {
    console.log("Загаданное число больше");
} else if (b > a) {
    console.log("Загаданное число меньше");
} else if (b === 0) {
    console.log("Ошибка ввода");
    break;
    }
}

