"use strict";

// задание 1 

let animals = [
  {
     "name": "Люся",
     "age": "1 год",
     "color": "трехцветная",
     "additional_info": {"vaccinations": true, "passport": true}
  },
  {
     "name": "Том",
     "age": "3 месяца",
     "color": "белый",
     "additional_info": {"vaccinations": false, "passport": false}
  },
  {
     "name": "Макс",
     "age": 2,
     "color": "серый",
     "additional_info": {"vaccinations": false, "passport": true}
  },
  {
     "name": "Василий",
     "age": 3,
     "color": "черный",
     "additional_info": {"vaccinations": true, "passport": true}
  }
];

function pets(animals){
 let box = document.querySelector(".animal-box");
 
	for(let elem of animals){
	  let animal = document.createElement("div");
	  animal.classList.add("animal__box_cart");
	  
	  let name = document.createElement("p");
	  name.innerText = `Кличка: ${elem.name}`;
	  
	  let age = document.createElement("p");
	  age.innerText = `Возраст: ${elem.age}`;
	  
	  let color = document.createElement("p");
	  color.innerText = `Цвет: ${elem.color}`;
	  
	  let vaccinations = document.createElement("p");
	  
	  let passport = document.createElement("p");
	  
	  let info;

	  if(elem.additional_info.vaccinations){
		info='Есть'
		}else{
		info='Нет'
	  }
	  vaccinations.innerText=`Вакцинация: ${info}`;
	  
	  if(elem.additional_info.passport){
		info='Есть'
			}else{
		info='Нет'
	  }
	  
	  passport.innerText=`Паспорт: ${info}`;
	  animal.append(name, age, color, vaccinations, passport);
	  box.append(animal);
 }
}
pets(animals);

	
	
 