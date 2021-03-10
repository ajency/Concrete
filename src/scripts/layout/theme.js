import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';

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
      $('.hamburger').css("background", "#EEEEEE");
    });

    $('.close').on('click', function(){
      $('.menu-list').removeClass('d-block');
      $('.menu-list').addClass('d-none');
      $('.hamburger').css("background-color", "#FFF");
    });


    $('.close-icon').on('click', function(){
      $(".mobile-menu").css("left", "-325px");
      $('.overlay').css("display", "none");
      $('.close-icon').css("opacity", "0");
      $('.hamburger').css("background-color", "#FFF");
    });

    $('.user').on('click', function(){
      $('.user-account').toggleClass('d-block d-none');
    });

    $('.search-button').on('click', function(){
      $('.search-popup').addClass('active');
    });
    $('.form-close-icon').on('click', function(){
      $('.search-popup').removeClass('active');
    });

    $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrow: false,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
      }
      ]
  });
    
    $('.product-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
      nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false,
        }
      }
      ]
    });

    $('.product-tag-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 4,
          arrows: false,
          dots: true,
          centerPadding: '60px',
          variableWidth: true,
      }
    }
    ]
  });

  $('.product-image-slider').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
      }
    }
    ]
  });
    
    
  $('.articles-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 6,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          dots: true,
      }
    }
    ]
  });

  $('.info-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode:true,
          slidesToShow: 2,
          slidesToScroll: 4,
          dots: false,
          infinite: true,
          cssEase: 'linear',
          variableHeight: true,
          arrows: false
        }
      }
    ]
  });


  $('.info-slider-card').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          cssEase: 'linear',
          variableHeight: true,
          arrows: false
        }
      }
    ]
  });

    $('.testimonials-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '30px',
      prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
      nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false,
        }
      }
      ]
    })
    
    $('.product-faq-content .card h4').on('click', function(e){
      if($(this).hasClass('active')){
        $(this).toggleClass('active');
        $('.product-faq-content .card h4').siblings().slideUp('slow');
  //      $(this).siblings().slideToggle('slow');
      }
        else{
            $('.product-faq-content .card h4').removeClass('active');
            $('.product-faq-content .card h4').siblings().slideUp('slow');
            $(this).toggleClass('active');
            $(this).siblings().slideToggle('slow');
        }
    });
    
      
    $('.mweb-mobile-menu > li').click(function(e) {
      e.stopPropagation();
      var $el = $('ul',this);

    if($(this).hasClass('show')){
      $(this).toggleClass('show');
    }
    else{
      $('.mweb-mobile-menu > li').removeClass('show');
      $(this).toggleClass('show');
    }
      $('.mweb-mobile-menu > li > ul').not($el).slideUp();
      $el.stop(true, true).slideToggle(400);
      });
      $('.mweb-mobile-menu > li > ul > li').click(function(e) {
        e.stopImmediatePropagation();  
      });

      $('[data-toggle="collapse"]').click(function() {
        $('.collapse.in').collapse('hide')
      });
    
      $('.nav li.nav-item  > a').on('click', function(){
        $('li.nav-item a'). removeClass("active");
        $(this). addClass("active");
      });
    
      $('.product-variant li > a').on('click', function(){
        $('.image-container').toggleClass('slick-current slick-active');
      });

    jQuery("#SingleOptionSelector option").each(function(i, e) {
    (jQuery("<input type='radio' name='r'  />")
      .attr("value", jQuery(this).val())
      .attr("checked", i == 0)
      .click(function() {
        jQuery("#SingleOptionSelector").val(jQuery(this).val());
      }).add($("<label>"+ this.textContent +"</label>")))
      .appendTo("#r");
  });

});