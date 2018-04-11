$(document).ready(function() {
  
  $('.main_btna, .main_btn, a[href*="#sheldure"]').on('click', function() {
  	 $('.overlay').animate(
    	  {
    	  	 opacity: 'toggle'

    	  }, 2000);
  	 $('.modal').animate(
        {
           opacity: 'toggle',
           height: 'toggle'

        }, 1000);
  });

  $('.close').on('click', function() {
    $('.overlay').animate(
    	  {  
    	  	 opacity: 0

    	  }, 200);
    $('.modal').animate(
        {
           opacity: 0,
           height: 'toggle'

        }, 300);
  });

  //модальное окно после отправки формы
          $('.form').submit(function(event) {
            event.preventDefault();
            $.ajax({
              url: "mailer/smart.php",
              type: "POST",
              data: $(this).serialize()
            }).done(function() {
              $(this).find("input").val("");
              alert("Сообщение успешно отправлено");
              $("#form").trigger("reset");
            });
            return false;           
            
          });
 
});


