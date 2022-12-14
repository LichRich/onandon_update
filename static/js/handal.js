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
    anchors: ["section-intro", "section-exp", "section-living", "section-making", "section-apply"],
});
var max_index = pages.anchors.length - 1;

let nav_items = $('.sub-nav-items');

const img_srcs = ["../static/images/handal_images/modal_images/m_exp0.jpg", "../static/images/handal_images/modal_images/m_exp1.jpg", "../static/images/handal_images/modal_images/m_exp2.jpg", "../static/images/handal_images/modal_images/m_exp3.jpg", "../static/images/handal_images/modal_images/m_exp4.png", "../static/images/handal_images/modal_images/m_exp5.jpg", "../static/images/handal_images/modal_images/m_live0.jpg", "../static/images/handal_images/modal_images/m_live1.jpg", "../static/images/handal_images/modal_images/m_live2.png", "../static/images/handal_images/modal_images/m_live3.jpg", "../static/images/handal_images/modal_images/m_live4.jpg", "../static/images/handal_images/modal_images/m_live5.jpg", "../static/images/handal_images/modal_images/m_make0.jpg", "../static/images/handal_images/modal_images/m_make1.jpg", "../static/images/handal_images/modal_images/m_make2.jpg", "../static/images/handal_images/modal_images/m_make3.jpg", "../static/images/handal_images/modal_images/m_make4.jpg", "../static/images/handal_images/modal_images/m_make5.jpg"];

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

    $('.contents-imgs').click(function() {
        $('#modal-img').attr('src', img_srcs[$('.contents-imgs').get().indexOf(this)]);
    });

});