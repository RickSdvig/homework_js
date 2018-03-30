/*let options = new Object();*/

/*let options = {
	  name: "test",
	  width: 1024,
	  height: 1024
}

options.bool = false;

options.colors = {
	  border: "black",
	  background: "red"
}

delete options.bool

for (let key in options){
	  console.log('Свойство' + key + " имеет значение " + options[key])
}

console.log(Object.keys(options).length);

console.log(options);*/

/*let first = [1,"second",3,4,5];
*/

/*arr.pop(); //1 2 3 4 5  удаляет последний элемент из масива

console.log(arr.pop()); // 5 

arr.push(6); // 1 2 3 4 5 6 добавляет еще один элемент

arr.shift(); // удаляет 1 элемент масива

arr.unshift(0); // добавляет элемент вначало масива
*/

/*for (let i = 0; i < arr.length; i++) {
	 alert(arr[i]);

}*/

/*first.forEach(function(item,i,arr) {
	  console.log(i + ": " + item + "массив: " + arr + ")")
});
*/

/*let first = [];
let i = prompt("", ""); // вводят : adsaf, asdf, asdf, asdf
first = i.split(","); // передает в масив эти значения через ,
let i = first.join(",") // выводит из массива значения через ,
let i = first.sort() // изменяет порядок положения элементов в масиве по алфавиту

function sortNumbers(a,b) {
	return a - b;                       
}
let i - first.sort(sortNumbers);



console.log(i);

*/
/*
let soldier = {
	health: 400,
	armor: 100

}

let jonh = {
	health: 100

}

jonh.__proto__ = soldier;

console.log(jonh);
console.log(jonh.armor);*/


let money,
    storeName,
    time,
    price;


function start() {
 price = prompt(' Цена ', '30000');
 
 while (isNaN(money) || money == "" || money == null){
 	money = prompt(' Какой бюджет? ', '500000');
 }


	storeName = prompt(' Название магазина: ', 'JolyBell').toUpperCase();
	time = 21;
}

start();

let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false,
 discount: false,
 shopItems:[],
 chooseGoods: function chooseGoods(){
	for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', 'Стройматериалы ну или еще что-то)');
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
	} else {
    --i;
	}
}
},

 workTime: function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if(time > 8 && time <20){
		console.log('Время работать!')
		mainList.open = true;
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках 24 часа!');
	}
},

 countBudget: function countBudget() {
	alert('Бюджет на 1 день: ' + money/30);
},

 discountSistem: function discountSistem(discount) {
	if ( discount = true) {
		alert('80% от цены: ' + price * 0.8);
	}
},

 hireEmployers: function hireEmployers(employers){
 for (let i = 0; i < 4; i++) {
 let worker = prompt('Ваше имя?', 'Вася');
	
	if ((typeof(worker)) === 'string' && (typeof(worker)) !== null && worker !== '' && worker.length < 50 ) {
		  console.log('Все верно!');
		  mainList.employers[i] = worker;
	} else {
    --i;
	}
}
},
 chooseShopItems: function chooseShopItems() {

 	  let items = prompt("Перечислите через запятую ваши товары", "iphone,ложка,куриная ножка");
 	  while(typeof(items) !== 'string' || typeof(items) == null || ''){
 	  	items = prompt("Перечислите через запятую ваши товары", "iphone,ложка,куриная ножка");
 	  }
 	  mainList.shopItems = items.split(",");

 	  items = prompt("Добавьте еще один товар", "Фирари");
 	  while(typeof(items) !== 'string' || typeof(items) == null || ''){
 	  	items = prompt("Добавьте еще один товар", "Фирари");
 	  }
 	  mainList.shopItems.push(items);
 	  mainList.shopItems.sort();

 	  mainList.shopItems.forEach(function(item,i,arr) {
 	  	i++;
	    alert("У нас вы можете купить: " + item);
	    console.log("У нас вы можете купить: " + i + " - " + item);
   });


 	  
 }

};

console.log('Наш магазин включает в себя: ');
for (let key in mainList){
	  console.log('Товар: ' + key)
}

mainList.chooseGoods();
mainList.countBudget();
mainList.discountSistem();
mainList.chooseShopItems();

let b = prompt('Вы сотрудник?', 'ДА');
 	if ( b !== "Да" || b !== "да" || b !== "ДА" || b !== "YES" || b !== "Yes" || b !== "yes"
 	 || b == null || b !== "yeah") {
 		b = true;
 	};

if ( b == true) {
	alert('Приступай к работе дормоет!');
	mainList.hireEmployers();
} else {
	alert('Здравствуй, гость!');
}







console.log(mainList);