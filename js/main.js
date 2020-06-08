$(function () {
    $(".header__menu-button ").on("click", function () {
        $(".menu").addClass("active");
    });
    $(".close_button ").on("click", function () {
        $(".menu").removeClass("active");
    });

    $(".advantage-slider__items").slick({
        arrows: false,
        dots: true,
        infinite: true,
        draggable: false,
        autoplay: true,
        speed: 3000
    });



    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        draggable: false,
        autoplay: true,
        speed: 3000,
        responsive: [{
                breakpoint: 1220,
                settings: {

                    slidesToShow: 2
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
});