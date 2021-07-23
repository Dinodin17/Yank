const swiper = new Swiper('.edit-item__slider',    {
    slidesPerView: 1,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   
      thumbs:{
        swiper:{
            el:"image-mini-slider",
            slidesPerView: 3,
        }
      }
  });