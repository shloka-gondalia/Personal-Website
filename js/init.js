/*
 * Copyright (c) 2019 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	arlo_progress_bar();
	iconScroll();
	smoothGoTo();
	rotate();
	updateOwl();

	arlo_tm_anchor();
	arlo_tm_down();
	arlo_tm_imgtosvg();
	arlo_tm_scrollable();
	arlo_tm_switcher();
	arlo_mobile_menu();
	arlo_tm_kenburn_slider();
	arlo_tm_data_images();
	arlo_tm_animate_text();
	arlo_tm_jarallax();
	arlo_tm_portfolio();
	arlo_tm_projects();
	arlo_tm_isotope();
	arlo_tm_partners();
	arlo_tm_contact_form();
	arlo_tm_location();
	arlo_tm_ripple();
	arlo_tm_videoplayer();
	arlo_tm_totop();
	arlo_tm_music();
	arlo_about_img();
	robex_menu_bg();
	arlo_tm_about_top();
	arlo_tm_tweenmax_menu();
	arlo_tm_rightpart_padding();
	arlo_tm_sidebarmenu();
	arlo_tm_about_animation();
	
	
	jQuery(window).on('resize',function(){
		arlo_tm_scrollable();
		arlo_tm_isotope();
	});
	
	jQuery(window).on('scroll',function(){
		arlo_tm_hero_effect();
	});

	jQuery(window).on('load', function(){
		load();
	});
	
	
});

function load(){
	setTimeout(function(){
        jQuery('.arlo_tm_preloader').addClass('loaded');
    }, 1000);
}

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function arlo_tm_anchor(){
	
	"use strict";
	
	jQuery('.arlo_tm_leftpart .inner .menu ul li a,.arlo_tm_topbar .dropdown .dropdown_inner ul li a,.arlo_tm_topmenu .topmenu_inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top
			}, 1000);
		}
		return false;
	});
	
	jQuery('.arlo_tm_topbar_another .menu_list ul li a,.arlo_tm_topbar.another .dropdown .dropdown_inner ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-220
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function arlo_tm_down(){
	
	"use strict";
	
	jQuery('.arlo_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ------------   WAIT FOW IMAGES    -------------------
// -----------------------------------------------------

$('.masonry img').waitForImages(function() {
    arlo_tm_isotope();
});	

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function arlo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function arlo_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.arlo_tm_kenburn_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpeg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function arlo_tm_scrollable(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.arlo_tm_leftpart .inner .menu.scrollable');
	var verMenu			= jQuery('.arlo_tm_leftpart .inner .menu');
	var logoHeight		= jQuery('.arlo_tm_leftpart .inner .logo').outerHeight();
	var socialHeight	= jQuery('.arlo_tm_leftpart .inner .bottom').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function arlo_tm_switcher(){
	
	"use strict";
	
	var switcherOpener				= jQuery('.arlo_tm_leftpart .inner .resize');
	var switcherIcon				= jQuery('.arlo_tm_leftpart .inner .resize a span');
	var leftPart					= jQuery('.arlo_tm_leftpart');
	var rightPart					= jQuery('.arlo_tm_rightpart');
	var WW							= jQuery(window).width();
	
	switcherOpener.on('click',function(){
		if(WW >= 1600){
			if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened');
			rightPart.addClass('opened');
		}
		}else{
			if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened2');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened2');
			rightPart.addClass('opened');
		}
		}
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);
		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){arlo_tm_jarallax();},300);
		
		}
		setTimeout(function(){
			updateOwl();
		}, 300)
		
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function arlo_mobile_menu(){
	
	"use strict";
		
	var trigger			= jQuery('.arlo_tm_topbar .topbar_inner .trigger2');
	// var triggerClose	= trigger.find('a .close');
	// var triggerMenu		= trigger.find('a .menu');
	var dropdown		= jQuery('.arlo_tm_topbar .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			// triggerMenu.removeClass('closed');
			// triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			// triggerMenu.addClass('closed');
			// triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function arlo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function arlo_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.arlo_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["a Programmer", "a Developer", "an Innovator", "an Engineer", "a Leader", "a Team Player", "a Former Amazonian"],
			loop: true,
			startDelay: 100,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function arlo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*300));
	});
}

function arlo_progress_bar(){
	jQuery('.arlo_progress').each(function() {

		"use strict";

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});
}

	

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function arlo_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.arlo_tm_portfolio_list');
		var filter		 = jQuery('.arlo_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function arlo_tm_projects() {
	
	"use strict";
	
	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function arlo_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function arlo_tm_partners(){
	
	"use strict";
	
		var carousel1			= jQuery('.arlo_tm_partners .owl-carousel');
		carousel1.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
		var carousel2			= jQuery('.arlo_tm_testimonial .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				items: 1,
				lazyLoad: true,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true
		});
		
	}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function arlo_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function arlo_tm_location(){
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function arlo_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function arlo_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function arlo_tm_totop(){
	
	"use strict";
	
	jQuery(".arlo_tm_footer .footer_inner .top a").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// -----------------------------------------------------
// ----------------------    MUSIC   -------------------
// -----------------------------------------------------

jQuery('body.music').append('<audio loop autoplay volume="0" id="audio-player"><source src="audio/2.mp3" type="audio/mpeg"></audio>');
    var audio2 = jQuery("#audio-player");
    audio2.volume = 0.2;

function arlo_tm_music(){
      jQuery('.morocco_music').css({'visibility':'visible'});
      jQuery('body').addClass("audio-on");
      if (jQuery('body').hasClass('audio-off')) {
        jQuery('body').removeClass('audio-on');
      } 
      jQuery(".morocco_music").on('click', function() {
          jQuery('body').toggleClass("audio-on audio-off");         
          if (jQuery('body').hasClass('audio-off')) {
            audio2[0].pause();
          } 
          if (jQuery('body').hasClass('audio-on')) {
            audio2[0].play();
          }
      });

}

// -----------------------------------------------------
// --------    HOME SECOND HERO EFFECT    --------------
// -----------------------------------------------------

function arlo_tm_hero_effect(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var currentScroll		= window.pageYOffset;
		jQuery(".arlo_tm_second_homepage .hero_wrap").css({'transform': 'scale('+(100 - currentScroll/100)/99+')','opacity' : (1 - (currentScroll/20) / 15)});
	});
	
}

// -----------------------------------------------------
// --------------------    HERO HEIGHT    --------------
// -----------------------------------------------------

function arlo_tm_about_top(){
		
	var hero	= jQuery('.arlo_tm_second_homepage .hero_wrap').height();
	var about	= jQuery('.arlo_tm_second_homepage #about');
		
	about.css({marginTop:hero});
}
// -----------------------------------------------------
// --------------------    ABOUT IMAGE    --------------
// -----------------------------------------------------

function arlo_about_img(){
	"use strict";
		
		var name		= jQuery('.arlo_tm_second_homepage .arlo_tm_about .about_main p .name');
		var image		= jQuery('.arlo_tm_second_homepage .arlo_tm_about .about_image');
		
		name.on('mouseenter',function(){
			image.addClass('opened');
		})
		.on('mouseleave',function(){
			image.removeClass('opened');
		});
		
	}

// -----------------------------------------------------
// ----------------------    BG SCROLL    --------------
// -----------------------------------------------------

function robex_menu_bg(){
	"use strict";
	jQuery(window).on('scroll',function(){
		var WinOffset		= jQuery(window).scrollTop();
		var topBar			= jQuery('.arlo_tm_topbar_another');
		var topMenu			= jQuery('.arlo_tm_topmenu');
		if(WinOffset >= 500){
			topBar.addClass('animate');
			topMenu.addClass('animate');
		}else{
			topBar.removeClass('animate');
			topMenu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// -------------    TWEENMAX MENU    -------------------
// -----------------------------------------------------

function arlo_tm_tweenmax_menu(){
		
		var t1			= new TimelineMax({paused:true});

		t1.to(".arlo_tm_topbar_another .trigger_main .one", 0.5,{
			y:6,
			rotation:45,
			ease:Expo.easeinOut
		});
		t1.to(".arlo_tm_topbar_another .trigger_main .two", 0.5,{
			y:- 6,
			rotation:-45,
			ease:Expo.easeinOut,
			delay:-0.5
		});	
		t1.to(".beker_tm_menu",0.5,{
			right:"-40px",
			ease:Expo.easeinOut,
			delay:-0.5
		});
		t1.staggerFrom(".arlo_tm_topbar_another .menu_list ul li", 0.4, {x:25, opacity:0, ease:Expo.easeinOut},0.1);
		t1.reverse();

		jQuery('.arlo_tm_topbar_another .trigger_main').on('click',function(){
			t1.reversed(!t1.reversed());
			return false;
		});	
	}


// -----------------------------------------------------
// -------------    SIDEBAR NENU    --------------------
// -----------------------------------------------------	
	
function arlo_tm_sidebarmenu(){
	
	"use strict";
	
	var t1			= new TimelineMax({paused:true});
	
	t1.to(".arlo_tm_sidebar_wrap_menu .trigger_wrap .trigger .one", 0.2,{
		y:6,
		rotation:45,
		ease:Expo.easeinOut
	});
	t1.to(".arlo_tm_sidebar_wrap_menu .trigger_wrap .trigger .two", 0.2,{
		y:- 6,
		rotation:-45,
		ease:Expo.easeinOut,
		delay:-0.2
	});	
	t1.to(".arlo_tm_sidebar_wrap_menu .menu_wrap",0.2,{
		left:"90px",
		ease:Expo.easeinOut,
		delay:-0.2
	});
	t1.staggerFrom(".arlo_tm_sidebar_wrap_menu .menu_wrap .menu_inner .nav_list > ul > li", 0.1, {y:25, opacity:0, ease:Expo.easeinOut},0.1);
	t1.reverse();
	
	jQuery('.arlo_tm_sidebar_wrap_menu .trigger_wrap .link').on('click',function(){
		t1.reversed(!t1.reversed());
		return false;
	});
	
	
	var aaaa = jQuery('.arlo_tm_sidebar_wrap_menu .menu_wrap .menu_inner .nav_list > ul > li > a');
	aaaa.off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			aaaa.parent().removeClass('active');
			element.parent().addClass('active');
			$('html, body').animate({
				scrollTop: $(url).offset().top
			}, 1000);
		}
		return false;
	});	
		
}

function arlo_tm_rightpart_padding(){
	"use strict";
	
	var rightpart		= jQuery('body.extra .arlo_tm_rightpart');
	var button			= jQuery('.arlo_tm_sidebar_wrap_menu .info_wrap .inner_wrap .link');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			setTimeout(function(){
				element.removeClass('opened');
				rightpart.removeClass('opened');
			},500);
		}else{
			element.addClass('opened');
			rightpart.addClass('opened');
		}
		return false;
	});
}


// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function arlo_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}

//Smooth Scroll

function smoothGoTo(){
	"use strict";
	
	jQuery('.smooth-goto').on('click', function() {  
		jQuery('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 2000);
		return false;
	});
}

function iconScroll(){
	"use strict";
	
	jQuery('.icon-scroll').on('click', function() {  
		jQuery('html, body').animate({scrollTop: $(this.hash).offset().top - 50});
		return false;
	});
}

function rotate(){
	"use strict";

	jQuery(".rotate").click(function(){
		jQuery(this).toggleClass("down")  ; 
	})
}

function updateOwl(){
	var $carousel = jQuery('.owl-carousel');  
    if($carousel.length>0)  {   
        $carousel.data('owl.carousel')._invalidated.width = true;
        $carousel.trigger('refresh.owl.carousel');
	}
	// jQuery(".owl-carousel").each(function() {
	// 	jQuery(this).data('owl.carousel').onResize();
	// 	jQuery(this).trigger('refresh.owl.carousel');
	// });
}

function arlo_mobile_menu_close(){
	
	"use strict";
		
	var trigger			= jQuery('.arlo_tm_topbar .topbar_inner .trigger2');
	var dropdown		= jQuery('.arlo_tm_topbar .dropdown');
	
	trigger.removeClass('opened');
	dropdown.slideUp();
	
	return false;
	
}