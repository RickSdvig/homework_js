/*window.scrollBy(0,100);
window.scrollTo(0,200);*/
window.addEventListener('DOMContentLoaded', () => {

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
 
 info.addEventListener('click', (event) => {
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
 
 sliderDots.addEventListener('click', (event) => {
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

arrows.addEventListener('click', (event) => {
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

 // timer

 let deadline = '2018-04-09';

 function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor( (t/1000) % 60 ),
      minutes = Math.floor( (t/1000/60) % 60 ),
      hours = Math.floor( (t/(1000*60*60)) );

      return {
        'total': t,
        'hours': hours,
        'minutes': minutes, //возвращает object
        'seconds': seconds
      };

 };

 function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
          let t = getTimeRemaining(endtime);
          if ( t.total <= 0 ) { 

          clearInterval(timeInterval); 

          } else { 
          hours.innerHTML = t.hours; 
          minutes.innerHTML = t.minutes; 
          seconds.innerHTML = t.seconds; 
          } 
          } 

          if (getTimeRemaining(endtime).total >= 0 ) { 
          updateClock(); 
          let timeInterval = setInterval(updateClock, 1000); 
          } 
          else { 

          hours.innerHTML = '00'; 
          minutes.innerHTML = '00'; 
          seconds.innerHTML = '00'; 
          } 

    }


 

 setClock('timer', deadline);



 // модальное окно

 let more = document.querySelector('.more'),
     overlay = document.querySelector('.overlay'),
     close = document.querySelector('.popup-close'),
     descriptionBtn = document.querySelectorAll('.description-btn');

 for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
 }


 more.addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
 });
 close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
 })


//Form

 let message = new Object();
 message.loading = "Загрузка...";
 message.success = "Спасибо! Скоро мы с вами свяжемся";
 message.failure = "Что-то пошло не так...";

 let form = document.getElementsByClassName('main-form')[0],
     input = form.getElementsByTagName('input'),
     statusMessage = document.createElement('div');
     statusMessage.classList.add('status');

     form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        request.open("POST", "server.php")

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4){
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                }
                else {
                    statusMessage.innerHTML = message.failure;
                }
            }
        }

        for (let i = 0; i < input.length ; i++) {
            input[i].value = '';
        }

     });


    // contact form
     let сontactForm = document.getElementById('form'),
         сontactInput = сontactForm.getElementsByTagName('input'),
         сontactStatusMessage = document.createElement('div');
         сontactStatusMessage.classList.add('status');
         
     сontactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        сontactForm.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        request.opent("POST", "server.php")

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4){
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                }
                else {
                    statusMessage.innerHTML = message.failure;
                }
            }
        }

        for (let i = 0; contactInput.length; i++) {
            сontactInput[i].value = '';
        }

     });
     

 });



