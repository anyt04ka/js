"use strict";

// задание 1 
  
  let nums = [
     [23, 56, 75, -90, 123],
     [17, 0, -6429, -122],
     [19, 86, 55, -3, 900, 0, 0],
     [4, 9, -2]
  ];
  
  let sum = 0;
  
	for (let i = 0; i < nums.length; i++) {
		for (let a = 0; a < nums.length; a++) {
			nums[i][a] += 10;
			sum += nums[i][a];
}
}
console.log(nums); 
console.log(sum); 

// задание 2 
/*
	let nums = [19, 86, 55, 3, 300, 0, 150];
	let max = 0;
	let min = 0;
	for (let i = 0; i < nums.length; i++) {
		
}
*/

// задание 3

	let arr = [19, 86, 55, -3, 300, 0, -10];
	let arr2 = [];
	
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < 0) {
			arr2.push(arr[i]);
			arr.splice(i, 3)
		}
	}
	
console.log(arr); 
console.log(arr2); 

// задание 4

	let login = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
	let userLogin = prompt("Введите логин");
	
	while (login.includes(userLogin)) {
		userLogin = prompt("Неверный логин. Введите еще раз");	
	}
	
console.log(login); 	
console.log(userLogin);	
	
// задание 5

	let login2 = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
	let userLogin2 = prompt("Введите логин");
	
	while (login2.includes(userLogin2)) {
		userLogin2 = prompt("Неверный логин. Введите еще раз");	
	}
	
login2.push(userLogin2);
console.log(login2); 	
	
	
	