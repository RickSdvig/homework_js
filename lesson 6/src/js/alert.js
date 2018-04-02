



let open = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],

    name = document.getElementsByClassName('name'),
    budget = document.getElementsByClassName('budget'),
    goods = document.getElementsByClassName('goods'),
    items = document.getElementsByClassName('items'),
    employers = document.getElementsByClassName('employers'),
    discount = document.getElementsByClassName('discount'),
    isopen = document.getElementsByClassName('isopen'),

    goodsBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    employersBtn = document.getElementsByTagName('button')[3],
    goodsItem = document.getElementsByClassName('goods-item'),
    btn = document.getElementsByTagName('button'),
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudget = document.querySelector('.count-budget-value'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let money,
    storeName,
    price;

open.addEventListener('click', () => {
 
 while (isNaN(money) || money == "" || money == null){
 	money = prompt(' Какой бюджет? ', '500000');
 };

 budgetValue.textContent = money;

	nameValue.textContent = prompt('Название магазина: ', 'JolyBell').toUpperCase();
});

goodsBtn.addEventListener('click', () => {
 for (let i = 0; i < goodsItem.length; i++) {
	let a = goodsItem[i].value
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50 ) {
		  console.log('Все верно!');
		  mainList.shopGoods[i] = a;
		  goodsValue.textContent = mainList.shopGoods;
	} else {
    --i;
	}
}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

   if (isNaN(items) && items !== '') {
	   mainList.shopItems = items.split(",");
 	  mainList.shopItems.sort();

 	  itemsValue.textContent = mainList.shopItems;
    };
 	  
});

timeValue.addEventListener('change', () => {
 let time = timeValue.value;


	if (time < 0) {
		  console.log('Такого не может быть!');
		  mainList.open = false;
	} else if(time > 8 && time <20){
		   console.log('Время работать!')
		   mainList.open = true;
	  } else if (time < 24) {
		       console.log('Уже слишком поздно!');
		       mainList.open = false;
	     } else {
		         console.log('В сутках 24 часа!');
		          mainList.open = false;
	        }

	if (mainList.open == true){
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}

});

budgetBtn.addEventListener('click', () => {
 countBudget.value = Math.round(money / 30);

});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
 let worker = hireEmployersItem[i].value;
 mainList.employers[i] = worker;

 employersValue.textContent += mainList.employers[i] + ', ';
  }
});


let mainList = {
	budget : money,
	name : storeName,
 shopGoods : [],
 employers : {},
 open : false,
 discount: false,
 shopItems:[],

 discountSistem: function discountSistem(discount) {
	if ( discount = true) {
		alert('80% от цены: ' + price * 0.8);
	}
}

};

console.log('Наш магазин включает в себя: ');
for (let key in mainList){
	  console.log('Товар: ' + key);
};







console.log(mainList);



