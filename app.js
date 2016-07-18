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

    var basketProduct = $(this).siblings('.PTitle').text();


      if($(this).hasClass('green')){
          
              $(this).removeClass('green');
              $(this).addClass('addBasket');
                $(this).attr('value', 'Add to Basket');
              counter--;
              $('.basketcounter').text(counter);
              $('li').find(basketProduct).remove();
      }else{


              $(this).addClass('green');  
              $(this).attr('value', 'Remove');
              counter++;
              $('.basketcounter').addClass('badge');
              $('.basketcounter').text(counter);
              $('<li>').text(basketProduct).appendTo('.BasketBar');

      }

      if(counter == 0){
      $('.basketcounter').removeClass('badge');
      $('.basketcounter').addClass('none');
        $('.basketcounter').text('');
      }
  
    
    


  });

 var reviewCheck = 0;

$('.postbutton').click(function() {

  var postLength = $('.status-box').val().length;

     if(reviewCheck == 0 && postLength > 0){

      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('Thankyou for your review');
      reviewCheck++;

        }

        else if (reviewCheck > 0){

            alert("Sorry, only one review per customer");

        } else if (postLength == 0) {


            alert("Please enter a review before pressing the post button.");

        }

      });


 $('.none').click(function() {
    $('.menu').animate({right: "0px"}, 200);

  });

   $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);

  
  });

}

$(document).ready(main);