$(document).ready(function(){

    $('.about-us .slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        nextArrow: '<i class="icon-down"></i>',
        prevArrow: '<i class="icon-up"></i>',
        vertical: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.blog .slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        nextArrow: '<i class="icon-right"></i>',
        prevArrow: '<i class="icon-left"></i>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.mobile-nav .hamburger').click(function() {
        $(this).parents('.mobile-nav').toggleClass('open');
    });

    var totalSlides = $('.about-us .slider .slide:not(.slick-cloned)').length;
    $('.about-us .total').text('0' + totalSlides);
    $('.about-us .slider').on('afterChange', function(event, slick, currentSlide){
        $('.about-us .current').text('0' + (currentSlide + 1));
    });

    totalSlides = $('.blog .slider .slide:not(.slick-cloned)').length;
    $('.blog .total').text('0' + totalSlides);
    $('.blog .slider').on('afterChange', function(event, slick, currentSlide){
        $('.blog .current').text('0' + (currentSlide + 1));
    });


});