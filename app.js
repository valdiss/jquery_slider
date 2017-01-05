$(document).ready(function() {
  let speed = 5000;
  let run = setInterval('slide()', speed);

  $('.slideshow li:first').before($('.slideshow li:last'));
  $('.slideshow ul').css({left: -1000});

  $('.left').click(function(){
    let decalage = 0;
    $('.slideshow ul').animate({'left' : decalage}, 1000, function (){
      $('.slideshow li:first').before($('.slideshow li:last'));
      $('.slideshow ul').css({left: -1000});
    })
  });

  $('.right').click(function(){
    let decalage = -2000;
    $('.slideshow ul').animate({'left' : decalage}, 1000, function (){
      $('.slideshow li:last').after($('.slideshow li:first'));
      $('.slideshow ul').css({left: -1000});
    })
  });

  $('.wrapper').hover(

		function() {
			clearInterval(run);
		},
		function() {
			run = setInterval('slide()', speed);
		}
	);

});

function slide() {
  $('.right').click();
}
