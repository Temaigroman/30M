'use strict';

(function ($) {

    // $(".loader").fadeIn("slow");
    // $("#preloder").delay(50).fadeIn("slow");
    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });
    $("#preloder").delay(200).fadeOut("slow"); //todo!!!

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-query').val('');
        });
    });

    //Masonary
    $('.gallery.masonry').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    
    $(".catalog-items-other-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 4,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


    /*------------------------------------
      HT Scroll to top
    --------------------------------------*/
    function scrolltop() {
      var pxShow = 300,
        goTopButton = $(".scroll-top")
        // Show or hide the button
      if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
          if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
        } else {
          goTopButton.removeClass('scroll-visible')
        }
      });
      $('.smoothscroll').on('click', function (e) {
        $('body,html').animate({
          scrollTop: 0
        }, 3000);
        return false;
      });
    };


    /*------------------------------------
      HT Fixed Header
    --------------------------------------*/
    function fxheader() {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
          $('header').addClass('fixed-header');
        } else {
          $('header').removeClass('fixed-header');
        }
      });
    };

    function scrollToAnchors() {
    // scroll to anchors
        if(location.hash) {
            setTimeout(function(){
                // $('html, body').scrollTop(0).show();
                // alert('body a[name="'+location.hash.replace('#','')+'"]');
                var target = $('a[name="'+location.hash.replace('#','')+'"]');
                // target = location.hash;
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
    //              return false;
                }
            }, 100);
        }
    };

    /*------------------
        Image Popup
    --------------------*/
/*    $('.image-popup').magnificPopup({
        gallery:{
            enabled:true
        },
        type: 'image'
    });
*/
    /*------------------
        Video Popup
    --------------------*/
/*    $('.video-popup').magnificPopup({
        gallery:{
            enabled:true
        },
        type: 'iframe'
    });

*/

    $('.gallery').magnificPopup({
        delegate: 'a',
        // type: 'image',
        callbacks: {
            elementParse: function(item) {
              // Function will fire for each target element
              // "item.el" is a target DOM element (if present)
              // "item.src" is a source that you may modify

              if(item.el.hasClass('image-popup')) {
                 item.type = 'image';
              }
              if(item.el.hasClass('video-popup')) {
                 item.type = 'iframe';
              }
            }
        },
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,

/*        type: function(item) {
                    // alert('image');
                if(item.el.hasClass('image-popup')) {
                    // return 'image';
                    item.type = 'image';
                }
                if(item.el.hasClass('video-popup')) {
                    // return 'iframe';
                    item.type = 'iframe';
                }
                // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        },
*/
        
        tLoading: 'Загружаем объект #%curr%...',
        // mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Объект #%curr%</a> не удалось загрузить...',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

    $('.btn.price-table-view').on('click', function () {
        // $(this).find('span').toggleClass('hidden');
        $('.btn.price-table-view').find('span').toggleClass('hidden');
        // $('.price-table').hidden().toggleClass('grid-view');
        $('.price-table').toggleClass('grid-view');
        $('.price-table tbody').toggleClass('row');
        $('.price-table tr').toggleClass('col-md-3');
        // $('.price-table').show();
    });

    $('header .nav-menu a[href*="'+window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1)+'"]').parents('li').addClass('active');

    $('[data-toggle="popover"]').popover();

    // $('.theme-switch').click(()=>{
    $('.theme-switch').click(function() {
        // alert($(this).text());
        $(this).find('i.fa').toggleClass('hidden');
        $('html.light, html.dark').toggleClass('light dark');
        $('._text-white, .text-white').toggleClass('_text-white text-white');
        $('.text-light, .text-dark').toggleClass('text-light text-dark');
        $('.bg-light, .bg-dark').toggleClass('bg-light bg-dark');
        $('.bg-light2, .bg-dark2').toggleClass('bg-light2 bg-dark2');
        $('.bg-light3, .bg-dark3').toggleClass('bg-light3 bg-dark3');
        $('.navbar-light, .navbar-dark').toggleClass('navbar-light navbar-dark');
/*
        $('html').toggleClass('light dark')
        $(['.light [class*="-light"]', '.dark [class*="-dark"]']).each((i,ele)=>{
            $(ele).toggleClass('bg-light bg-dark');
            $(ele).toggleClass('text-light text-dark');
            $(ele).toggleClass('text-white text-dark');
            $(ele).toggleClass('navbar-light navbar-dark');
        })
*/
    })

    scrolltop();
    fxheader();
    scrollToAnchors();

})(jQuery);


