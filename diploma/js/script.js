window.addEventListener('DOMContentLoaded', () => {

	//modal
 let custom = document.getElementsByClassName('custom')[0],
     popupBtn = document.getElementById('popup-btn'),
     overlay = document.getElementsByClassName('overlay')[0],
     main = document.getElementsByClassName('main')[0],
     customInfo = document.getElementsByClassName('custom-info')[0],
     customChar = document.getElementsByClassName('custom-char')[0],
     customStyle = document.getElementsByClassName('custom-style')[0];



 //none и flex / block для блоков после нажатия кнопки 'создать'
 popupBtn.addEventListener('click', function() {
     overlay.style.display = 'none';
     main.style.display = 'none';
     custom.style.display = 'flex';
     customInfo.style.display = 'block';
     customChar.style.display = 'block';
     customStyle.style.display = 'block';
     newCard.style.display = 'block';
 });


 //new card
 let readyBtn = document.getElementById('ready'),
     name = document.getElementById('name'),
     age = document.getElementById('age'),
     male = document.getElementById('male'),
     female = document.getElementById('female'),
     views = document.getElementById('select'),
     bio = document.getElementById('bio'),
     sexName = 'Мужской',
     cardPhoto = document.getElementsByClassName('photo-2'),     
     cardsItem = document.getElementsByClassName('main-cards-item'),
     cardName = document.getElementsByClassName('name'),
     cardAge = document.getElementsByClassName('age'),
     cardSex = document.getElementsByClassName('sex'),
     cardViews = document.getElementsByClassName('views'),
     cardBio = document.getElementsByClassName('bio');

 //убираю с самого начала новую карточку
 cardsItem[1].classList.add('newCard-item');
 let newCard = document.querySelector('.newCard-item');


 //копия второй карточки и вставка этой копии
 cardsItemClone = cardsItem[1].cloneNode(true);
 cardsItem[1].parentNode.insertBefore(cardsItemClone, cardsItem.nextSibling);
 newCard.style.display = 'none';
 
 //новые классы к блокам
 cardName[1].classList.add('card-name');
 cardAge[1].classList.add('card-age');
 cardViews[1].classList.add('card-views');  
 cardBio[1].classList.add('card-bio');
 cardSex[1].classList.add('card-sex');
 cardPhoto[0].classList.add('card-photo');

 let newName = document.querySelector('.card-name'),
     newAge = document.querySelector('.card-age'),
     newViews = document.querySelector('.card-views'),
     newBio = document.querySelector('.card-bio'),
     newSex = document.querySelector('.card-sex'),
     newPhoto = document.querySelector('.card-photo');




 //проверка инпутов на вводимые символы


 age.onkeypress = function(e) {
   e = e || event;

   if (e.ctrlKey || e.altKey || e.metaKey) return;

   var chr = getChar(e);

   if (chr == null) return;

   if (chr < '0' || chr > '9') {
     return false;
   }
 };

 function getChar(event) {
       if (event.which == null) {
         if (event.keyCode < 32) return null;
         return String.fromCharCode(event.keyCode) // IE
       }

       if (event.which != 0 && event.charCode != 0) {
         if (event.which < 32) return null;
         return String.fromCharCode(event.which) // остальные
       }

       return null; // специальная клавиша
     }


 name.addEventListener('keyup', function(event) { 
 this.value = this.value.replace(/[^а-яА-ЯЁё ]/i, ''); 
 });
 

 

 





 
 // выбор пола
 function sex() {

     let skin = document.getElementsByClassName('person-easy')[0];
         preview = document.getElementsByClassName('preview')[0];

     // начальный скин кастомизации
     skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
     skin.style.backgroundSize = '70%';
     

     //начальное фото в слайдере 
     preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
     preview.style.backgroundSize = '60%';

      //слайдер
      function slider() {

          let prev = document.getElementsByClassName('prev')[0],
              next = document.getElementsByClassName('next')[0],
              slideIndex = 1,
              slides = 4;

          next.addEventListener('click', function() {
                    slideIndex = slideIndex + 1;
               


               if(slideIndex == 1) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 2) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/2.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/2.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/2.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 3) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/3.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/3.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/3.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 4) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex > 4) {
                    slideIndex = 1;
                    preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               }
          });

          prev.addEventListener('click', function() {
               slideIndex = slideIndex - 1;

               if(slideIndex == 1) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 2) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/2.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/2.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/2.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 3) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/3.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/3.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/3.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex == 4) {
                    preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               };

               if(slideIndex < 1) {
                    slideIndex = 4;
                    preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                    preview.style.backgroundSize = '60%';
                    newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    newPhoto.style.backgroundSize = 'contain';
                    skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                    skin.style.backgroundSize = '70%';
               }
          });
      }

     slider();




     male.addEventListener('click', function() {

         //смена фото на кастомизации
         skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
         skin.style.backgroundSize = '70%';
         

         //замена фото в слайдере 
         preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
         preview.style.backgroundSize = '60%';




         sexName = 'Мужской';

          // мужской cлайдер
          function slider() {

              let prev = document.getElementsByClassName('prev')[0],
                  next = document.getElementsByClassName('next')[0],
                  slideIndex = 1,
                  slides = 4;

              next.addEventListener('click', function() {
                        slideIndex = slideIndex + 1;
                   


                   if(slideIndex == 1) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 2) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/2.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/2.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/2.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 3) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/3.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/3.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/3.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 4) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex > 4) {
                        slideIndex = 1;
                        preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   }
              });

              prev.addEventListener('click', function() {
                   slideIndex = slideIndex - 1;

                   if(slideIndex == 1) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 2) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/2.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/2.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/2.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 3) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/3.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/3.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/3.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 4) {
                        preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex < 1) {
                        slideIndex = 4;
                        preview.style.background = '#f2f2f2 url(img/slider/man/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/man/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   }
              });
          }

         slider();
     });

     female.addEventListener('click', function() {

          //смена фото на кастомизации
         skin.style.background = 'url(img/slider/woman/1.png) center no-repeat';
         skin.style.backgroundSize = '70%';
         

         //смена фото в слайдере 
         preview.style.background = '#f2f2f2 url(img/slider/woman/1.png) center no-repeat';
         preview.style.backgroundSize = '60%';


         sexName = 'Женский';
          
          // женский слайдер
          function slider() {

              let prev = document.getElementsByClassName('prev')[0],
                  next = document.getElementsByClassName('next')[0],
                  slideIndex = 1,
                  slides = 4;


              next.addEventListener('click', function() {
                        slideIndex = slideIndex + 1;
                   


                   if(slideIndex == 1) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 2) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/2.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/2.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/2.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 3) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/3.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/3.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/3.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 4) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex > 4) {
                        slideIndex = 1;
                        preview.style.background = '#f2f2f2 url(img/slider/woman/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   }
              });

              prev.addEventListener('click', function() {
                   slideIndex = slideIndex - 1;

                   if(slideIndex == 1) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/1.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/1.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 2) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/2.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/2.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/2.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 3) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/3.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/3.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/3.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex == 4) {
                        preview.style.background = '#f2f2f2 url(img/slider/woman/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   };

                   if(slideIndex < 1) {
                        slideIndex = 4;
                        preview.style.background = '#f2f2f2 url(img/slider/woman/4.png) center no-repeat';
                        preview.style.backgroundSize = '60%';
                        newPhoto.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        newPhoto.style.backgroundSize = 'contain';
                        skin.style.background = 'url(img/slider/woman/4.png) center no-repeat';
                        skin.style.backgroundSize = '70%';
                   }
              });
          }

         slider();
     });
 }

 sex();

 






 

 

  
 
 readyBtn.addEventListener('click', function btnClick() {

     // проверка вводимых данных
     function validate() {


         if (name.value == '' || typeof(name.value) !== 'string' || 
          age.value == '' || typeof(age.value) !== 'string' ||
          bio.value == '' || typeof(bio.value) !== 'string') {

             name.style.border = '1.5px dashed red';
             age.style.border = '1.5px dashed red';
             bio.style.border = '1.5px dashed red';


             return btnClick();

         };
          let inputLength = bio.value.length;
          if (inputLength < 30) {
               bio.style.border = '1.5px dashed red';
               return btnClick();
          }

          /*if( name.value.match(/[^a-zA-Zа-яА-Я0-9]/g)) {
               name.style.border = '1.5px dashed red';
               return btnClick();
          };*/




     };

     validate();

     

     

     let resultCount = document.getElementsByClassName('result-count'),
         progressBar = document.getElementsByClassName('progress-bar'),
         fairVotingBtn = document.getElementById('voting'),
         crime = document.getElementById('crime');


     bio.style.display = 'inline';


     main.style.display = 'block';
     custom.style.display = 'none';

     newName.innerHTML = name.value;
     newAge.innerHTML = age.value + ' лет';
     
     newSex.innerHTML = sexName;
     newViews.innerHTML = views.value;
     newBio.innerHTML = bio.value;





     //обнуление результатов

     function goToZiro() {

          resultCount[0].innerHTML = '0%';
          resultCount[1].innerHTML = '0%';
          resultCount[2].innerHTML = '0%';

          progressBar[0].style.height = '0%';
          progressBar[1].style.height = '0%';
          progressBar[2].style.height = '0%';



     }

     goToZiro();

     //честное голосование
     function fairVoting() {

         fairVotingBtn.addEventListener('click', function() {
              resultCount[0].innerHTML = '20%';
              resultCount[1].innerHTML = '30%';
              resultCount[2].innerHTML = '50%';

              progressBar[0].style.height = '20%';
              progressBar[1].style.height = '30%';
              progressBar[2].style.height = '50%';
         });
     };


     fairVoting();


     // вмешаться в выборы
     function crimed() {

          crime.addEventListener('click', function(){
               resultCount[0].innerHTML = '7,5%';
               resultCount[1].innerHTML = '55%';
               resultCount[2].innerHTML = '37,5%';

               progressBar[0].style.height = '7,5%';
               progressBar[1].style.height = '55%';
               progressBar[2].style.height = '37,5%';
          });
     };

     crimed();



     

     
      
 });




 // сбросить результаты)

 let resetBtn = document.getElementById('reset');

 resetBtn.addEventListener('click', function() {
     main.style.display = 'none';
     custom.style.display = 'flex';

     name.value = null;
     age.value = null;
     bio.value = null;

 });


 





 


});

 