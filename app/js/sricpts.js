var burger = document.querySelector('.burger-button__button');
var mainMenu = document.querySelector('.site-nav');
var scrollSlider = document.querySelector('.slider-overflow')




document.addEventListener('DOMContentLoaded', function() {
	var xwidth = (scrollSlider.scrollWidth/3) - (scrollSlider.scrollWidth/30);
	console.log(xwidth);
	scrollSlider.scrollTo(xwidth, 0);
}, false);

document.querySelector('#prices-dot1').addEventListener('click', function(){
	var xwidth = (scrollSlider.scrollWidth/3) - (scrollSlider.scrollWidth/3);
	console.log(xwidth);
	scrollSlider.scrollTo(xwidth, 0);
	document.querySelector('#prices-dot1').classList.add('slider-dots__dot--current');
	document.querySelector('#prices-dot2').classList.remove('slider-dots__dot--current');
	document.querySelector('#prices-dot3').classList.remove('slider-dots__dot--current');
});
document.querySelector('#prices-dot3').addEventListener('click', function(){
	var xwidth = (scrollSlider.scrollWidth);
	console.log(xwidth);
	scrollSlider.scrollTo(xwidth, 0);
	document.querySelector('#prices-dot3').classList.add('slider-dots__dot--current');
	document.querySelector('#prices-dot1').classList.remove('slider-dots__dot--current');
	document.querySelector('#prices-dot2').classList.remove('slider-dots__dot--current');
});
document.querySelector('#prices-dot2').addEventListener('click', function(){
	var xwidth = (scrollSlider.scrollWidth/3) - (scrollSlider.scrollWidth/30);
	console.log(xwidth);
	scrollSlider.scrollTo(xwidth, 0);
	document.querySelector('#prices-dot2').classList.add('slider-dots__dot--current');
	document.querySelector('#prices-dot1').classList.remove('slider-dots__dot--current');
	document.querySelector('#prices-dot3').classList.remove('slider-dots__dot--current');
});



burger.addEventListener("click", function(){
	mainMenu.classList.toggle('site-nav--deployed');
	if(mainMenu.classList.contains('site-nav--deployed')){
		window.scrollTo(0, 0);
	}
});