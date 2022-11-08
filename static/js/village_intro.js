/* ---------------------------------------------- /*
 * Scroll
/* ---------------------------------------------- */
const pages = new Pageable("#container", {
    animation: 500,
    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
    },
    anchors: ["section-intro", "section-character", "section-plan", "section-sangsa", "section-salon"],
});
var max_index = pages.anchors.length - 1;

$(document).ready(function () {

    var prev = now = pages.index;

    if (pages.index > 0) {
        $('.scroll-up').fadeIn();
    }

    if (pages.index == max_index) {
        $('#footer').animate({
            bottom: '0px'
        }, 100, 'linear');
    }

    pages.on('scroll.start', function () {
        if (now == 0) {
            $('.scroll-up').fadeIn();
        } else if (now == max_index) {
            $('#footer').animate({
                bottom: '-44px'
            }, 100, 'linear');
        }
    });

    pages.on('scroll.end', function () {
        prev = now;
        now = pages.index;

        if (now == 0) {
            $('.scroll-up').fadeOut();
        } else if (now == max_index) {
            $('#footer').animate({
                bottom: '0px'
            }, 100, 'linear');
        }
    });

    $('.scroll-up').click(function (e) {
        e.preventDefault();
        pages.scrollToPage(1);
    });

});