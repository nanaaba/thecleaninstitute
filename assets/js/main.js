(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*--------------------
            wow js init
        --------------------*/
        new WOW().init();

        /*-------------------------------------
            portfolio filter activation
        -------------------------------------*/
        var Container = $('#portfolio-marosny');
        if (Container.length > 0) {
            Container.imagesLoaded(function () {
                var festivarMasonry = $('#portfolio-marosny').isotope({
                    itemSelector: '.single-portfolio-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 30
                    }
                });
                $(document).on('click', '.portfolio-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        /*----------------------------
            portfolio menu active
        ----------------------------*/
        var portfolioMenu = '.portfolio-menu li';
        $(document).on('click', portfolioMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        /*----------------------------------
            magnific popup activation
        ----------------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        /*-------------------------------
            back to top
        ------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        
        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-number,.forum-count,.counter-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        /*----------------------------------------
            testimonial carousel
        ----------------------------------------*/
        var $tesitmonialCarousel = $('#testimonial-carousel');
        if ($tesitmonialCarousel.length > 0) {
            $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: true,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    767: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 1,
                        nav: false
                    },
                    960: {
                        items: 1,
                        nav:false
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
            $tesitmonialCarousel.on('translate.owl.carousel', function () {
                $('.single-testimonial-item .details').removeClass('animated fadeInDown').css('opaciry', '0');
                $('.single-testimonial-item .img-wrapper').removeClass('animated fadeInUp').css('opaciry', '0');
            });
            $tesitmonialCarousel.on('translated.owl.carousel', function () {
                $('.single-testimonial-item .details').addClass('animated fadeInDown').css('opaciry', '1');
                $('.single-testimonial-item .img-wrapper').addClass('animated fadeInUp').css('opaciry', '1');
            });
        }
        
        /*--------------------------------
            brand logo carousel
        -------------------------------*/
        var $brandCarousel = $('#brand-carousel');
        if ($brandCarousel.length > 0) {
            $brandCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 2
                    },
                     
                    768: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    },
                    1920: {
                        items: 5
                    }
                }
            });
        }
        /*------------------------------
            team member carousel
        ------------------------------*/
        var $teamCarousel = $('#team-carousel');
        if ($teamCarousel.length > 0) {
            $teamCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));	
