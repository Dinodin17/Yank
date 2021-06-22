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

