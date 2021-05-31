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
