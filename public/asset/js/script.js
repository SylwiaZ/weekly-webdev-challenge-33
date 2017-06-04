$(document).ready(function(){

    handleWindowScroll();
    handleNavigation();
    handleAboutUsSlider();
    handleBlogSlider();

});

function handleWindowScroll() {
    $(window).scroll(throttle(function() {
        /* Przyklejanie nawigacji */
        if($(window).scrollTop() > 70) {
            $('.header').addClass('sticky-bar');
        } else {
            $('.header').removeClass('sticky-bar');
        }
    }, 100)) // Wykonanie funkcji max 1 raz na 100ms (10 razy na sekundę)
}

function handleNavigation() {
    /* Rozwijanie mobilnej nawigacji */
    $('.mobile-nav .hamburger').click(function() {
        $(this).parents('.mobile-nav').toggleClass('open');
    });

    /* Przewijanie do sekcji */
    $('.menu-item a').click(function(event) {
        event.preventDefault(); // Blokuje domyślne zachowanie (przeskoczenie do sekcji)
        var anchor = $(this).attr('href'); // Pobiera wartość atrybutu href 
        if($(anchor).length > 0) {
            var distanceFromTop = $(anchor).offset().top;

            $('html, body').animate({
                scrollTop: distanceFromTop
            }, 500);
        }
    });
}

function handleAboutUsSlider() {
    /* Inicjalizacja slajdera */
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

    /* Licznik slajdera */
    var totalSlides = $('.about-us .slider .slide:not(.slick-cloned)').length;
    $('.about-us .total').text('0' + totalSlides);
    $('.about-us .slider').on('afterChange', function(event, slick, currentSlide){
        $('.about-us .current').text('0' + (currentSlide + 1));
    });
}

function handleBlogSlider() {
    /* Inicjalizacja slajdera */
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

    /* Licznik slajdera */
    var totalSlides = $('.blog .slider .slide:not(.slick-cloned)').length;
    $('.blog .total').text('0' + totalSlides);
    $('.blog .slider').on('afterChange', function(event, slick, currentSlide){
        $('.blog .current').text('0' + (currentSlide + 1));
    });
}

function throttle (callback, limit) {
    /* Funkcja ograniczająca ilość wykonań innej funkcji (zdarzeń), co pozwala odciążyć przeglądarkę użytkownika */
    var wait = false;                  
    return function () {               
        if (!wait) {                   
            callback.call();           
            wait = true;               
            setTimeout(function () {  
                wait = false;          
            }, limit);
        }
    }
}