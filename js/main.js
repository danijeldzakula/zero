const menuTrigger = document.querySelector('.header__link--menu');
const navigationBar = document.querySelector('.gl__nav');

menuTrigger.addEventListener('click', (e) => {
	navigationBar.classList.toggle('active');
});


window.addEventListener('scroll', (e) => {
	navigationBar.classList.remove('active');
});


var getDate = new Date();
var getMount = new Date(getDate.getTime() - 0 * 86400000);
var months = 'januara,februara,marta,aprila,maja,juna,jula,avgusta,septembra,oktobra,novembra,decembra'.split(',');
var today = (getMount.getDate() + ' ' + months[getMount.getMonth()]);
var selectDate = document.getElementsByClassName('nowdate');
var getNowDate = selectDate.length;

while (getNowDate--) {
    selectDate[getNowDate].textContent = today;
}