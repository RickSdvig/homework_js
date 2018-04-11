$(document).ready(function() {
  
  $('.main_btna, .main_btn, a[href*="#sheldure"]').on('click', function() {
  	 $('.overlay').animate(
    	  {
    	  	 opacity: 'toggle'

    	  }, 3000);
  	 $('.modal').slideDown(1000,'linear');
  });

  $('.close').on('click', function() {
    $('.overlay').animate(
    	  {
    	  	 opacity: 0

    	  }, 200);
    $('.modal').slideUp(200,'swing');
  });
 
});


/*
 $('.list-item:first').hover(function() {
    $(this).toggleClass('active');
  });

  $('.list-item:eq(2)').on('click', function() {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(2)').on('click', function() {
    	  $('.image:odd').animate(
    	  {
    	  	 opacity: 'toggle',
    	  	 height: 'toggle'

    	  }, 3000)
  });

 , '.main_btn', 'li:eq(2)'


  */