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
    $(".mobile-menu").css("left", "0");
    $('.overlay').css("display", "block");
    $('.close-icon').css("opacity", "1");
  });

  $('.close').on('click', function(){
    $('.menu-list').removeClass('d-block');
    $('.menu-list').addClass('d-none');
  });


  $('.close-icon').on('click', function(){
    $(".mobile-menu").css("left", "-325px");
    $('.overlay').css("display", "none");
    $('.close-icon').css("opacity", "0");
  });

  $('.user').on('click', function(){
    $('.user-account').toggleClass('d-block d-none');
  });


  $('.mweb-mobile-menu > li').click(function(e) {
    e.stopPropagation();
    var $el = $('ul',this);
    $(this).toggleClass("show");
    $('.mweb-mobile-menu > li > ul').not($el).slideUp();
    $el.stop(true, true).slideToggle(400);
  });
  $('.mweb-mobile-menu > li > ul > li').click(function(e) {
    e.stopImmediatePropagation();  
  });

});