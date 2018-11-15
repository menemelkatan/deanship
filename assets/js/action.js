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
  $('.deanship-right-nav a[href^="#"]').on('click', function (e) {
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

	//show change password form
	$('.change-password-btn').on('click', function(){
		$('.password-settings').css('display', 'none');
		$('.change-password').css('display', 'block');
	})

	$.fn.datepicker;

	//datepicker
	$('.normal-datepicker').datepicker({
		format: 'dd-mm-yyyy',
		inline: true,
		container: '.dateSelector',
		startDate: new Date()
	});

	//time slider
	$(".time-slider")

	    .slider({
	        min: 0,
	        max: 24,
	        range: true,
	        values: [22, 23]
	    })

	    .slider("pips", {
	        rest: "label",
					suffix: ':00'
	    })
	    .slider("float");

	//show space reservation section
	$('.reserve-space-btn, .new-space-btn').on('click', function(){
		$('.space-reservation-section').css('display', 'block')
	});

	//add new period to the reservation
	$('.confirm-new-period').on('click', function(){

		$('<div class="row space-reservation-form-content new"></div>').insertAfter('.space-reservation-form-content').last().html($('.space-reservation-form-content').eq(0).html()+'<span class="cancel-reservation-btn">X</span>');

		$('.space-reservation-form-content.new .activity-name-input').remove();
		$('.space-reservation-form-content.new .time-slider').removeClass('time-slider').addClass('new-time-slider');
		$('.space-reservation-form-content.new .normal-datepicker').parent('.dateSelector').removeClass('dateSelector').addClass('new-dateSelector');
		$('.space-reservation-form-content.new .normal-datepicker').removeClass('normal-datepicker').addClass('new-datepicker');

		//time slider
		$(".new-time-slider")

		    .slider({
		        min: 0,
		        max: 24,
		        range: true,
		        values: [22, 23]
		    })

		    .slider("pips", {
		        rest: "label",
						suffix: ':00'
		    })
		    .slider("float");


				$('.new-datepicker').datepicker({
					format: 'dd-mm-yyyy',
					inline: true,
					container: '.new-dateSelector',
					startDate: new Date()
				});

				$('.new-dateSelector').children('.datepicker-inline')[0].remove();
		//cancel the new period/room button
		$('.cancel-reservation-btn').each(function(i){
			$('.cancel-reservation-btn').eq(i).on('click', function(){
				$(this).parent().remove();
			});
		});
	});

	//show other spaces section
	$('.add-new-space-btn').on('click', function(){
		$('.other-spaces-section').css('display', 'block');
	});

	//reserve other spaces section
	$('.new-space-btn').each(function(i){
		$('.new-space-btn').eq(i).on('click', function(){
			$('.other-spaces-section').css('display', 'none');
			$('<div class="row space-reservation-form-content new"></div>').insertAfter('.space-reservation-form-content').last().html($('.space-reservation-form-content').eq(0).html()+'<span class="cancel-reservation-btn">X</span>').prepend('<div class="col-12"><h2 class="line-top-title">'+$('.new-space-btn').eq(i).children('.another-single-space-details').children('.line-top-title').html()+'</h2></div>');

			$('.space-reservation-form-content.new .activity-name-input').remove();

			$('.space-reservation-form-content.new .time-slider').removeClass('time-slider new-time-slider').addClass('new-space-time-slider');
			$('.space-reservation-form-content.new .normal-datepicker').parent('.dateSelector').removeClass('dateSelector new-dateSelector').addClass('new-space-dateSelector');
			$('.space-reservation-form-content.new .normal-datepicker').removeClass('normal-datepicker new-datepicker').addClass('new-space-datepicker');

			//time slider
			$(".new-space-time-slider")

			    .slider({
			        min: 0,
			        max: 24,
			        range: true,
			        values: [22, 23]
			    })

			    .slider("pips", {
			        rest: "label",
							suffix: ':00'
			    })
			    .slider("float");


			$('.new-space-datepicker').datepicker({
				format: 'dd-mm-yyyy',
				inline: true,
				container: '.new-space-dateSelector',
				startDate: new Date()
			});

			$('.new-space-dateSelector').children('.datepicker-inline')[0].remove();

			$('.cancel-reservation-btn').each(function(o){
				$('.cancel-reservation-btn').eq(o).on('click', function(){
					$(this).parent().remove();
				});
			});
		});
	});


	//show file uploader indicator
	$('.add-file input').on('change', function(){
		if($(this).val().length > 0)
			$(this).css('display', 'block')

		else
			$(this).css('display', 'none')
	});


	//get the time slider value
	$('.ui-slider-pip-label').each(function(i){
		$('.ui-slider-pip-label').eq(i).on('click', function(){
			var fromTime = $('.ui-slider-pip-selected-1').children('.ui-slider-label').data('value'),
					toTime = $('.ui-slider-pip-selected-2').children('.ui-slider-label').data('value');

			$(this).parent('.time-slider').siblings('.from-time').val(fromTime);
			$(this).parent('.time-slider').siblings('.to-time').val(toTime);
			// $('.from-time').val(fromTime);
			// $('.to-time').val(toTime);
		})
	})



});
