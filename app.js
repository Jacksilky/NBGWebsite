var main = function() {

  var counter = 0;

  $('.dropdown-toggle').click(function(){

    $('.dropdown-menu').toggle('.dropdown-menu');

    if(dropdown-menu == true){
  
      $('body').click(function(){
        $('.dropdown-menu').toggle();



});
    }
    
  });




  $('.addBasket').click(function(){

      if($(this).hasClass('green')){
          
              $(this).removeClass('green');
              $(this).addClass('addBasket');
                $(this).attr('value', 'Add to Basket');
              counter--;
              $('.basketcounter').text(counter);
      }else{


              $(this).addClass('green');  
              $(this).attr('value', 'Remove');
              counter++;
              $('.basketcounter').addClass('badge');
              $('.basketcounter').text(counter);

      }

      if(counter == 0){
      $('.basketcounter').removeClass('badge');
      $('.basketcounter').addClass('none');
        $('.basketcounter').text('');
      }
  
    
    


  });

 var reviewCheck = 0;


}

$(document).ready(main);