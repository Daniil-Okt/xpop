/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import MousePRLX from './libs/parallax-mouse.js';
// import MousePRLX from './libs/parallaxMouse'
import AOS from 'aos'
import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import { autoplayVideo } from './modules/autoplayVideo';
import { runningInit } from './libs/running';
import { animGsap } from './modules/animGsap';
import { smoothScroll } from './modules/smoothScroll';
import { validForm } from './modules/validFrom';
import { fixVHUnitsOnMobile } from './modules/fixVHUnitsOnMobile';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';


window.addEventListener('load', smoothScroll)


BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
BaseHelpers.headerFixed();


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */

window.addEventListener('load', () => {
	setTimeout(() => {
		AOS.init();
	}, 1000);
})

/** ===================================================================================
 * Параллакс мышей
 * */
new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
// import { useDynamicAdapt } from './modules/dynamicAdapt.js'
// useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
// import { maskTel } from './modules/index.js'
// maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'

toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
const rewiewsSlider = new Swiper('.reviews__slider', {
  speed: 1200,
  spaceBetween: 0,
  slidesPerView: 'auto',
  modules: [Navigation],

  navigation: {
    prevEl: ".reviews__btn-prev",
    nextEl: ".reviews__btn-next"
  },
});


// const swiper = new Swiper('.swiper', {
//   speed: 800,
//   spaceBetween: 16,
//   slidesPerView: 1.4,
//   modules: [Autoplay, Navigation, Pagination],
//   loop: true,
//   initialSlide: 1,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
//   navigation: {
//     prevEl: ".reviews__button-slider-prev",
//     nextEl: ".reviews__button-slider-next"
//   },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//   	},
//     1650: {
//         slidesPerView: 4,
//         spaceBetween: 48,
//     }
//   },
// });


/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')

//==== валидация ====
const forms = document.querySelectorAll('form')
forms.forEach(form => {
	validForm(form)
});

//==== отправка ====

//==== валидация ====

//==== валидация ====

//==== валидация ====

//==== валидация ====
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)




window.addEventListener('load', fixVHUnitsOnMobile())

window.addEventListener('load', autoplayVideo())

// window.addEventListener('load', animGsap())
animGsap()

window.addEventListener('load', runningInit())





// Прокручивание элемента к низу
const botChat = document.querySelector('.bot-chat');
function scrollToBottomSmooth() {
    botChat.scrollTo({
        top: botChat.scrollHeight,
        behavior: 'smooth'
    });
}
// При загрузке страницы
window.addEventListener('load', scrollToBottomSmooth);
// При изменении содержимого
const observer = new MutationObserver(scrollToBottomSmooth);
observer.observe(botChat, { 
    childList: true, 
    subtree: true 
});


//скрыть показать шапку
class HeaderStickyManager {
    constructor() {
        this.usefulElement = document.querySelector('.useful');
        this.htmlElement = document.documentElement;
        
        this.init();
    }
    
    init() {
        if (!this.usefulElement) return;
        
        this.createObserver();
    }
    
    createObserver() {
        const options = {
            root: null,
            rootMargin: '-5% 0px -5% 0px', // 5vh сверху и 5vh снизу
            threshold: 0
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Элемент visible в зоне 5vh - УБИРАЕМ класс
                    this.htmlElement.classList.add('header-is-hidden');
                } else {
                    // Элемент outside зоны 5vh - ДОБАВЛЯЕМ класс
                    this.htmlElement.classList.remove('header-is-hidden');
                }
            });
        }, options);
        
        this.observer.observe(this.usefulElement);
    }
    
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    new HeaderStickyManager();
});



// Перезагрузка
let resizeTimer;
let currentWidth = window.innerWidth;
const RELOAD_DELAY = 400;
const MIN_WIDTH_CHANGE = 1;

    
function handleResize() {
    const newWidth = window.innerWidth;
    const widthDiff = Math.abs(newWidth - currentWidth);
    
    
    if (widthDiff >= MIN_WIDTH_CHANGE) {
        
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            window.location.reload();r
        }, RELOAD_DELAY);
    }
        
        currentWidth = newWidth;
}

window.addEventListener('resize', handleResize);



//Промотка вверх

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const buttonUp = document.querySelector('.button-up');

if (buttonUp) {
	buttonUp.addEventListener('click', () => {
		scrollToTop()
	})
}




