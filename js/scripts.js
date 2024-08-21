
jQuery(document).ready(function(){
  jQuery('.owl-carousel').owlCarousel({
    'items':1,
    'loop' : true,
    'autoplay' : true,
    'autoplayTimeout':5000,
    'smartSpeed': 4500,
  });

/*  $(".card").mouseover(function(){
    $(".card-body").css({"background-color" : "black", "color" : "white"});
  });
    $(".card").mouseout(function(){
    $(".card-body").css({"background-color" : "white", "color" : "black"});
  });*/


  jQuery(window).scroll(function(){

    var winHeight = jQuery(window).scrollTop();

    if (winHeight>500) {
      jQuery(".header").css({'position' : 'fixed'});
    }
    else{
      jQuery(".header").removeAttr('style');
    }



  })

   jQuery(window).scroll(function(){
      var winHeight = jQuery(window).scrollTop();
      if (winHeight>20 && winHeight<500) {
      jQuery(".bars").css({'position' : 'absolute'});
     }
    else if (winHeight>500) {
       jQuery(".bars").removeAttr('style');
    }
  })



  jQuery(".bars").click(function(){

    jQuery(this).find(jQuery(".fa-solid")).toggleClass('fa-xmark');
  });


    jQuery(".bars").click(function(){

    jQuery(".sidebar").toggle(1000);

    return false
    })


});