let money = prompt(' Какой бюджет? ', '');
let storeName = prompt(' Название магазина: ', '');

let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false
};

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?', '');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?', '');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?', '');

alert('Бюджет на 1 день: ' + money/30);

console.log(mainList);




