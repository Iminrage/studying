var burger = document.querySelector('.burger-button__button');
var mainMenu = document.querySelector('.site-nav');

burger.addEventListener("click", function(){
	mainMenu.classList.toggle('site-nav--deployed');
	if(mainMenu.classList.contains('site-nav--deployed')){
		window.scrollTo(0, 0);
	}
});