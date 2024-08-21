
jQuery(document).ready(function(){
  jQuery('.owl-carousel').owlCarousel({
    'items':1,
    'loop' : true,
    'autoplay' : true,
    'autoplayTimeout':3000,
    'smartSpeed': 2500,
  });

  jQuery(".bars").click(function(){

    jQuery(this).find(jQuery(".fa-solid")).toggleClass('fa-xmark');
  });


    jQuery(".bars").click(function(){

    jQuery(".sidebar").toggle(1000);
    })


});