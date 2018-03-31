/*
let box = document.getElementById('box'), //достает элемент из html по id
    btn = document.getElementByTagName('button'), //достает элемент из html по тегам
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'); // достает 1 элемент

console.log(box);
console.log(btn[0]);

box.style.backgroundColor = 'blue'; //стилизует элементы 

let div = document.createElement('div'); //создает div

let text = document.createTextNode('бла блаа') //создает текст

div.classList.add("black"); //добавляет div'у класс black

document.body.appendChild(div); //отображает на конец страницы
document.body.insertBefore(div, circle[0]); //отображает перед circle
document.body.removeChild(circle[0]); // удаляет элемент
document.body.replaceChild(heart, circle); // заменяет второе на первое
div.innerHTML = 'Hello world!'; // выводит текст в центре блока div
div.textContent = 'Hello world!'; // выводит текст в центре блока div, НО только ТЕКСТ
*/
/*Пусть комменты останутся, пожалуйста.
Мне вспоминать материал легче так, чтобы видео не пересматривать*/
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.querySelector('li'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    title = document.querySelector('.title'),
    question = document.getElementById('prompt'),
    a

menu.replaceChild(menuItem[1], menuItem[2]);
menu.insertBefore(menuItem[2], menuItem[1]);

li.textContent = 'Пятый пункт';
li.classList.add("menu-item");
menu.appendChild(li);
column[1].removeChild(adv);
title.textContent = 'Подлинную';


a = prompt("Как вам apple?", "Если только по-фоткать");
while(typeof(a) !== 'string' || typeof(a) == null || ''){
	a = prompt("Как вам apple?", "Если только по-фоткать");
}

question.textContent = a;


document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';