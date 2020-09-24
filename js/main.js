const menuTrigger = document.querySelector('.header__link--menu');
const navigationBar = document.querySelector('.gl__nav');

menuTrigger.addEventListener('click', (e) => {
	navigationBar.classList.toggle('active');
});


window.addEventListener('scroll', (e) => {
	navigationBar.classList.remove('active');
});