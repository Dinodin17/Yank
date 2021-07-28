// Слайдер реактирование товара в адмике
// Слайдер заказ машины на сайте

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows:true,
    prevArrow: '<div class="icon-chevron-left arrows"></div>',
    nextArrow: '<div class="icon-chevron-right arrows"></div>',
  });
