"use strict";


// 1 задание
let goods = {
    piano: {
      title: "Пианино",
      price: 3000,
      count: 25
    },
    guitar: {
      title: "Гитара",
      price: 1200,
      count: 40
    },
    drum: {
      title: "Барабаны",
      price: 2700,
      count: 12
    },
    flute: {
      title: "Флейта",
      price: 900,
      count: 50
    },
    harp: {
      title: "Арфа",
      price: 3400,
      count: 5
    }
  };
  
  function musicInts(obj,from,to){
    let newObj={};
  if(typeof(from)=="number" && typeof(to)=="number" && typeof(obj)=="object"){
  for (let elem in obj) {
   if(obj[elem].price>from && obj[elem].price<to){
      newObj[elem]=obj[elem];
    }
   
  }
  return newObj;
  } return false
  };

  console.log(musicInts(goods,3000,54));



// 3 задание

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'}, 
    { author: 'Толстой', title: 'Война и мир'}, 
    { author: 'Лермонтов', title: 'Тамань'}, 
    { author: 'Гончаров', title: 'Обломов'}, 
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
    { author: 'Пушкин', title: 'Руслан и Людмила'}, 
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
  ];
  
  function Litres(obj,autor){
  let newBooks=[];
  for(let elem of obj){
    if(elem.author==autor){
      newBooks.push(elem)
    }
  }
  return newBooks;
  };
  
  console.log(Litres(books,"Лермонтов"));