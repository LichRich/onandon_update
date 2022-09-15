$(document).ready(function () {

    $(document).keydown(function (e) {
        if(e.defaultPrevented) {
            return;
        }

        var handled = false;

        // Tab 방지
        if(e.keyCode == 9) {
            handled = true;
        }
        // Space Bar 방지
        else if(e.keyCode == 32) {
            handled = true;
        }
        // Block End Key
        else if(e.keyCode == 35) {
            handled = true;
        }
        // Block Home Key
        else if(e.keyCode == 36) {
            handled = true;
        }

        if(handled) {
            console.log(e.keyCode);
            e.preventDefault();
        }
    });

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

// $(window).on('resize', function() {
//     this.location.reload(false);
// });

/* ---------------------------------------------- /*
 * Loading
/* ---------------------------------------------- */
$(window).on('load', function() {
    $('.loading').hide();
});