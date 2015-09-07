function LoadRegistration() {
    //jQuery.noConflict();
    //destination = $('.registration');
    $('.main-site').addClass('invisible');

    window.setTimeout(function () {
        $('.main-site').addClass('no-display');
        //$('.registration').removeClass('no-display');

        window.setTimeout(function () {
            $('.main-site').removeClass('invisible');
        }, 200);
    }, 200);
}
