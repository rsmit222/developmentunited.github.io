//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).scroll(function () {

    // parallaxing
    var $movebg = $(window).scrollTop() * -0.3;
    $('.portion').css('background-positionY', ($movebg) + 'px');

    // add class active to nav a on scroll
    var scrollPos = $(document).scrollTop() + 100;
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav a').removeClass("active");
            currLink.addClass("active");
        }
    });

    // changing padding of nav a on scroll
    if (scrollPos > 250) {
        $('nav a').addClass('small');
        $('nav img').addClass('move');
        $('nav span').removeClass('movetext');
    } else {
        $('nav a').removeClass('small');
        $('nav img').removeClass('move');
        $('nav span').addClass('movetext');
    }

});