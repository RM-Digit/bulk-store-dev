jQuery(document).ready(function(){
    console.log('CUSTOM CAROUSEL HOME');

    //Carousel for Normal window
    var totalprod1= jQuery('.totalprod-1').val();
    console.log('totalprod-1:'+totalprod1);
    console.log(jQuery('.totalprod-1'));
    var ulwid= totalprod1*238;
    jQuery('.ccarousel ul.homeinner').css({"width":ulwid+"px"});
    //Next Button Code
    i=0;
    s=1;
    jQuery('.btn1').click(function(){  
        var nxt = ulwid-952;
        i=i-238; 
       // console.log(i);
        //console.log(nxt);
        if(i==-nxt){
           i=0;
        }

        jQuery('ul.homeinner').animate({'margin-left':i});

    });
    //previous Button Code
    z=1;
    jQuery('.btn2').click(function(){
        var pr = ulwid-1190;
        i=i+238;
        //console.log(pr);
       // console.log(i);
        if(i==238){
          i=-pr;
        }
        jQuery('ul.homeinner').animate({'margin-left':i});
    });

  //Code for Mobile Devices

 
    if (window.matchMedia('(width: 320px)').matches) {

       $('.ccarousel ul').removeClass('homeinner').addClass('home_320');
      // $('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
      var totalprod1= jQuery('.totalprod-1').val();
       var ulwid= totalprod1*218;
       jQuery('ul.home_320').css({"width":ulwid+"px"});
       var ml=0;
       
       jQuery('.btn1').click(function(){  
           var nxt = ulwid-0;
            ml=ml-218;
          //  console.log(nxt);
         //   console.log(ml);
            if(ml==-nxt){
              ml=0;
            }
            jQuery('.ccarousel .home_320').animate({'margin-left':ml});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

        var pr = ulwid-218;
        mpr=mpr+218;
        if(mpr==218){
          mpr=-pr;
        }
        jQuery('.home_320').animate({'margin-left':mpr});

        });
    }else if(window.matchMedia('(width: 360px)').matches) {

       $('.ccarousel ul').removeClass('homeinner').addClass('home_320');
      // $('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
      var totalprod1= jQuery('.totalprod-1').val();
       var ulwid= totalprod1*245;
       jQuery('ul.home_320').css({"width":ulwid+"px"});
       var ml=0;
       
       jQuery('.btn1').click(function(){  
           var nxt = ulwid-0;
            ml=ml-245;
           // console.log(nxt);
           // console.log(ml);
            if(ml==-nxt){
              ml=0;
            }
            jQuery('.ccarousel .home_320').animate({'margin-left':ml});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

        var pr = ulwid-245;
        mpr=mpr+245;
        if(mpr==245){
          mpr=-pr;
        }
        jQuery('.home_320').animate({'margin-left':mpr});

        });
    }
    else if(window.matchMedia('(width: 768px)').matches) {

       $('.ccarousel ul').removeClass('homeinner').addClass('home_320');
       //$('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
       var totalprod1= jQuery('.totalprod-1').val();
       var ulwid= totalprod1*220;
       jQuery('.home_320').css({"width":ulwid+"px"});
       var mll=0;       
       jQuery('.btn1').click(function(){  
           var nxt = ulwid-440;
            mll=mll-220;
            console.log(nxt);
            console.log(mll);
            if(mll==-nxt){
              mll=0;
            }
            jQuery('.ccarousel .home_320').animate({'margin-left':mll});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

            var pr = ulwid-660;
            mpr=mpr+220;
            if(mpr==220){
              mpr=-pr;
            }
            jQuery('.home_320').animate({'margin-left':mpr});

        });
    }
});