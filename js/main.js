import {$} from './core.js';

let header = $('header');
let menuIcon = $('menu-icon', 'id');
let menuMobile = $('menu-mobile', 'id');
let scrolling = false;


window.onscroll = () => {
	scrolling = true;
}

setInterval(() => {
	//throttle scroll event
	if (scrolling) {
		scrolling = false;
		toggleHeader();
	}
}, 300)

let toggleHeader = () => {
	if (window.scrollY == 0) {
		if (!menuMobile.classList.contains('open')) {
			header.classList.remove('top')
		}
	} else {
		header.classList.add('top');
	}
}

menuIcon.onclick = () => {
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
		toggleHeader()
	} else {
		menuMobile.classList.add('open');
		if (!header.classList.contains('top')) {
			header.classList.add('top');
		}
	}
}














toggleHeader()