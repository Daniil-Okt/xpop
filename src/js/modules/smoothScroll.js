// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap/ScrollSmoother';


import Lenis from 'lenis'



export function smoothScrol() {
    if (window.innerWidth > 768) {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
        if (isTouchDevice) return null;
    
        const mainLenis = new Lenis({
            lerp: 0.09,
            smooth: true,
            direction: 'vertical',
            wrapper: window,
            content: document.documentElement,
        });
    
    //   const popups = document.querySelectorAll('.popup');
    //   popups.forEach(popup => {
    //     let menuRightLenis = null;
    
    //     if (popup) {
    //         const container = popup.querySelector('.popup__wrapper') || popup;
    //         menuRightLenis = new Lenis({
    //             lerp: 0.09,
    //             smooth: true,
    //             direction: 'vertical',
    //             wrapper: popup,
    //             content: container,
    //         });
    //     }
    //   });
   
    
      
        function raf(time) {
            mainLenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);


        return { main: mainLenis };
    }
}


export function smoothScroll() {
    if (window.innerWidth > 768) {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
        if (isTouchDevice) return null;

        const mainLenis = new Lenis({
            lerp: 0.09,
            smooth: true,
            direction: 'vertical',
            wrapper: window,
            content: document.documentElement,
        });

        const popupLenisInstances = new Map();

        // Функция для создания Lenis для popup
        function createPopupLenis(popup) {
            const container = popup.querySelector('.popup__wrapper') || popup;
            const popupLenis = new Lenis({
                lerp: 0.09,
                smooth: true,
                direction: 'vertical',
                wrapper: popup,
                content: container,
            });
            
            popupLenisInstances.set(popup, popupLenis);
            return popupLenis;
        }

        // Функция для удаления Lenis при закрытии popup
        function destroyPopupLenis(popup) {
            const popupLenis = popupLenisInstances.get(popup);
            if (popupLenis) {
                popupLenis.destroy();
                popupLenisInstances.delete(popup);
            }
        }

        // Наблюдатель за появлением/исчезновением popup
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.classList.contains('popup')) {
                        createPopupLenis(node);
                    }
                });

                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.classList.contains('popup')) {
                        destroyPopupLenis(node);
                    }
                });
            });
        });

        // Начинаем наблюдение за body
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Инициализируем уже существующие popup
        document.querySelectorAll('.popup').forEach(popup => {
            createPopupLenis(popup);
        });

        function raf(time) {
            mainLenis.raf(time);
            
            // Обновляем все экземпляры popup Lenis
            popupLenisInstances.forEach(popupLenis => {
                popupLenis.raf(time);
            });
            
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);

        return { 
            main: mainLenis,
            popups: popupLenisInstances,
            destroy: () => {
                observer.disconnect();
                popupLenisInstances.forEach(popupLenis => {
                    popupLenis.destroy();
                });
                mainLenis.destroy();
            }
        };
    }
}