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
	});

	$('.login-modal').modal({
		show: false
	});


  $('.carousel').carousel();



	console.log($('.story-section').length);
	// $('.about-page-2').on('scroll', function() {
	// 		var scrollDistance = $(this).scrollTop();
	// 		console.log(scrollDistance);
	// 		// Assign active class to nav links while scolling
	// 		$('.section').each(function(i) {
	// 				if ($(this).position().top <= scrollDistance + 100) {
	// 						$('#about-side-menu li.active').removeClass('active');
	// 						$('#about-side-menu li').eq(i).addClass('active');
	// 				}
	// 		});
	// });

	// $('#aboutpage').fullpage({
	// 	//options here
  //   menu: '#about-side-menu',
  //   anchors:['quote', 'stories', 'story1', 'story2', 'story3', 'news1', 'news2'],
	//
	// 	continuousVertical: true,
	// 	scrollHorizontally: true,
	// 	scrollOverflow: true,
	// 	scrollHorizontally: true,
	// 	slideSelector: '.fullpage-slide',
	// 	afterResponsive: function(isResponsive){},
  //   onLeave: function(origin, destination, direction){
  // 		//it won't scroll if the destination is the 3rd section
	// 		console.log(destination.index);
	//
	// 		if(destination.index > 0 && destination.index <= $('.story-section').length+1){
	// 			$('#collapseStories').addClass('show');
	// 		}
	// 		else{
	// 			$('#collapseStories').removeClass('show');
	// 		}
	//
	// 		if(destination.index > 4 && destination.index <= 4 + $('.news-section').length){
	// 			$('#collapseNews').addClass('show').children().removeClass('active');
	// 		}
	// 		else{
	// 			$('#collapseNews').removeClass('show');
	// 		}
  // 		}
	// });



	//smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).parent().removeClass('active');
      })
      $(this).parent().addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
      });
  });






});
