$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay : true,
        cssEase: 'linear',
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        initialSlide: 2
    });
  });