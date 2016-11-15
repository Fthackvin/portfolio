
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

//Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene	
	var ourScene = new ScrollMagic.Scene ({
		triggerElement: '#triggertopimage',
		duration: '100%',
    	triggerHook: 0.8
	})
	.setClassToggle('#computer_layer_1', 'fade-in')
	.addIndicators({
		name: 'bottom layer',
		colorTrigger: 'pink',
		indent: 200,
		colorstart:'red'
	})
	.addTo(controller);

});


$(document).ready(function(){

//Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene	
	var ourScene = new ScrollMagic.Scene ({
		triggerElement:'#computer_layer_4_top',
		duration: '120%',
    	triggerHook: 0.79
	})
	.setClassToggle('#computer_layer_2', 'fade-in')
	.addIndicators({
		name: 'second layer',
		colorTrigger: 'pink',
		indent: 250,
		colorstart:'red'
	})
	.addTo(controller);

});


$(document).ready(function(){

//Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene	
	var ourScene = new ScrollMagic.Scene ({
		triggerElement: '#computer_layer_2',
		duration: '140%',
    	triggerHook: 0.78
	})
	.setClassToggle('#computer_layer_3', 'fade-in')
	// .addIndicators({
	// 	name: 'third layer',
	// 	colorTrigger: 'pink',
	// 	indent: 300,
	// 	colorstart:'red'
	// })
	.addTo(controller);

});


$(document).ready(function(){

//Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene	
	var ourScene = new ScrollMagic.Scene ({
		triggerElement: '#computer_layer_1',
		duration: '160%',
    	triggerHook: 0.76
	})
	.setClassToggle('#computer_layer_4_top', 'fade-in')
	.addIndicators({
		name: 'top layer',
		colorTrigger: 'pink',
		indent: 350,
		colorstart:'red'
	})
	.addTo(controller);

});