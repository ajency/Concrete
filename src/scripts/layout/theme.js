import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookieTest} from '@elkfox/shopify-theme/scripts/cookies';
import {responsiveVideos} from '@elkfox/shopify-theme/scripts/responsive-videos';
import {responsiveTables} from '@elkfox/shopify-theme/scripts/responsive-tables';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Detect cookie support
cookieTest('no-cookies', 'cookies');

// Responsive tables & RTE videos
responsiveVideos();
responsiveTables();

$(document).ready(function() 
{
    $('.hamburger').on('click', function(){
      $('.menu-list').removeClass('d-none');
      $('.menu-list').addClass('d-block');
    });
    $('.close').on('click', function(){
      $('.menu-list').removeClass('d-block');
      $('.menu-list').addClass('d-none');
    });
    $('.hamburger').on('click', function(){
      $(".mobile-menu").css("left", "0");
      $("body").css("overflow", "hidden");
      $('.overlay').removeClass('d-none');
      $('.overlay').addClass('d-block');
      $('.close-icon').removeClass('d-none');
      $('.close-icon').addClass('d-block');
    });

    $('.close-icon').on('click', function(){
      $(".mobile-menu").css("left", "-325px");
      $('.overlay').removeClass('d-block');
      $('.overlay').addClass('d-none');
      $('.close-icon').removeClass('d-block');
      $('.close-icon').addClass('d-none');
    });
	$('.user').on('click', function(){
  		$('.user-account').toggleClass('d-block d-none');
	});

	$(".mweb-mobile-menu li.main-child-menu").click(function(){
    	$("li.main-child-menu").not(this).removeClass("show").children("ul").hide("slow");
    	$(this).addClass("show").children("ul").show("slow");
	});
});