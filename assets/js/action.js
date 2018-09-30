$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    menu: '#landing-menu',
    anchors:['splash', 'about-us', 'our-services', 'events', 'contact-us'],
		scrollOverflow: true,
		afterResponsive: function(isResponsive){},
    onLeave: function(origin, destination, direction){
  		//it won't scroll if the destination is the 3rd section
  		console.log(destination.index);
      if(destination.index>0 && destination.index<4){
        $('.colorable').css('color', '#23454c')
        $('.v-devider').css('background', '#23454c')
        $('.deanship--icon.youtube').attr('src', 'assets/img/header-footer/youtube.png')
        $('.deanship--icon.twitter').attr('src', 'assets/img/header-footer/twitter.png')
        $('.deanship--icon.instagram').attr('src', 'assets/img/header-footer/instagram.png')
        $('.deanship--icon.phone').attr('src', 'assets/img/header-footer/phon.png')
        $('.deanship--icon.email').attr('src', 'assets/img/header-footer/email.png')
        $('.deanship--icon.menu').attr('src', 'assets/img/header-footer/menu.png')
        $('.landing-logo').attr('src', 'assets/img/header-footer/logo.png')
      }
      else{
        $('.colorable').css('color', 'white')
        $('.v-devider').css('background', 'white')
        $('.deanship--icon.youtube').attr('src', 'assets/img/header-footer/youtube_white.png')
        $('.deanship--icon.twitter').attr('src', 'assets/img/header-footer/twitter_white.png')
        $('.deanship--icon.instagram').attr('src', 'assets/img/header-footer/instagram_white.png')
        $('.deanship--icon.phone').attr('src', 'assets/img/header-footer/phone_white.png')
        $('.deanship--icon.email').attr('src', 'assets/img/header-footer/email_white.png')
        $('.deanship--icon.menu').attr('src', 'assets/img/header-footer/menu_white.png')
        $('.landing-logo').attr('src', 'assets/img/header-footer/logo_white.png')


      }

      if(destination.index>0){
        $('.deanship--icon.scroll-down').css('display', 'none')
      }
      else{
        $('.deanship--icon.scroll-down').css('display', 'block')
      }

      $('.current-index').text(destination.index+1)
  	}
	}, {

  });

	$('.login-modal').modal({
		show: false
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

  console.log(fullpage_api.getActiveSection().anchor);

  $('.carousel').carousel();
  $('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
});
