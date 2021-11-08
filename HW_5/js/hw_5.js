"use strict";


// Задание 1
let arr = [3, 90, 5, -100, 50, 0, 560, 1];
function Num(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let result = arr.sort(Num);
console.log(result);



// Задание 3
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

let newMassive = [];

for (let arr of numsArr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
    }
    console.log(numsArr);
}
for (let arr of numsArr) {
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) newMassive.push[i]
    }
    console.log(newMassive);
}