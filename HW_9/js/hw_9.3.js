"use strict"

let prises = {
  headphones: "Наушники",
  book: "Книга",
  postcard: "Открытка"
};


function generateField(n = 3){
  if (n < 3){
    n = 3;
  }

 let arrRand = [];
 let obj = [];
 obj = Object.values(prises);
 console.log(obj)
 
 for (let i = 0; i < 3; i++){
   let numRand = Math.floor(Math.random()*(n*n));
   if (arrRand.includes(numRand)){
    i--;
   }else{
   arrRand.push(numRand);
   }
 }
 console.log(arrRand);
 
  let count = 0; 
  let box = 0;
  let createdfield = document.querySelector(".generate-field");
  let table = document.createElement("table");
   table.classList.add("created__table");
   table.style.cssText = "border: 1px solid #000; width: 30%; text-align: center; margin: 2%; padding: 1%; background-color: yellow;";
    for (let j = 0; j < n; j++){
     let strock;
     let row = table.insertRow();
    for (let i = 0; i < n; i++){
     strock = row.insertCell();
     if (count == arrRand[0] || count == arrRand[1] || count == arrRand[2]){
     strock.innerText = `${obj[box]}`;
     box++;
    }
    count++;
  }
}
  createdfield.append(table);
}

generateField(9);