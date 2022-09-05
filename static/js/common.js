$(document).ready(function () {

    $('.intro-contents').animate({
        paddingTop: '0px',
        opacity: 1
    }, 400);

    /* ---------------------------------------------- /*
     * Scroll
    /* ---------------------------------------------- */
    $('.scroll-up').click(function (e) {
        e.preventDefault();
        pages.scrollToPage(1);
    });

    $('.to-archive').on('click', function(e) {
        e.preventDefault();
        alert('준비중입니다!');
    });

});