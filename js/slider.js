$(document).ready(function(){
  $('.header-slider').slick({
   infinite: true,
   autoplay: true,
   autoplaySpeed: 4000
 
  });
});
				
$(document).ready(function(){

 $('.slider-our-project').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,

       responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    },


    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },



    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1
      }
    }




  ]

  });

});

























