/* --- СЛАЙДЕР BANNER --- */
const swiperBanner = new Swiper(".header__bottom.swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,

	navigation: {
		nextEl: ".header .swiper-button-next",
		prevEl: ".header .swiper-button-prev",
	},
	
	pagination: {
		el: ".header .swiper-pagination",
		clickable: true
	}
});



/* --- СЛАЙДЕР LINE UP --- */
const swiperLineUp = new Swiper(".lineup-cards.swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 3,
	spaceBetween: 36,

	navigation: {
		nextEl: ".section--lineup .swiper-button-next",
		prevEl: ".section--lineup .swiper-button-prev",
	},
	
	pagination: {
		el: ".section--lineup .swiper-pagination",
		clickable: true
	},
	
	breakpoints: {
		1921 : {
			slidesPerView: 3
		},
		1181 : {
			slidesPerView: 3
		},
		769 : {
			slidesPerView: 2
		},
		0: {
			slidesPerView: 1
		}
	}
});



/* --- СЛАЙДЕР PROMOTIONS --- */
const swiperPromotions = new Swiper(".promotions-items.swiper", {
	direction: "horizontal",
	loop: false,
//	allowTouchMove:false,
	slidesPerView: 3,
	spaceBetween: 36,

	navigation: {
		nextEl: ".section--promotions .swiper-button-next",
		prevEl: ".section--promotions .swiper-button-prev",
	},
	
	pagination: {
		el: ".section--promotions .swiper-pagination",
		clickable: true
	},
	
	breakpoints: {
		1025 : {
			slidesPerView: 3
		},
		535: {
			slidesPerView: 2,
			loop: true,
//			allowTouchMove:true,
		},
		0: {
			slidesPerView: 1,
			loop: true
		}
	}
});


/* --- СЛАЙДЕР AVAILABLES --- */
const swiperAvailables = new Swiper(".availables-cards.swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 4,
	spaceBetween: 36,

	navigation: {
		nextEl: ".section--availables .swiper-button-next",
		prevEl: ".section--availables .swiper-button-prev",
	},
	
	pagination: {
		el: ".section--availables .swiper-pagination",
		clickable: true
	},
	
	breakpoints: {
		1181 : {
			slidesPerView: 4
		},
		769 : {
			slidesPerView: 3
		},
		535: {
			slidesPerView: 2
		},
		0: {
			slidesPerView: 1
		}
	}
});



/* --- СЛАЙДЕР ADVANTAGES --- */
const swiperAdvantages = new Swiper(".advantages__items.swiper", {
	direction: "horizontal",
	loop: false,
//	allowTouchMove:false,
	slidesPerView: 3,
	spaceBetween: 36,
	
	pagination: {
		el: ".section--advantages .swiper-pagination",
		clickable: true
	},
	
	breakpoints: {
		1025 : {
			slidesPerView: 3
		},
		535: {
			slidesPerView: 2,
			loop: true,
//			allowTouchMove:true,
		},
		0: {
			slidesPerView: 1,
			loop: true
		}
	}
});



/* --- МЕНЮ --- */

const menuButton = document.querySelector(".navigation-menu-button");

const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function() {
	if (!this.classList.contains("active")) {
		this.classList.toggle("active");
		menu.classList.toggle("active");
	}
})


const closeButton = document.querySelector(".button-close");

closeButton.addEventListener("click", function() {
	if (menu.classList.contains("active")) {
		menu.classList.toggle("active");
		menuButton.classList.toggle("active");
	}
})



/* --- СКРЫТИЕ ХЭДЕРА ПРИ СКРОЛЛЕ ВНИЗ / ПОКАЗ ПРИ СКРОЛЛЕ ВВЕРХ --- */
document.addEventListener("DOMContentLoaded", () => { // DOM готов к взаимодейтсвию

  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = document.querySelector(".header__top") // находим header и записываем в константу

    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener("scroll", () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains("header_hidden") // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.add("header_hidden") // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove("header_hidden") // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })

  }

  onScrollHeader() // вызываем основную функцию onScrollHeader

});




/* --- ACCORDION --- */
let accordion = document.getElementsByClassName("accordion-dispatcher");

for (let i = 0; i < accordion.length; i++) {
	let currentAccordion = accordion[i];
	
	currentAccordion.addEventListener("click", function() {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;

		if (currentAccordion.classList.contains("active")) {
//			console.log(true);
//			console.log(panel.scrollHeight);
			panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
//			console.log(false);
//			console.log(panel.scrollHeight);
			panel.style.maxHeight = null;
		}
	});
}