let money = prompt(' Какой бюджет? ', '');
let storeName = prompt(' Название магазина: ', '');
let time = 19;

let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false
};
for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
	} else {

	}
}

if (time < 0) {
	console.log('Такого не может быть');
} else if(time > 8 && time < 20) {
 console.log('Время работать!');
} else if (time < 24) {
	console.log('уже слишком поздно');
} else {
	console.log('В сутках 24 часа!');
}

alert('Бюджет на 1 день: ' + money/30);

console.log(mainList);


