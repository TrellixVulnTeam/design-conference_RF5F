import * as $ from'jquery';
import 'slick-carousel';
// import './styles/styles.css';
import './styles/styles.less';
import './styles/scss.scss';

$(document).ready(function() {
    $('.gallery__slider').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 4
    })
})

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