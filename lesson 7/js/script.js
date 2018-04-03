window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0],
	    dot = document.getElementsByClassName('dot'),
	    sliderItem = document.getElementsByClassName('slider-item'),
	    sliderDots = document.getElementsByClassName('slider-dots')[0],
	    arrowLeft = document.getElementsByClassName('arrow-left'),
	    arrowRight = document.getElementsByClassName('arrow-right'),
	    arrows = document.getElementsByClassName('arrows')[0];






 function hideTabContent(a) {
 	   for (let i = a; i < tabContent.length; i++){
 	   	 tabContent[i].classList.remove('show');
 	   	 tabContent[i].classList.add('hide');
 	   }
 }

 hideTabContent(1)

 function showTabContent(b) {
 	if( tabContent[b].classList.contains('hide')){
 		hideTabContent(0);
 		tabContent[b].classList.remove('hide');
 		tabContent[b].classList.add('show');
 	}
 }
 
 info.addEventListener('click', function(event) {
 	   let target = event.target;
 	   if(target.className == 'info-header-tab'){
 	   	 for (let i = 0; i < tab.length; i++) {
 	   	 	 if (target == tab[i]) {
 	   	 	 	showTabContent(i);
 	   	 	 	break;
 	   	 	 }
 	   	 }
 	   }
 });

 function hideSlideContent(c) {
 	   for (let i = c; i < sliderItem.length; i++){
 	   	 sliderItem[i].classList.remove('show');
 	   	 sliderItem[i].classList.add('hide');

 	   }
 }

 hideSlideContent(1)

 function showSlideContent(d) {
 	if( sliderItem[d].classList.contains('hide')){
 		hideSlideContent(0);
 		sliderItem[d].classList.remove('hide');
 		sliderItem[d].classList.add('show');
 	}
 }
 
 sliderDots.addEventListener('click', function(event) {
 	   let target = event.target;
 	   if(target.className == 'dot'){
 	   	 for (let i = 0; i < dot.length; i++) {
 	   	 	 if (target == dot[i]) {
 	   	 	 	showSlideContent(i);
 	   	 	 	for (let v = 0; v < dot.length; v++){
 	   	 	 		dot[v].classList.remove('dot-active');
 	   	 	 	}
 	   	 	 	dot[i].classList.add('dot-active');
 	   	 	 	break;
 	   	 	 }
 	   	 }
 	   }
 });

arrows.addEventListener('click', function(event) {
 	   let target = event.target;
 	   if(target.className == 'next'){
 	   	 for (let i = 0; i < dot.length; i++) {
 	   	 	 if (target == dot[i]) {
 	   	 	 	showSlideContent(i);
 	   	 	 	for (let v = 0; v < dot.length; v++){
 	   	 	 		dot[v].classList.remove('dot-active');
 	   	 	 	}
 	   	 	 	dot[i].classList.add('dot-active');
 	   	 	 	break;
 	   	 	 }
 	   	 }

 	   	 } else {

 	   	 	for (let i = 0; i < dot.length; i--) {
 	   	 	 if (target == dot[i]) {
 	   	 	 	showSlideContent(i);
 	   	 	 	for (let v = 0; v < dot.length; v++){
 	   	 	 		dot[v].classList.remove('dot-active');
 	   	 	 	}
 	   	 	 	dot[i].classList.add('dot-active');
 	   	 	 	break;
 	   	 	 }
 	   	 }

 	   	 };
 	   });
 });



