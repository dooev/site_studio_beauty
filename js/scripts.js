$(function(){
  
  //mmenu
  $('#my-menu').mmenu({
    extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
    navbar: { title: '<img src="img/logo.png" alt="Салон «Парикмахерская на Южной»"></a>'},
    offCanvas: { position: 'right'}
  });

  var api = $("#my-menu").data('mmenu');
  api.bind('opened', function(){
    $('.hamburger').addClass('is-active');
  }).bind("closed", function(){
    $('.hamburger').removeClass('is-active');
  });
  
  // services__carousel
  $('.services__carousel').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"> <i class="fa fa-angle-double-right">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });


});