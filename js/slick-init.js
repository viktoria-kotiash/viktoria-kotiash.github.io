$(document).ready(function(){
	$('#sl-01').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:false,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
});

$(document).ready(function(){
$('#sl-02').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:false,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
});