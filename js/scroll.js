$('body').plusAnchor({
    easing: 'easeInOutQuint',
    offsetTop: -$('.navbar').height(),
    speed: 750
});


$(window).scroll(function() {
    if ($(this).scrollTop() > $('.navbar').position().top) {
        $('.navbar').addClass('navbar-scrolled');
    }

    else {
        $('.navbar').removeClass('navbar-scrolled');
    }
});
