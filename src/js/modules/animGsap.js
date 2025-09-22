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

    // анимация about
    function about() {
        const about = document.querySelector('.about')
        const aboutTitle = document.querySelector('.about__title')
        const aboutText = document.querySelector('.about__text')
        const aboutBtnRow = document.querySelector('.about__btn-row')
        const aboutImg = document.querySelector('.about__img')
        gsap.set([aboutTitle, aboutText, aboutBtnRow], { 
            y: '40px',
            scale: 0.85,
            transformOrigin: 'center bottom',
            opacity: 0
        });

        if(!isWeb) {
            gsap.set(aboutImg, { 
                y: '40px',
                scale: 0.85,
                opacity: 0
            });
        }

        const tlAbout = gsap.timeline({
            scrollTrigger: {
                trigger: about,
                start: `top 30%`, // Срабатывает когда центр элемента в центре экрана
                toggleActions: 'play none none none', // Проигрывает при входе, ничего при выходе
                markers: false // Убрать маркеры для продакшена
            }
        });

        setTimeout(() => {
            tlAbout.to(aboutTitle, 
                { 
                    y: '0px',
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                }, 0
            )
            tlAbout.to(aboutText, 
                { 
                    y: '0px',
                    opacity: 1,
                    scale: 1,
                    delay: 0.3,
                    duration: 0.5,
                    ease: 'power2.out'
                }, 0
            )
            tlAbout.to(aboutBtnRow, 
                { 
                    y: '0px',
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: 0.6,
                    ease: 'power2.out'
                },0
            )
            tlAbout.to(aboutImg, 
                { 
                    y: '0px',
                    opacity: 1,
                    scale: 1,
                    delay: 0.9,
                    duration: 0.5,
                    ease: 'power2.out'
                },0
            )
        }, isWeb ? 3000 : 1000);

        
    }




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
                start: `top ${isWeb ? '20%' : '30%'}`, // Срабатывает когда центр элемента в центре экрана
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




    function calculateOffset(number) {
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
        
        const elementWidth = element.offsetWidth + paddingRight;
        // Убедимся, что значение не отрицательное
        if (number == 1) {
            return offsetRight;
        } else if (number == 2) {
            return elementWidth;
        }
    }

    // Основная анимация
    function initCareRowAnimation() {
        const element = document.querySelector('.care__row');
        const elementContent = document.querySelector('.care__content');
        gsap.set(element, { x: 0 });
        
        const updateAnimation = () => {
            const offset = calculateOffset(1);
            // elementContent.style.height = (elementContent.offsetHeight - offset) + 'px';
            elementContent.style.height = calculateOffset(2) + 'px';

            console.log(elementContent.offsetHeight)

            // Удаляем предыдущий ScrollTrigger если есть
            if (element.scrollTrigger) {
                element.scrollTrigger.kill();
            }
            
            setTimeout(() => {
                // Создаем новую анимацию
                gsap.to(element, {
                    x: offset,
                    ease: "power2.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: '.care__content',
                        start: 'top 15%',
                        end: '90% 10%',
                        scrub: 0.8,
                        markers: false,
                    }
                });
            }, 200);
        };
        
        // Инициализируем и обновляем при ресайзе
        updateAnimation();
        // window.addEventListener('resize', updateAnimation);
    }
    // if (isWeb) {
    //     setTimeout(() => {
    //         initCareRowAnimation()
    //     }, 600);
    // }

     //анимация карточек care__item в моб версии
    function animateStageItem() {
        if (window.innerWidth < 769) {
            const stagesItems = document.querySelectorAll('.care__item');
            
            if (!stagesItems.length) {
                return;
            }

            // Устанавливаем начальное состояние
            gsap.set(stagesItems, {
                // y: '100px',
                // opacity: 0,
                willChange: 'transform, opacity'
            });


            // Создаем анимацию для каждого элемента
            stagesItems.forEach((item, index) => {
                    

                    if (index < stagesItems.length - 1) {
                        let heightItem = item.offsetHeight;
                        console.log(heightItem)
                        gsap.to(item, {
                            scale: '0.9',
                            // opacity: 0,
                            // y: '-0%',
                            

                            scrollTrigger: {
                                trigger: stagesItems[index + 1],
                                start: `top top+=${heightItem + 140}px`,  // Когда верх блока появляется у нижней границы окна
                                end: "top 130px", 
                                scrub: true,          // Плавная привязка к скроллу
                                markers: false,       // Отключить маркеры в продакшене
                                invalidateOnRefresh: true,
                            },
                        });
                    }
            });

            // Обновляем ScrollTrigger после создания всех анимаций
            ScrollTrigger.refresh();
        }
    }

    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         animateStageItem()
    //     },300);
    // })


    // анимация страницы кейса (проигрывается один раз)
    function victoryXilyAnim() {
        const victory = document.querySelector('.victory');
        const victoryXily = document.querySelector('.victory__xily');
        const victoryBacteriumOne = document.querySelector('.victory__bacterium._1');
        const victoryBacteriumTwo = document.querySelector('.victory__bacterium._2');
        const victoryBacteriumThree = document.querySelector('.victory__bacterium._3');
        const victoryBacteriumFour = document.querySelector('.victory__bacterium._4');

        if (!victory) return;

        const aboutCaseHeight = document.querySelector('.about-case')?.offsetHeight || 0;

        let startControl = false;

        if (!startControl) {
            gsap.set([victoryXily,victoryBacteriumOne,victoryBacteriumTwo,victoryBacteriumThree,victoryBacteriumFour], {
                y: '0',
                x:'0',
                opacity: 1,
                willChange: 'transform, opacity'
            });


            console.log('set')
        }

        // Создаем timeline
        const tlVictory = gsap.timeline({
            scrollTrigger: {
                trigger: victory,
                start: `top ${isWeb ? '25%' : '25%'}`, // Когда верх victory будет на 80% высоты viewport
                // end: "bottom 20%", // Когда низ victory будет на 20% высоты viewport
                toggleActions: "play none none none", // Проигрываем один раз при входе в зону
                markers: false, // Отключаем маркеры для продакшена
                // once: true // Гарантируем однократное выполнение
            },
            repeat: -1,       // ✅ бесконечно
            repeatDelay: 2, 
        });

   
        tlVictory.eventCallback("onRepeat", () => {
            gsap.fromTo(
                [victoryBacteriumOne, victoryBacteriumTwo, victoryBacteriumThree, victoryBacteriumFour],
                { opacity: 0, x: "0%", y: "0%" },
                { opacity: 1, duration: 0.5 , ease: "power2.out" }
            );
        });
        

        // Анимация для десктопа
        if (isWeb) {
            tlVictory 
                .to(victoryXily, 
                    { 
                        x: -50 + '%',
                        duration: 1,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 35 + '%',
                        y: -19 + '%',
                        duration: 0.3,
                        ease: "ease",
                    }
                )
                .to(victoryBacteriumThree, 
                    { 
                        x: 300 + '%',
                        y: -80 + '%',
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 16 + '%',
                        y: -35 + '%',
                        duration: 0.7,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 150 + '%',
                        y: 60 + '%',
                        duration: 0.4,
                        ease: "ease",
                    }
                )
                .to(victoryBacteriumFour, 
                    { 
                        x: 200 + '%',
                        y: 300 + '%',
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 200 + '%',
                        y: 60 + '%',
                        duration: 0.65,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -325 + '%',
                        y: 50 + '%',
                        duration: 0.45,
                        ease: 'ease'
                    }
                )
                .to(victoryBacteriumOne, 
                    { 
                        x: -200 + '%',
                        y: -100 + '%',
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -350 + '%',
                        y: 90 + '%',
                        duration: 1,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -200 + '%',
                        y: -40 + '%',
                        duration: 0.3,
                        ease: 'ease'
                    }
                )
                .to(victoryBacteriumTwo, 
                    { 
                        x: 200 + '%',
                        y: -200 + '%',
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 0 + '%',
                        y: 0 + '%',
                        duration: 3,
                        ease: 'power4.out',
                    },
                )

             
        } else {
            tlVictory
                .to(victoryXily, 
                    { 
                        x: -40 + '%',
                        duration: 1,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 30 + '%',
                        y: -35 + '%',
                        duration: 0.3,
                        ease: "ease",
                    }
                )
                .to(victoryBacteriumThree, 
                    { 
                        x: 300 + '%',
                        y: -120 + '%',
                        opacity: 0,
                        duration: 0.2,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 10 + '%',
                        y: 15 + '%',
                        duration: 0.7,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 40 + '%',
                        y: -160 + '%',
                        duration: 0.4,
                        ease: "ease",
                    }
                )
                .to(victoryBacteriumFour, 
                    { 
                        x: 250 + '%',
                        y: -450 + '%',
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 70 + '%',
                        y: -190 + '%',
                        duration: 0.8,
                        ease: "power2.out",
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -90 + '%',
                        y: -70 + '%',
                        duration: 0.45,
                        ease: 'ease'
                    }
                )
                .to(victoryBacteriumOne, 
                    { 
                        x: -200 + '%',
                        y: 250 + '%',
                        opacity: 0,
                        duration: 0.2,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -100 + '%',
                        y: -30 + '%',
                        duration: 1,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: -98 + '%',
                        y: -170 + '%',
                        duration: 0.3,
                        ease: 'ease'
                    }
                )
                .to(victoryBacteriumTwo, 
                    { 
                        x: 40 + '%',
                        y: -400 + '%',
                        duration: 0.3,
                        opacity: 0,
                        ease: 'power2.out'
                    }
                )
                .to(victoryXily, 
                    { 
                        x: 0 + '%',
                        y: 0 + '%',
                        duration: 3,
                        ease: 'power4.out'
                    }
                )
        }
    }
    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         victoryXilyAnim()
    //     },300);
    // })



    //анимация choice__card
    function initChoiceCardAnimation() {
        const choiceCard = document.querySelector('.choice__card');
        const candies = document.querySelectorAll('.choice__card-candy');
        
        if (!choiceCard || candies.length === 0) return;
        
        // Устанавливаем начальное состояние для конфет
        gsap.set(candies, {
            opacity: 0,
            scale: 0.5,
            transformOrigin: 'bottom center'
        });
        
        // Создаем анимацию появления конфет
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: choiceCard,
                start: isWeb?  'top 20%' : 'top center', // Когда верх карточки достигнет 90% высоты экрана
                toggleActions: 'play none none none', // Проигрываем один раз
                markers: false // Убрать в продакшене
            }
        });
        
        // Анимация появления конфет по порядку с задержкой
        tl.to(candies, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15, // Задержка между появлением каждой конфеты
            ease: "back.out(1)" // Эластичный эффект
        });
    }


    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         initChoiceCardAnimation()
    //     },300);
    // })





    // Анимация градиента этапов
    function usefulAnim() {
            const useful = document.querySelector('.useful__trigger');
            const guardTop  = document.querySelector('.guard__top');
            const guardImg  = document.querySelector('.guard__img');
            const guardImgIcon  = document.querySelector('.guard__img-icon');
            const guardTextOne  = document.querySelector('.guard__text.one');
            const guardAdvantOne  = document.querySelector('.guard__advant-row.one');
            const guardTextTwo  = document.querySelector('.guard__text.two');
            const guardAdvantTwo  = document.querySelector('.guard__advant-row.two');

            const guardStar1  = document.querySelector('.guard__star._1');
            const guardStar2  = document.querySelector('.guard__star._2');
            const guardStar3  = document.querySelector('.guard__star._3');
            const guardStar4 = document.querySelector('.guard__star._4');
            const guardStar5  = document.querySelector('.guard__star._5');
            const guardStar6  = document.querySelector('.guard__star._6');

            const structImgOne  = document.querySelector('.struct__img.one');
            const structImgTwo  = document.querySelector('.struct__img.two');
            const structList  = document.querySelector('.struct__list');

            if (!useful) {
                return;
            }
            // guardTop guardImg
            gsap.set([guardImg,guardTop], {
                y: '30%',
                opacity: 0,
                willChange: 'transform, opacity'
            });
    
            gsap.to([guardImg,guardTop], {
                opacity: 1,
                y: '0%',

                scrollTrigger: {
                    trigger: useful,
                    start: `top 50%`,  // Когда верх блока появляется у нижней границы окна
                    end: "top top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
    
            // guardTextOne
            gsap.set(guardTextOne, {
                x: '30%',
                opacity: 0,
                willChange: 'transform, opacity'
            });
    
            gsap.to(guardTextOne, {
                opacity: 1,
                x: '0%',

                scrollTrigger: {
                    trigger: useful,
                    start: `top top`,  // Когда верх блока появляется у нижней границы окна
                    end: "6% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            // guardTextTwo
            gsap.set(guardTextTwo, {
                x: '-60%',
                opacity: 0,
                willChange: 'transform, opacity'
            });
    
            gsap.to(guardTextTwo, {
                opacity: 1,
                x: '0%',

                scrollTrigger: {
                    trigger: useful,
                    start: `top top`,  // Когда верх блока появляется у нижней границы окна
                    end: "6% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            // guardAdvantOne
            gsap.set(guardAdvantOne, {
                y: '40%',
                opacity: '0',
                willChange: 'transform, opacity'
            });
    
            gsap.to(guardAdvantOne, {
                y: '0%',
                opacity: '1',
                scrollTrigger: {
                    trigger: useful,
                    start: `7% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "13% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            // guardAdvantTwo
            gsap.set(guardAdvantTwo, {
                y: '40%',
                opacity: '0',
                willChange: 'transform, opacity'
            });

            gsap.to(guardAdvantTwo, {
                y: '0%',
                opacity: '1',
                scrollTrigger: {
                    trigger: useful,
                    start: `6% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "12% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            // guardImgIcon
            gsap.set(guardImgIcon, {
                scale: '0',
                rotate: '180deg',
                willChange: 'scale'
            });

            gsap.to(guardImgIcon, {
                scale: '1',
                rotate:'0deg',

                scrollTrigger: {
                    trigger: useful,
                    start: `13% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "19% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            // guardStar
            gsap.set([guardStar1, guardStar2, guardStar3, guardStar4, guardStar5, guardStar6], {
                scale: '0',
                willChange: 'scale'
            });

            gsap.to(guardStar1, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `13% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "19% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(guardStar2, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `15% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "19% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(guardStar3, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `14% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "18% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(guardStar4, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `14.5% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "21% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(guardStar5, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `17% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "22% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(guardStar6, {
                scale: '1',

                scrollTrigger: {
                    trigger: useful,
                    start: `13.5% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "23% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            


            //Движение назад
            // guardImgIcon
            gsap.fromTo(guardImgIcon, {}, {
                    scale: '0',
                    rotate:'180deg',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "22% top",  // Когда верх блока появляется у нижней границы окна
                        end: "28% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar1, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "22% top",  // Когда верх блока появляется у нижней границы окна
                        end: "25% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar2, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "23% top",  // Когда верх блока появляется у нижней границы окна
                        end: "28% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar3, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "22% top",  // Когда верх блока появляется у нижней границы окна
                        end: "30% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar4, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "21% top",  // Когда верх блока появляется у нижней границы окна
                        end: "28% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar5, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "25% top",  // Когда верх блока появляется у нижней границы окна
                        end: "30% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );
            gsap.fromTo(guardStar6, {}, {
                    scale: '0',
    
                    scrollTrigger: {
                        trigger: useful,
                        start: "23% top",  // Когда верх блока появляется у нижней границы окна
                        end: "32% top", 
                        scrub: 0.8,          // Плавная привязка к скроллу
                        markers: false,       // Отключить маркеры в продакшене
                        invalidateOnRefresh: true,
                    },
                }
            );

            // guardTextOne
            gsap.fromTo(guardAdvantOne, {}, {
                y: '40%',
                opacity: 0,

                scrollTrigger: {
                    trigger: useful,
                    start: `28% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "34% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            // guardTextTwo
            gsap.fromTo(guardAdvantTwo, {}, {
                y: '40%',
                opacity: 0,

                scrollTrigger: {
                    trigger: useful,
                    start: `29% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "35% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            // guardTextOne
            gsap.fromTo(guardTextOne, {}, {
                opacity: 0,
                x: '30%',

                scrollTrigger: {
                    trigger: useful,
                    start: `35% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "41% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            // guardTextTwo
            gsap.fromTo(guardTextTwo, {}, {
                opacity: 0,
                x: '-60%',

                scrollTrigger: {
                    trigger: useful,
                    start: `35% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "41% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });


            // guardTop guardImg
            gsap.fromTo(guardTop, {}, {
                opacity: 0,
                y: '-100%',

                scrollTrigger: {
                    trigger: useful,
                    start: `41% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "47% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            // guardImg
            gsap.fromTo(guardImg, {}, {
                scale: 0.9,
                x: '200%',
                rotate: '-20deg',

                scrollTrigger: {
                    trigger: useful,
                    start: `41% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "47% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });


            
            //structList
            gsap.set(structList, {
                y: '30%',
                opacity: 0,
                gap: isWeb ? '3.8vw' : '7vw',
                willChange: 'transform, opacity, gap'
            });
    
            gsap.to(structList, {
                y: '0%',
                opacity: 1,
                gap: isWeb ? '2.34375vw' : '3.8461538462vw',
                scrollTrigger: {
                    trigger: useful,
                    start: `47% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "53% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

            // structImgOne, structImgTwo
            gsap.set([structImgOne, structImgTwo], {
                scale: 0.9,
                opacity: 0,
                willChange: 'transform, opacity'
            });
    
            gsap.to(structImgOne, {
                scale: 1,
                opacity: 1,

                scrollTrigger: {
                    trigger: useful,
                    start: `59% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "65% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(structImgTwo, {
                scale: 1,
                opacity: 1,

                scrollTrigger: {
                    trigger: useful,
                    start: `65% top`,  // Когда верх блока появляется у нижней границы окна
                    end: "71% top", 
                    scrub: 0.8,          // Плавная привязка к скроллу
                    markers: false,       // Отключить маркеры в продакшене
                    invalidateOnRefresh: true,
                },
            });

          


            // Обновляем ScrollTrigger после создания всех анимаций
            // ScrollTrigger.refresh();
    }
    
    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         usefulAnim()
    //     },300);
    // })


    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         ScrollTrigger.refresh();
    //     }, 500);
    // })




    window.addEventListener('load', () => {
        requestAnimationFrame(() => {
            if (isWeb) {
                initCareRowAnimation()
            }

            about()

            animateStageItem()
            victoryXilyAnim()
            initChoiceCardAnimation()

            setTimeout(() => {
                usefulAnim();
            }, 200);


            ScrollTrigger.refresh();
        });
    });
    
}
