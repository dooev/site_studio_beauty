$(function(){
  
  //mmenu START
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
  //mmenu END
   
  // services__carousel START
  $('.services__carousel').on('initialized.owl.carousel', function(){
      setTimeout(function(){
        servicesCarousel()
      }, 100);
  })
  $('.services__carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
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

  function servicesCarousel() {
    $('.services__carousel').each(function () {
      var ths = $(this),
          thsHei = ths.find('.services__item-text').outerHeight();
          ths.find('.services__item-img').css('min-height', thsHei);
    })
  };

  // ресайз
  function onResize() {
      // equalheights для одинаковой высоты контента
    $('.services__item-text').equalHeights();
  } onResize();
  // services__carousel END
// select выберите услугу  START
$('select').selectize({
});
// select выберите услугу  END

	//E-mail Ajax Send START
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
        $(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	//E-mail Ajax Send END


	//s-review owl-carousel START
  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });
	//s-review owl-carousel END

});