import * as $ from'jquery';
import 'slick-carousel';
// import './styles/styles.css';
import './styles/styles.less';
import './styles/scss.scss';

/** SLICK INIT **/

$(document).ready(function() {
    let slider = $('.gallery__slider');
    let userWidth = window.screen.width;

    if (userWidth >= 1440 && !slider.hasClass('slick-initialized')) {
        slider.slick({
            variableWidth: true,
            infinite: true,
            arrows: true,
            slidesToShow: 4
        })
    }

    if (userWidth < 1440 && userWidth >= 1280 && !slider.hasClass('slick-initialized')) {
        slider.slick({
            variableWidth: true,
            infinite: true,
            arrows: true,
            centerMode: true,
            slidesToShow: 4
        })
    }

    if (userWidth < 1280 && userWidth >= 1024 && !slider.hasClass('slicker-initialized')) {
        slider.slick({
            variableWidth: true,
            infinite: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 3
        })
    }
    if (userWidth < 1024 && !slider.hasClass('slick-initialized')) {
        slider.slick({
            infinite: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
        })
    }

})

/** ADD FILTERS TO SLIDER PHOTOS */

if ($('.slider__photo').css("width") === "380px") {
    let filters = $('.slider__filter');
    filters[0].style.width = "380px";
    filters[0].style.height = "161px";
    filters[0].style.bottom = "271px";

    filters[1].style.width = "160px";
    filters[1].style.height = "380px";
    filters[1].style.bottom = "380px";
    filters[1].style.left = "140px";

    filters[2].style.width = "160px";
    filters[2].style.height = "380px";
    filters[2].style.bottom = "380px";
    filters[2].style.left = "140px";

    filters[3].style.width = "380px";
    filters[3].style.height = "161px";
    filters[3].style.bottom = "339px";

    filters[4].style.width = "380px";
    filters[4].style.height = "161px";
    filters[4].style.bottom = "191px";    
}

if ($('.slider__photo').css("width") === "245px") {
    let filters = $(".slider__filter");
    filters[0].style.width = "245px";
    filters[0].style.height = "103px";
    filters[0].style.bottom = "200px";

    filters[1].style.width = "103px";
    filters[1].style.height = "245px";
    filters[1].style.bottom = "245px";
    filters[1].style.left = "110px";

    filters[2].style.width = "103px";
    filters[2].style.height = "245px";
    filters[2].style.bottom = "245px";
    filters[2].style.left = "100px";

    filters[3].style.width = "245px";
    filters[3].style.height = "103px";
    filters[3].style.bottom = "225px";

    filters[4].style.width = "245px";
    filters[4].style.height = "103px";
    filters[4].style.bottom = "130px";
}

if (window.screen.width < 1024) {
    $(".join__container")[1].style.display = "none";
    $(".contacts__logo")[0].style.display = "none";
    $(".menu__ancor-border").html("участвовать");
}

if (window.screen.width < 1280) {
    $(".join__container")[1].style.display = "none";
}

/*if (window.screen.width >= 1440) {
    let socialLinks = $('.socials__link');
    socialLinks[0].style.height = "20px";
    socialLinks[3].style.height = "17px";

    let socialSvgs = $('.socials__svg');
    socialSvgs[0].style.height = "20px";
    socialSvgs[3].style.height = "17px";
}*/

let socialLinks = $('.socials__link');
socialLinks[0].style.height = "20px";
socialLinks[3].style.height = "17px";

let socialSvgs = $('.socials__svg');
socialSvgs[0].style.height = "20px";
socialSvgs[3].style.height = "17px";