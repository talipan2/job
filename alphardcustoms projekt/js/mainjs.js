$(document).ready(function () {
    $('a.myLinkModal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'block')
                .animate({
                    opacity: 1
                }, 198);
        });
    });

    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({
            opacity: 0
        }, 198, function () {
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });
});



$(document).ready(function () {
    $('.slider').slick({

        adaptiveHeight: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 0,
        speed: 1500,
        responsive: [

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }

  ]
    });
});
$(document).ready(function () {
    $('.flexconprimerrabotslider').slick({


        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
$(document).ready(function () {
    var c1 = new Rellax('.filingpopopkorn1', {
        speed: 7
    });

    var c2 = new Rellax('.filingpopcopn2', {
        speed: 8
    });

    var c3 = new Rellax('.filingpopopkorn3', {
        speed: 1
    });
    var c3 = new Rellax('.filingpopopkorn7', {
        speed: 2
    });
    var c3 = new Rellax('.filingpopopkorn8', {
        speed: 2
    });
    var c3 = new Rellax('.filingpopopkorn9', {
        speed: 2
    });
    var c3 = new Rellax('.filingpopopkorn10', {
        speed: 1
    });
    var c3 = new Rellax('.filingpopopkorn11', {
        speed: 1
    });
    var c3 = new Rellax('.filingpopopkorn12', {
        speed: 1
    });
    var c3 = new Rellax('.filingpopopkorn3', {
        speed: 1
    });
    var c3 = new Rellax('.filingpopopkorn13', {
        speed: 1
    });

    var c4 = new Rellax('.filinkolonca', {
        speed: 2
    });
    var c4 = new Rellax('.bolt', {
        speed: 2
    });
    var c4 = new Rellax('.kgaika', {
        speed: 2
    });
    var c4 = new Rellax('.gaika', {
        speed: 2
    });


});
