"use strict";

// ������� 1, ������� S = 2 (a � b + a � � + b � �) 

let height = 2;
let length = 5;
let width = 3;
let square = 2 * (height * length + height * width + length * width); 

console.log(square);

// ������� 2 

let n = 56;
let firstN = n / 10;
firstN = parseInt(firstN);
let secondN = n % 10;
let sum = firstN + secondN;

console.log(sum);

// ������� 3 

let a = 7;
let b = 3; 
a = a + b;
b = a - b;
a = a - b;

console.log(a, b); 