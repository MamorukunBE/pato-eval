var hidder, sideMenu, mainNav;
window.addEventListener('load', function() {
	// Retrieve DOM useful elements
	//-----------------------------
	hidder = document.getElementById('hidder');
	sideMenu = document.getElementById('sidemenu');
	mainNav = document.getElementById('mainnav');

	// Swipper constructor
	//--------------------
	new Swiper('header .swiper-container', {
		direction: 'horizontal',
		loop: true,
		//autoplay: { delay: 5000 },
		pagination: { el: '.swiper-pagination' },
		navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
	});

	// Events processing
	//------------------
	document.getElementById('bgmenu').addEventListener('click', function() {
		sideMenu.style.transform = 'translatex(0)';
		hidder.style.zIndex = '20';
		hidder.style.opacity = '.5';
	});
	document.querySelector('#sidemenu .fa-times').addEventListener('click', function () {
		sideMenu.style.transform = null;
		hidder.style.opacity = null;
		hidder.addEventListener('transitionend', function (e) { hidder.style.zIndex = null; }, { once: true });
	});
	document.addEventListener('scroll', function() { mainNav.classList.toggle('scrolled', window.pageYOffset > 0); });
});