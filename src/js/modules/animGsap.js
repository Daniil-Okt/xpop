import { gsap } from "gsap";
// import { Physics2DPlugin } from "gsap/Physics2DPlugin"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from 'gsap/SplitText';
// import { CustomEase } from "gsap/CustomEase";



// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({
    ignoreMobileResize: true
});

export function animGsap() {

    const isWeb =  window.innerWidth > 1150 ? true : false;


    // Анимация для элемента .acqua__xily
 
    function animAcquaXily() {
        const acquaXily = document.querySelector('.acqua__xily')

        gsap.set(acquaXily, { 
            y: isWeb ? '50%' : '40%' ,
            x: isWeb ? '-50%' : '-60%' 
        });
    
        gsap.to(acquaXily, {
            keyframes: [
                {
                    y: '0%',
                    x: '7%',         // Первый этап: движение по Y к 0
                    duration: 0.5,
                    ease: "power2.out"
                },
                {
                    x: '0%',       // Второй этап: движение по X к -5%
                    duration: 0.4,
                    ease: "power1.out"
                },
            ],
            scrollTrigger: {
                trigger: '.acqua',
                start: `top ${isWeb ? 'center' : '65%'}`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });
    }
    animAcquaXily()

    // Анимация для элемента .acqua__dialog.one
    function acquaDialogOne() {
        const acquaDialogOne = document.querySelector('.acqua__dialog.one')
        const acquaTitleOne = document.querySelector('.acqua__item-title.one')

        gsap.set([acquaDialogOne, acquaTitleOne], { 
            x: '-7%' ,
            opacity: 0
        });
    
        gsap.to([acquaDialogOne, acquaTitleOne], {
            x: '0%',
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.out",
            
            scrollTrigger: {
                trigger: '.acqua',
                start: `top ${isWeb ? 'center' : '65%'}`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });
    }
    acquaDialogOne()

    function acquaDialogTwo() {
        const acquaDialogTwo = document.querySelector('.acqua__dialog.two')

        gsap.set(acquaDialogTwo, { 
            x: '-7%' ,
            opacity: 0
        });
    
        gsap.to(acquaDialogTwo, {
            x: '0%',
            opacity: 1,
            duration: 0.5,
            delay: 1.1,
            ease: "power2.out",
            
            scrollTrigger: {
                trigger: '.acqua',
                start: `top ${isWeb ? 'center' : '65%'}`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });
    }
    acquaDialogTwo()


    function acquaDoctor() {
        const acquaDoctor = document.querySelector('.acqua__doctor')

        gsap.set(acquaDoctor, { 
            scale: 0.9,
            opacity: 0
        });
    
        gsap.to(acquaDoctor, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 1.6,
            ease: "power2.out",
            
            scrollTrigger: {
                trigger: '.acqua',
                start: `top ${isWeb ? 'center' : '50%'}`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });
    }
    acquaDoctor()

    // Анимация для элемента .acqua__dialog.three
    function acquaDialogThree() {
        const acquaDialogThree = document.querySelector('.acqua__dialog.three')
        const acquaTitleTwo = document.querySelector('.acqua__item-title.two')

        gsap.set([acquaDialogThree, acquaTitleTwo], { 
            x: '7%' ,
            opacity: 0
        });
    
        gsap.to([acquaDialogThree, acquaTitleTwo], {
            x: '0%',
            opacity: 1,
            duration: 0.5,
            delay: 2.3,
            ease: "power2.out",
            
            scrollTrigger: {
                trigger: '.acqua',
                start: `top ${isWeb ? 'center' : '50%'}`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });
    }
    acquaDialogThree()



    function calculateOffset() {
        const element = document.querySelector('.care__row');
        const elementContainer = document.querySelector('.care__container');
        
        if (!element || !elementContainer) {
            console.error('Элементы .care__row или .care__container не найдены');
            return 0;
        }
        
        const elementRect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Получаем реальное значение padding-right, а не из style
        const computedStyle = window.getComputedStyle(elementContainer);
        const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
        
        // Правильный расчет offset
        const offsetRight = viewportWidth - elementRect.right - paddingRight;
        
        // Убедимся, что значение не отрицательное
        return offsetRight;
    }

    // Основная анимация
    function initCareRowAnimation() {
        const element = document.querySelector('.care__row');
        
        gsap.set(element, { x: 0 });
        
        const updateAnimation = () => {
            const offset = calculateOffset();
            
            // Удаляем предыдущий ScrollTrigger если есть
            if (element.scrollTrigger) {
                element.scrollTrigger.kill();
            }
            
            // Создаем новую анимацию
            gsap.to(element, {
                x: offset,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: element,
                    start: 'center center',
                    end: '+=100%',
                    scrub: 0.8,
                    pin: true,

                    anticipatePin: 1,
                    markers: false
                }
            });
        };
        
        // Инициализируем и обновляем при ресайзе
        updateAnimation();
        window.addEventListener('resize', updateAnimation);
    }

    if (isWeb) {
        setTimeout(() => {
            initCareRowAnimation()
        }, 100);
    }
}
