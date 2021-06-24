const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
      for(let index = 0; index < animItems.length; index++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 30;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('animate__animated');
        } else{
          if(!animItem.classList.contains('_anim-nohide')){
            animItem.classList.remove('animate__animated');
          }
        }
      }
    }
    function offset(el){
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
}
// анимация заголовков
const animTitles = document.querySelectorAll('.title');
if(animTitles.length > 0){
for(let index = 0; index < animTitles.length; index++){
    const animTitle = animTitles[index];
    if (animTitle.classList.contains("_active")){
    animTitle.classList.add('animate__animated');
}
}
}



const slider = $(".slider");

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));


$(function (){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		centerPadding: '1px',
		ariableWidth: true,
        fade: true,
        cssEase: 'linear',
        speed: 300,
        autoplay: true,
        autoplaySpeed: 20000,
		// responsive: [
		// 	{
		// 	breakpoint: 768,
		// 	settings: {
		// 	centerMode: false,
		// 	arrows: false,
		// 	slidesToShow: 3,
		// 	vertical: true,
		// 	verticalSwiping: true
		// 	}
		// 	},
		// ]
	});
});

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