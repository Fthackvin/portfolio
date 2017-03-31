
$(document).ready(function(){
	// TweenLite.from($('#sketchbook'), 0, {opacity: 0, y: 0, })
	var header = document.getElementById("logo")
	TweenMax.from(header, 1, {opacity: 0, y: 0})
	TweenMax.to(header, 3, {opacity: 1, y: 10, ease:Power4.fadein})
});


$(document).ready(function(){
	// TweenLite.from($('#sketchbook'), 0, {opacity: 0, y: 0, })
	var text = document.getElementById("text-cereal")
	TweenMax.from(text, 1, {opacity: 0, y: 0})
	TweenMax.to(text, 2, {opacity: 1, y: 0, ease:Power4.fadein})
});


// LOGO

// $(document).ready(function(){
// 	// Init Scrollmagic
// var controller = new ScrollMagic.Controller();


// var slideParallaxScene = new ScrollMagic.Scene({
// triggerElement: ".background8",
// triggerHook: 0.1,
// duration: "300%"
// })
// .setClassToggle('.show-logo', 'show')
// // .addIndicators({
// // name: 'cloud layer LEFT',
// // colorTrigger: 'pink',
// // indent: 750,
// // colorstart:'red'
// // 	})

// .setTween(TweenMax.to(".show", 1, {y:"-10%", ease:Power4.easeNone}))
// .addTo(controller);

// });


// CLOUDS

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".parallax",
triggerHook: 0.2,
duration: "200%"
})
.setClassToggle('.background3', 'move')
// .addIndicators({
// name: 'cloud layer LEFT',
// colorTrigger: 'pink',
// indent: 750,
// colorstart:'red'
// 	})

.setTween(TweenMax.to(".background3", 1, {y:"-20%", x:"-10%", ease:Power4.easeNone}))
.addTo(controller);

});


// CLOUDS RIGHT

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background3",
triggerHook: 0.4,
duration: "100%"
})
.setClassToggle('.background4', 'move')
// .addIndicators({
// name: 'cloud layer RIGHT 1',
// colorTrigger: 'pink',
// indent: 250,
// colorstart:'red'
// 	})

.setTween(TweenMax.to(".background4", 0.9, {y:"-10%", x:"3%", ease:Power4.easeNone}))
.addTo(controller);

});



$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background3",
triggerHook: 0.3,
duration: "100%"
})
.setClassToggle('.background5', 'move')
// .addIndicators({
// name: 'cloud layer RIGHT 2',
// colorTrigger: 'pink',
// indent: 200,
// colorstart:'red'
// 	})

.setTween(TweenMax.to(".background5", 1, {y:"-10%", x:"5%", ease:Power4.easeNone}))
.addTo(controller);

});


// ----------------------------------------------- //


// RAYS

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background5",
triggerHook: 0.45,
duration: "100%"
})
.setClassToggle('.background2', 'move')
// .addIndicators({
// name: 'cloud rays',
// colorTrigger: 'yellow',
// indent: 100,
// colorstart:'yellow'
// 	})

.setTween(TweenMax.to(".background2", 2, {rotation:10, transformOrigin:"left 60%"}))
// .setTween(TweenMax.to(".background2", 1, {z:"-10%", ease:Circ.easeNone}))
.addTo(controller);

});


// SUN


$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background5",
triggerHook: 0.45,
duration: "100%"
})
.setClassToggle('.background9', 'move')
// .addIndicators({
// name: 'cloud rays',
// colorTrigger: 'yellow',
// indent: 100,
// colorstart:'yellow'
// 	})

.setTween(TweenMax.to(".background9", 3, {y:"9%", }))
// .setTween(TweenMax.to(".background2", 1, {z:"-10%", ease:Circ.easeNone}))
.addTo(controller);

});



// BLUEHILLS

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background9",
triggerHook: 0.5,
duration: "180%"
})
.setClassToggle('.background10', 'move')
// .addIndicators({
// name: 'Blue Hill Left',
// colorTrigger: 'orange',
// indent: 500,
// colorstart:'orange'
// 	})

.setTween(TweenMax.to(".background10", 4, {y:"9%", ease:Power4.easeNone}))
.addTo(controller);

});

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background9",
triggerHook: 0.5,
duration: "130%"
})
.setClassToggle('.background11', 'move')
// .addIndicators({
// name: 'Bluehill RIGHT',
// colorTrigger: 'orange',
// indent: 250,
// colorstart:'orange'
// 	})

.setTween(TweenMax.to(".background11", 4, {y:"6%", ease:Power4.easeNone}))
// .setTween(TweenMax.to(".background2", 1, {z:"-10%", ease:Circ.easeNone}))
.addTo(controller);

});



// GREENHILLS



$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background11",
triggerHook: 0.48,
duration: "120%"
})
.setClassToggle('.background10', 'move')
// .addIndicators({
// name: 'GREENHILLS RIGHT',
// colorTrigger: 'purple',
// indent: 350,
// colorstart:'purple'
// 	})

.setTween(TweenMax.to(".background12", 2, {y:"-4%", ease:Power4.easeNone}))
.addTo(controller);

});

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background12",
triggerHook: 0.5,
duration: "120%"
})
.setClassToggle('.background13', 'move')
// .addIndicators({
// name: 'GREENHILLS LEFT',
// colorTrigger: 'purple',
// indent: 150,
// colorstart:'purple'
// 	})

.setTween(TweenMax.to(".background13", 4, {y:"-12%", ease:Power4.easeNone}))
.addTo(controller);

});

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background12",
triggerHook: 0.49,
duration: "120%"
})
.setClassToggle('.background113', 'move')
// .addIndicators({
// name: 'GREENHILLS MIDDLE',
// colorTrigger: 'purple',
// indent: 150,
// colorstart:'purple'
// 	})

.setTween(TweenMax.to(".background113", 3, {y:"-10%", ease:Power4.easeNone}))
.addTo(controller);

});


// CORNFIELD

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background12",
triggerHook: 0.5,
duration: "140%"
})
.setClassToggle('.background14', 'move')
// .addIndicators({
// name: 'GREENHILLS LEFT',
// colorTrigger: 'yellow',
// indent: 150,
// colorstart:'purple'
// 	})

.setTween(TweenMax.to(".background14", 2, {y:"-15%", x:"2%", rotation:5, ease:Power4.easeNone}))
.addTo(controller);

});





// TREELINE

$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background14",
triggerHook: 0.2,
duration: "100%"
})
.setClassToggle('.background15', 'move')
// .addIndicators({
// name: 'treeline 1',
// colorTrigger: 'blue',
// indent: 100,
// colorstart:'blue'
// 	})

.setTween(TweenMax.to(".background15", 3, {y:"-20%", ease:Power4.easeNone}))
.addTo(controller);

});



$(document).ready(function(){
	// Init Scrollmagic
var controller = new ScrollMagic.Controller();


var slideParallaxScene = new ScrollMagic.Scene({
triggerElement: ".background14",
triggerHook: 0.2,
duration: "100%"
})
.setClassToggle('.background16', 'move')
// .addIndicators({
// name: 'Treeline 2',
// colorTrigger: 'blue',
// indent: 50,
// colorstart:'blue'
// 	})

.setTween(TweenMax.to(".background16", 2, {y:"-24%", ease:Power4.easeNone}))
.addTo(controller);

});




