//---------------------------------------------------
// уменьшение хэдэра на скролл
var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 100;
        

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 100 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.classList.add('header-shrink' );
        }
        else {
            header.classList.remove('header-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
//------------------------------------------------------------------------
 //Главный слайдер с машинами
 const banner = new Swiper('.slider',    {
    // Optional parameters

    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
      },
      effect: 'fade',
      fadeEffect :{
          crossFade: true,
         
      }
  });
//--------------------------------------------------------------
// Слайдер "Как работает Янк?"
const swiper = new Swiper('.stages-slider',    {
    
    direction: 'vertical',
    autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
      },
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  parallax: true,
speed:2000,
    
  });


  //----------------------------------------------
  //Кнопки активные/неактывные

var greenBut = document.querySelectorAll(".button");

[].forEach.call(greenBut ,function(el){
    el.addEventListener('click', function (e) {
        el.classList.add('active');
    })
});

var green = document.querySelectorAll(".green");
[].forEach.call(green ,function(el){
    el.addEventListener('click', function (e) {
        el.classList.add('active-link');
    })
});

const screenWidth = window.screen.width;
console.log(screenWidth);


let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header__wrap');

let back = document.querySelector('body');
let header_list = document.querySelector('.nav');

header_burger.onclick = function () {
    header_burger.classList.toggle('active_m');
    header_menu.classList.toggle('active_m');
   
    back.classList.toggle('lock');
}
header_list.onclick = function () {
    header_list.classList.remove('active_m');
  
    header_burger.classList.remove('active_m');
    header_menu.classList.remove('active_m');
   
    back.classList.remove('lock');
}

const aboutItem = document.querySelectorAll('.about__item');
if ($(window).width() <= '800'){
            
            [].forEach.call(aboutItem, function(el) {
                el.classList.add("swiper-slide");
            });

            const swiper_about = new Swiper('.about-swiper', {
    
                autoplay: {
                    delay: 10000,
                   
                  },
                parallax: true,
                speed:2000,
                loop: true,
                
              });

              const swiper_about_bottom = new Swiper('.about-swiper-bottom', {
    
               
                autoplay: {
                    delay: 7000,
                    stopOnLastSlide: false,
                  },
                parallax: true,
                speed:2000,
                loop: true,
                
              });
    
  } else{
    [].forEach.call(aboutItem, function(el) {
        el.classList.remove("swiper-slide");
    });

  }

  var b = document.querySelector('.banner__button').offsetWidth;
  console.log(b);