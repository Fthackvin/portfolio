
$(document).ready(function(){
	// TweenLite.from($('#sketchbook'), 0, {opacity: 0, y: 0, })
	var header = document.getElementById("sketchbook")
	TweenMax.from(header, 1, {opacity: 0, y: 0})
	TweenMax.to(header, 3, {opacity: 1, y: 10, ease:Power4.fadein})

	var header1 = document.getElementById("pencil")
	TweenMax.from(header1, 3, {opacity: 0, y: 10, x:10, ease:Back.easeOut, delay:0.9} )
	// TweenMax.to(header1, 3, {opacity: 1, ease:Power4.fadein})
});

$(document).ready(function(){

	//init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build  scene 
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#developer_image_container',
		duration: '80%',
		triggerHook: 0.9,
		// reverse: false
	})
	.setClassToggle('#computer_layer_1', 'fade-in') // add class to Developer
	.addIndicators({
		colorTrigger:'pink',
		indent: 100,
		colorStart:'red',

	})
	// .setTween ("#computer_layer_1,", 0.5, {opacity: 1, y: 10,})

	.addTo(controller);
	var loglevel = controller.loglevel(3);
});