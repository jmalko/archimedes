$(document).ready(function() {

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var dest = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
    });

    $('.center-slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true
    });

    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });

    $('.half-slick-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true
    });

});
