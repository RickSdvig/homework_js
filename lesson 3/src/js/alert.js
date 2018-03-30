/*let calc = (a,b) => a+b

console.log(calc(4,5));
console.log(calc(4,15));*/

/*let str = "test";

console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase());  //test
*/

/*let str = "12.2";

console.log(Math.round(str)); //12 округление
console.log(parseInt(str)); //12 берет строку, превращает ее в целое число
console.log(parseFloat(str)) // 12.2 также в число, только с точкой (дробное)*/



let money,
    storeName,
    time,
    price;


function start() {
 price = prompt(' Цена ', '');
 
 while (isNaN(money) || money == "" || money == null){
 	money = prompt(' Какой бюджет? ', '');
 }


	storeName = prompt(' Название магазина: ', '').toUpperCase();
	time = 21;
}

start();

let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false,
 discount: false
};
function chooseGoods(){
	for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', 'Стройматериалы');
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
	} else {
    --i;
	}
}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if(time > 8 && time <20){
		console.log('Время работать!')
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках 24 часа!');
	}
}

	
function countBudget() {
	alert('Бюджет на 1 день: ' + money/30);
};

countBudget();

function discountSistem(discount) {
	if ( discount = true) {
		alert('80% от цены: ' + price * 0.8);
	}
};

discountSistem();

let b = prompt('Вы сотрудник?', 'ДА');
 	if ( b !== "Да" || b !== "да" || b !== "ДА" || b !== "YES" || b !== "Yes" || b !== "yes"
 	 || b == null || b !== "yeah") {
 		b = true;
 	};

if ( b == true) {
	alert('Приступай к работе дормоет!');
	hireEmployers();
} else {
	alert('Здравствуй, гость!');
}

function hireEmployers(employers){
 for (let i = 0; i < 4; i++) {
 let worker = prompt('Ваше имя?', 'Вася');
	
	if ((typeof(worker)) === 'string' && (typeof(worker)) !== null && worker !== '' && worker.length < 50 ) {
		  console.log('Все верно!');
		  mainList.employers[i] = worker;
	} else {
    --i;
	}
}
}





console.log(mainList);