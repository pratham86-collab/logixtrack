

$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('header').removeClass("header-fixed");
        } else {
            $('header').addClass("header-fixed");
        }
    });

    $('.menu-toggle').on('click', function () {
        $('.nav-links').toggleClass('active');
    });
})
$(function () {

    let index = 0;
    const total = $('.slide').length;

    function updateSlider() {
        $('.slides').css({
            transform: 'translateX(-' + (index * 100) + '%)',
            transition: '0.5s ease'
        });
    }

    $('.next').click(function () {
        index++;
        if (index >= total) index = 0;
        updateSlider();
    });

    $('.prev').click(function () {
        alert('juywudgtuw')
        index--;
        if (index < 0) index = total - 1;
        updateSlider();
    });

    // auto slide
    setInterval(function () {
        index++;
        if (index >= total) index = 0;
        updateSlider();
    }, 3000);

});