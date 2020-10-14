jQuery(document).ready(function(){
    //Carousel for Normal window
 	//console.log('CUSTOM CAROUSEL 3');
    var total_prod=jQuery('.totalprod-3').val();
    var ulwid= total_prod*238;
    jQuery('.ccarousel-3 .mainn ul.inner').css({"width":ulwid+"px"});
    //Next Button Code
    var i=0;
    var s=1;
    jQuery('.btnR-3').click(function(){
        var nxt = ulwid-952;
        i=i-238;
        // console.log(i);
        //console.log(nxt);
        if(i==-nxt){
            i=0;
        }

        jQuery('.ccarousel-3 .inner').animate({'margin-left':i});

    });
    //previous Button Code
    z=1;
    jQuery('.btnL-3').click(function(){
        var pr = ulwid-1190;
        i=i+238;
        //console.log(pr);
        // console.log(i);
        if(i==238){
            i=-pr;
        }
        jQuery('.ccarousel-3 .inner').animate({'margin-left':i});
    });

    //Code for Mobile Devices


    if (window.matchMedia('(width: 320px)').matches) {

        $('.ccarousel-3 .mainn ul').removeClass('inner').addClass('inner_320');
        $('.ccarousel-3 .btnR-3').removeClass('btnR-3').addClass('resbtn')
        var total_prod=jQuery('.ccarousel-3 .totalprod').val();
        var ulwid= total_prod*292;
        jQuery('.inner_320').css({"width":ulwid+"px"});
        var ml=0;

        jQuery('.ccarousel-3 .resbtn').click(function(){
            var nxt = ulwid-0;
            ml=ml-292;
            //  console.log(nxt);
            //   console.log(ml);
            if(ml==-nxt){
                ml=0;
            }
            jQuery('.mainn .inner_320').animate({'margin-left':ml});
        });
        var mpr=0;
        jQuery('.btnL-3').click(function(){

            var pr = ulwid-292;
            mpr=mpr+292;
            if(mpr==292){
                mpr=-pr;
            }
            jQuery('.ccarousel-3 .inner_320').animate({'margin-left':mpr});

        });
    }else if(window.matchMedia('(width: 360px)').matches) {

        $('.ccarousel-3 .mainn ul').removeClass('inner').addClass('inner_320');
        $('.ccarousel-3 .btnR-3').removeClass('btnR-3').addClass('resbtn')
        var total_prod=jQuery('.totalprod').val();
        var ulwid= total_prod*292;
        jQuery('.ccarousel-3 .inner_320').css({"width":ulwid+"px"});
        var ml=0;

        jQuery('.ccarousel-3 .resbtn').click(function(){
            var nxt = ulwid-0;
            ml=ml-292;
            // console.log(nxt);
            // console.log(ml);
            if(ml==-nxt){
                ml=0;
            }
            jQuery('.ccarousel-3 .mainn .inner_320').animate({'margin-left':ml});
        });
        var mpr=0;
        jQuery('.btnL-3').click(function(){

            var pr = ulwid-292;
            mpr=mpr+292;
            if(mpr==292){
                mpr=-pr;
            }
            jQuery('.inner_320').animate({'margin-left':mpr});

        });
    }
    else if(window.matchMedia('(width: 768px)').matches) {

            $('.ccarousel-3 .mainn ul').removeClass('inner').addClass('inner_320');
            $('.ccarousel-3 .btnR-3').removeClass('btnR-3').addClass('resbtn')
            var total_prod=jQuery('.ccarousel-3 .totalprod').val();
            var ulwid= total_prod*219;
            jQuery('.inner_320').css({"width":ulwid+"px"});
            var mll=0;

            jQuery('.ccarousel-3 .resbtn').click(function(){
                var nxt = ulwid-438;
                mll=mll-219;
                console.log(nxt);
                console.log(mll);
                if(mll==-nxt){
                    mll=0;
                }
                jQuery('.ccarousel-3 .mainn .inner_320').animate({'margin-left':mll});
            });
            var mpr=0;
            jQuery('.btnL-3').click(function(){

                var pr = ulwid-657;
                mpr=mpr+219;
                if(mpr==219){
                    mpr=-pr;
                }
                jQuery('.ccarousel-3 .inner_320').animate({'margin-left':mpr});

            });
        }
});