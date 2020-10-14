jQuery(document).ready(function(){
  console.log('CUSTOM CAROUSEL 2');



  //Carousel for Normal window
  var total_prod2= jQuery('.totalprod-2').val();
  var itemWidth2 = $('.ccarousel-2 .mainn ul.inner li').width();
  var mainWidth2 = $('.ccarousel-2 .mainn').width();
  var totalViewableProducts2 = Math.floor(mainWidth2/itemWidth2);

  var ulwid2= total_prod2 *itemWidth2;
  ulwid2 += itemWidth2;

  jQuery('.ccarousel-2 .mainn ul.inner').css({"width":ulwid2+"px"});
  //Next Button Code
  var i=0;
  var s=1;





  //    console.log('CUSTOM CAROUSEL 2');

  //     console.log('total_prod2:' + total_prod2);

  //     console.log('itemWidth2:' + itemWidth2);

  //     console.log('mainWidth2:'+mainWidth2);

  //     console.log('totalViewableProducts2:'+totalViewableProducts2);



  jQuery('.btnR-2').click(function(){
    slideLeft();
  });

  //previous Button Code
  var z=1;
  jQuery('.btnL-2').click(function(){
    slideRight();
  });

  function slideRight(){
    // console.log("slideRight");
    var pr = ulwid2-((totalViewableProducts2+1) * itemWidth2);
    i=i+itemWidth2;

    //     console.log("i:"+i);
    //      console.log("pr:"+pr);
    if(i<=itemWidth2){
      i=-pr + (itemWidth2);
    }
    jQuery('.ccarousel-2 .inner').animate({'margin-left':i});
  }

  function slideLeft(){
    // console.log("slideLeft");
    var nxt = ulwid2-(itemWidth2*totalViewableProducts2);

    i=i-itemWidth2;

    //         console.log('i:'+i);
    //         console.log('nxt:'+nxt);
    if(i <= -nxt + itemWidth2){
      i=0;
    }

    jQuery('.ccarousel-2 .inner').animate({'margin-left':i});

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
        slideLeft();
      } else {
        /* right swipe */
        slideRight();

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