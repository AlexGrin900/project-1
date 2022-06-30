$(function () {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="icon__slick-btn" width="18" height="18"><use href="./styles/img/icons/sprite.svg#icon-angle-right"></use></svg></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="icon__slick-btn" width="18" height="18"><use href="./styles/img/icons/sprite.svg#icon-angle-left"></use></svg></button>',
        infinite: false
    });
});