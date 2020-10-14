$(document).ready(function() {
  console.log('CUSTOM CAROUSEL');
  //238
  if($( document ).width() < 760 ){
    $('.item-display-box-wrapper').each(function(){
      $(this).css('width', $( document ).width() - 140);
    });
  }

  //Carousel for Normal window

  var total_prod1 = jQuery('.totalprod').val();

  var itemWidth1 = $('.ccarousel .mainn ul.inner li').width();

  var ulwid1 = total_prod1 * itemWidth1;
  jQuery('.ccarousel .mainn ul.inner').css({"width": ulwid1 + "px"});
  var mainWidth1 = $('.ccarousel .mainn').width();

  var totalViewableProducts = Math.floor(mainWidth1/itemWidth1);

  //Next Button Code
  var i = 0;
  var s = 1;
  jQuery('.btn1').click(function () {
    slideRight();
  });
  //previous Button Code
  var z = 1;
  jQuery('.btn2').click(function () {
    slideLeft();
  });




  function slideRight(){
    var nxt = ulwid1 - ((totalViewableProducts + 1) * itemWidth1);
    i       = i - itemWidth1;

    if (i <= -nxt) {
      i = 0;
    }

    jQuery('.ccarousel .inner').animate({'margin-left': i});

  }

  function slideLeft(){
    var pr = ulwid1 - (itemWidth1*totalViewableProducts);
    i      = i + itemWidth1;

    if (i == itemWidth1) {
      i = -pr + (2*itemWidth1);
    }
  
    jQuery('.ccarousel .inner').animate({'margin-left': i});
  }








  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;                                                        
  var yDown = null;

  function getTouches(evt) {
    return evt.touches ||             // browser API
      evt.originalEvent.touches; // jQuery
  }                                                     

  function handleTouchStart(evt) {                                         
    xDown = getTouches(evt)[0].clientX;                                      
    yDown = getTouches(evt)[0].clientY;                                      
  };                                                

  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
      return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    console.log(xDiff);

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
        /* left swipe */ 
        slideRight();
      } else {
        /* right swipe */
        slideLeft();

      }                       
    } else {
      if ( yDiff > 0 ) {
        /* up swipe */ 
      } else { 
        /* down swipe */
      }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
  };
});


