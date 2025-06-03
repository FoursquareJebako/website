
import Swiper from './lib/swiper/swiper-esm.min.js'


const servicesSwiper = new Swiper('#services-swiper', {
	
	slidesPerView: 'auto', 
	centeredSlides: true, 
	spaceBetween: 20,
	direction: 'horizontal',
	grabCursor: true, 
	loop: true, 
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		760: {
			slidesPerView: 2,
		},
		
		1300: {
			slidesPerView: 3,
		}
	},
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


const minSwiper = new Swiper('#min-swiper', {
	
	slidesPerView: 'auto', 
	centeredSlides: true, 
	spaceBetween: 20,
	direction: 'horizontal',
	grabCursor: true, 
	loop: true, 
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		760: {
			slidesPerView: 2,
		},
		
		1300: {
			slidesPerView: 3,
		}
	},
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

export { servicesSwiper, minSwiper } ;