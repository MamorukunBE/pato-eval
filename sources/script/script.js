var hidder, sideMenu, mainNav;
window.addEventListener('load', function() {
	// Retrieve DOM useful elements
	//-----------------------------
	hidder = document.getElementById('hidder');
	sideMenu = document.getElementById('sidemenu');
	mainNav = document.getElementById('mainnav');

	// Home page specifics
	//--------------------
	if (document.body.id == 'home') {
		// Swippers construction
		//----------------------
		new Swiper('header .swiper-container', {
			direction: 'horizontal',
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: '.swiper-pagination' },
			navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', scale: 1.6 },
		});
		new Swiper('#review .swiper-container', {
			direction: 'horizontal',
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: '.swiper-pagination' },
			navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', scale: 1.6 },
		});

		// Youtube lightboxes initialisations
		//-----------------------------------
		$(function () {
			$(".video-link").jqueryVideoLightning({
				autoplay: 1,
				backdrop_color: "#ddd",
				backdrop_opacity: 0.6,
				glow: 20,
				glow_color: "#000"
			});
		});
	}
	
	// Events processing
	//------------------
	document.getElementById('bgmenu').addEventListener('click', function() {
		sideMenu.style.transform = 'translatex(0)';
		hidder.style.zIndex = '110';
		hidder.style.opacity = '.5';
	});
	document.querySelector('#sidemenu .fa-times').addEventListener('click', function () {
		sideMenu.style.transform = null;
		hidder.style.opacity = null;
		hidder.addEventListener('transitionend', function (e) { hidder.style.zIndex = null; }, { once: true });
	});
	document.addEventListener('scroll', function() { mainNav.classList.toggle('scrolled', window.pageYOffset > 0); });
});