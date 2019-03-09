var burger = document.querySelector('.burger-button__button');
var mainMenu = document.querySelector('.site-nav');
var scrollSlider = document.querySelector('.slider-overflow')




document.addEventListener('DOMContentLoaded', function() {
	var xwidth = (scrollSlider.scrollWidth/3) - (scrollSlider.scrollWidth/30);
	console.log(xwidth);
	scrollSlider.scrollTo(xwidth, 0);
}, false);

burger.addEventListener("click", function(){
	mainMenu.classList.toggle('site-nav--deployed');
	if(mainMenu.classList.contains('site-nav--deployed')){
		window.scrollTo(0, 0);
	}
});