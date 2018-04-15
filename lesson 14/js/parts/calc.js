function calc() {
	//calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personsSum = 0,
	    daysSum = 0,
	    total = 0;


	    totalValue.innerHTML = 0;



	    persons.addEventListener('change', function() {
	        personsSum = +this.value;

	        if (personsSum < 0) {
	            personsSum = personsSum * -1;
	            
	            persons.value = personsSum;
	            
	        }

	        
	        


	        total = (daysSum + personsSum)*4000;
	        totalValue.innerHTML = total;
	        if (restDays.value == ''){
	            totalValue.innerHTML = 0;
	        } else {
	            totalValue.innerHTML = total;
	        }
	    });

	    restDays.addEventListener('change', function() {
	       daysSum = +this.value;

	       if (daysSum < 0) {
	            daysSum = daysSum * -1;
	            restDays.value = daysSum;
	        }


	       total = (daysSum + personsSum)*4000;
	       totalValue.innerHTML = total;

	       if (persons.value == ''){
	           totalValue.innerHTML = 0;
	       } else {
	        totalValue.innerHTML = total;
	       }
	    });

	    place.addEventListener('change', function(){
	        if (restDays.value == '' || persons.value == '') {
	            totalValue.innerHTML = 0;
	        } else {
	            let a = total;
	            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
	        }
	    })

}

module.exports = calc;