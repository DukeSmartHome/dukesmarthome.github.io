$(function () {
    var mobile = false;
    if ((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || (typeof window.orientation !== 'undefined'))
        mobile = true;

    var scrolled = false,
        menubarHeight = 80,
        navHeight = 0;

    // open and close nav menu
    $('#close_container').click(function () {
        if (!$('nav').is(":visible")) {
            $('nav').fadeIn(500);
            navHeight = $('nav').height();
        } else {
            $('nav').fadeOut(500);
            navHeight = 0;
        }
        $('#close').toggleClass('open');
    });



    // on scrolling, minimize menubar'
    if (!mobile) {
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top > 50) {
                $("#menubar").addClass('scrolled');
                menubarHeight = 60;
            } else {
                $("#menubar").removeClass('scrolled');
                menubarHeight = 80;
            }
        });
    }

    // handle scrolling
    $("#pages li").click(function (e) {
        e.preventDefault();

        var target = '#' + $(this).attr('data-target'),
            $target = $(target),
            loc = $(target).offset().top - menubarHeight - navHeight;
        $('html,body').stop().animate({
            scrollTop: loc
        }, 1200, 'easeInOutQuart', function () {
            window.location.hash = target;
        });
    });
});
