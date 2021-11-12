"use strict";

let logins = new Map();
logins.set("Iren","Moscow")
.set("Emilija","SPB")
.set("Victor","Vladivostok");


function form (map, city){
  let newArr=[];
for (let elem of map){
  if ((elem[1].toLowerCase()) === (city.toLowerCase())){
      newArr.push(elem[0]);
  }
} return(newArr);
};

console.log(form(logins,"SPB"));