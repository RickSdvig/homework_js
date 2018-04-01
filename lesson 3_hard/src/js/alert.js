let str = 'урок-3-был слишком легким';
str = str.charAt(0).toUpperCase() + str.substr(1);
for (var i = 0; i < str.length; i++) {
	if (str.charAt(i) == '-') {
		str = str.replace('-', ' ');
	}
};
/*str = str.replace('легким', 'легкоо');*/

str = str.replace(' легким', '');
console.log(str);

for (var i = 0; i < str.length; i++) {
    
    if ( i == str.length - 1 || i == str.length - 2 ) {
        str = str.replace(str.charAt( i ), 'о');
    }
}



console.log(str);

let arr = [20,33,1,"Человек",2,3],
    a = 0;
for (var i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) === 'string') {
		arr[i] = arr[i].length;

	}
	let b = arr[i] **3;	
	a += b;
 
};

console.log(arr);

console.log(Math.round(Math.sqrt(a)));
