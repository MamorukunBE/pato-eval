var hidder, sideMenu, mainNav, galeryOptionsBtns, $isoGalery;
window.addEventListener('load', function() {
	// Retrieve DOM useful elements
	//-----------------------------
	hidder = document.getElementById('hidder');
	sideMenu = document.getElementById('sidemenu');
	mainNav = document.getElementById('mainnav');

	// Home page specifics
	//--------------------
	let headerSwipperOptions;
	if (document.body.id == 'home') {
		// Local constructions
		//--------------------
		headerSwipperOptions = {
			direction: 'horizontal',
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: '.swiper-pagination' },
			navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', scale: 1.6 },
		};
		//-----
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
	} else if (document.body.id == 'gallery') {
		// Local constructions
		//--------------------
		headerSwipperOptions = { direction: 'horizontal' };
		//-----
		$isoGalery = $('#isogrid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows',
			percentPosition: true,
			fitRows: { gutter: '.gutter-sizer' },
			masonry: { columnWidth: '.grid-sizer' }
		});		
	} else if (document.body.id == 'contact') {
		// Local constructions
		//--------------------
		headerSwipperOptions = { direction: 'horizontal' };

		// Local events processing
		//------------------------
		document.getElementById('sendmsg').addEventListener('click', function (e) { alert("TODO"); });
	}

	// Header swippers construction
	//-----------------------------
	new Swiper('header .swiper-container', headerSwipperOptions);

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
	//-----
	if (document.body.id == 'gallery') {
		galeryOptionsBtns = Array.from(document.querySelectorAll('#galeryoptions .btn'));
		galeryOptionsBtns.forEach(function(item) {
			item.addEventListener('click', function(e) {
				galeryOptionsBtns.forEach(item => item.classList.toggle('active', item == this));
				switch (this.dataset.id) {
					case "0": { $isoGalery.isotope({ filter: '*' }); break; }
					case "1": { $isoGalery.isotope({ filter: '.interior' }); break; }
					case "2": { $isoGalery.isotope({ filter: '.food' }); break; }
					case "3": { $isoGalery.isotope({ filter: '.events' }); break; }
					case "4": { $isoGalery.isotope({ filter: '.guests' }); break; }
				}
			});
		});
	}
});