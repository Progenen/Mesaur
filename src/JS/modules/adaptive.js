import "slick-carousel";

export default function adaptive () {

    let oldInnerWidth = window.screen.availWidth;

    console.log(window.innerWidth);

    window.onresize = () => {
        if (window.innerWidth != oldInnerWidth) {
        }
    }

    if (window.innerWidth < 564) {
        document.querySelector('.menu__body').append(document.querySelector('.header__contacts'));
    }

    if (window.innerWidth < 886) {
        $('.causes__items').slick({
            slidesToShow: 2,
            arrows: true,
            prevArrow: "<button class='btn causes__arrow causes__arrow_left'><img src='../../images/icons/slider-arrow.svg' alt=''></button>",
            nextArrow: "<button class='btn causes__arrow causes__arrow_right'><img src='../../images/icons/slider-arrow.svg' alt=''></button>",
            responsive: [
                {
                    breakpoint: 508,
                    settings:  {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        dotsClass: "causes__dots"
                    }
                }
            ]
        });
    }
    if (window.innerWidth < 932) {
        $('.review__items').slick({
            slidesToShow: 2,
            arrows: true,
            prevArrow: "<button class='btn causes__arrow causes__arrow_left'><img src='../../images/icons/slider-arrow.svg' alt=''></button>",
            nextArrow: "<button class='btn causes__arrow causes__arrow_right'><img src='../../images/icons/slider-arrow.svg' alt=''></button>",
            responsive: [
                {
                    breakpoint: 780,
                    settings:  {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
}