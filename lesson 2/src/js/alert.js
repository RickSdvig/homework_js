/*  while ( let i < 5) {
	let a = prompt('Какой тип товаров будем продавать?', '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a !== '' && a.length < 50 ) {
		  console.log('Все верно!');
		  i++;
		  mainList.shopGoods[i] = a;
	} else {
    --i;
	}
}  */


/* do {
	let a = prompt('Какой тип товаров будем продавать?', '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a !== '' && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
	} else {
    --i;
	}
}
 while ( let i < 5);
*/




let money = prompt(' Какой бюджет? ', '');
let storeName = prompt(' Название магазина: ', '');

let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false
};

for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a !== '' && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
	} else {
    --i;
	}
}

alert('Бюджет на 1 день: ' + money/30);






console.log(mainList);