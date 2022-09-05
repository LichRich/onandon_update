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
    anchors: ["section-intro", "section-info", "section-schedule", "section-rule", "section-materials"],
});
var max_index = pages.anchors.length - 1;

let nav_items = $('.sub-nav-items');

$(document).ready(function () {

    var prev = now = pages.index;

    navColorChange(now);

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

        navColorChange(now);

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

function navColorChange(index) {

    $(nav_items).each(function() {
        var prev_color;
        $(this).css('color','#333');
        $(this).hover(function() {
            prev_color = $(this).css('color');
            $(this).css('color', '#537dcf');
        }, function() {
            $(this).css('color', prev_color);
        }, );
    });

    if(index > 0) {
        $(nav_items[index-1]).css('color','#74c84c');
    }

    
}