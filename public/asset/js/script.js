$(document).ready(function(){

    $('.about-us .slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        nextArrow: '<i class="icon-down"></i>',
        prevArrow: '<i class="icon-up"></i>',
        vertical: true,
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    var totalSlides = $('.about-us .slider .slide:not(.slick-cloned)').length;
    console.log(totalSlides);
    /*var currentIndex = $('div.active').index() + 1;

    $('.num').html(''+currentIndex+'/'+totalItems+'');*/

});