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