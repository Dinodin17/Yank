
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

window.onload = function(){
    crear_select();
  }
  
  function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  
   
  var li = new Array();
  function crear_select(){
  var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
  var select_ = '';
  for (var e = 0; e < div_cont_select.length; e++) {
  div_cont_select[e].setAttribute('data-indx-select',e);
  div_cont_select[e].setAttribute('data-selec-open','false');
  var ul_cont = document.querySelectorAll("[data-indx-select='"+e+"'] > .cont_list_select_mate > ul");
   select_ = document.querySelectorAll("[data-indx-select='"+e+"'] >select")[0];
   if (isMobileDevice()) { 
  select_.addEventListener('change', function () {
   _select_option(select_.selectedIndex,e);
  });
   }
  var select_optiones = select_.options;
  document.querySelectorAll("[data-indx-select='"+e+"']  > .selecionado_opcion ")[0].setAttribute('data-n-select',e);
  document.querySelectorAll("[data-indx-select='"+e+"']  > .icon_select_mate ")[0].setAttribute('data-n-select',e);
  for (var i = 0; i < select_optiones.length; i++) {
  li[i] = document.createElement('li');
  if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML ) {
  li[i].className = 'active';
  document.querySelector("[data-indx-select='"+e+"']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
  };
  li[i].setAttribute('data-index',i);
  li[i].setAttribute('data-selec-index',e);
  // funcion click al selecionar 
  li[i].addEventListener( 'click', function(){  _select_option(this.getAttribute('data-index'),this.getAttribute('data-selec-index')); });
  
  li[i].innerHTML = select_optiones[i].innerHTML;
  ul_cont[0].appendChild(li[i]);
  
      }; // Fin For select_optiones
    }; // fin for divs_cont_select
  } // Fin Function 
  
  
  
  var cont_slc = 0;
  function open_select(idx){
  var idx1 =  idx.getAttribute('data-n-select');
    var ul_cont_li = document.querySelectorAll("[data-indx-select='"+idx1+"'] .cont_select_int > li");
  var hg = 0;
  var slect_open = document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].getAttribute('data-selec-open');
  var slect_element_open = document.querySelectorAll("[data-indx-select='"+idx1+"'] select")[0];
   if (isMobileDevice()) { 
    if (window.document.createEvent) { // All
    var evt = window.document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      slect_element_open.dispatchEvent(evt);
  } else if (slect_element_open.fireEvent) { // IE
    slect_element_open.fireEvent("onmousedown");
  }else {
    slect_element_open.click();
  }
  }else {
  
    
    for (var i = 0; i < ul_cont_li.length; i++) {
  hg += ul_cont_li[i].offsetHeight;
  }; 
   if (slect_open == 'false') {  
   document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','true');
   document.querySelectorAll("[data-indx-select='"+idx1+"'] > .cont_list_select_mate > ul")[0].style.height = hg+"px";
   document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
  }else{
   document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','false');
   document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
   document.querySelectorAll("[data-indx-select='"+idx1+"'] > .cont_list_select_mate > ul")[0].style.height = "0px";
   }
  }
  
  } // fin function open_select
  
  function salir_select(indx){
  var select_ = document.querySelectorAll("[data-indx-select='"+indx+"'] > select")[0];
   document.querySelectorAll("[data-indx-select='"+indx+"'] > .cont_list_select_mate > ul")[0].style.height = "0px";
  document.querySelector("[data-indx-select='"+indx+"'] > .icon_select_mate").style.transform = 'rotate(0deg)';
   document.querySelectorAll("[data-indx-select='"+indx+"']")[0].setAttribute('data-selec-open','false');
  }
  
  
  function _select_option(indx,selc){
   if (isMobileDevice()) { 
  selc = selc -1;
  }
      var select_ = document.querySelectorAll("[data-indx-select='"+selc+"'] > select")[0];
  
    var li_s = document.querySelectorAll("[data-indx-select='"+selc+"'] .cont_select_int > li");
    var p_act = document.querySelectorAll("[data-indx-select='"+selc+"'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
  var select_optiones = document.querySelectorAll("[data-indx-select='"+selc+"'] > select > option");
  for (var i = 0; i < li_s.length; i++) {
  if (li_s[i].className == 'active') {
  li_s[i].className = '';
  };
  li_s[indx].className = 'active';
  
  };
  select_optiones[indx].selected = true;
    select_.selectedIndex = indx;
    select_.onchange();
    salir_select(selc); 
  }
  
   


/// ----------------------------

    



const $rootSingle = $('.cSlider--single');
const $rootNav = $('.cSlider--nav');

 $rootSingle.slick({
	slide: '.cSlider__item',
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: false,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $rootNav.on('init', function(event, slick) {
 		$(this).find('.slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
	 	slide: '.cSlider__item',
 		slidesToShow: 7,
 		slidesToScroll: 7,
 		dots: false,
 		focusOnSelect: false,
 		infinite: false,
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 5,
 				slidesToScroll: 5,
 			}
 		}, {
 			breakpoint: 640,
 			settings: {
 				slidesToShow: 4,
 				slidesToScroll: 4,
			}
 		}, {
 			breakpoint: 420,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
		}
 		}]
 	});

 $rootSingle.on('afterChange', function(event, slick, currentSlide) {
 	$rootNav.slick('slickGoTo', currentSlide);
 	$rootNav.find('.slick-slide.is-active').removeClass('is-active');
 	$rootNav.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
 });

 $rootNav.on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	 $rootSingle.slick('slickGoTo', goToSingleSlide);
 });



$('.edit-item__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // variableWidth: true,
  });
  const slider = $(".slider");
  slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

if ($(window).width() > '799'){
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
} 
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
    
   

    breakpoints: {
        // when window width is >= 320px
        767: {
            direction: 'vertical',
        },
    },
    
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

  
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */
  

  
  
