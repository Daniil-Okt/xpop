// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap/ScrollSmoother';


import Lenis from 'lenis'



export function smoothScroll() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
  if (isTouchDevice) return null;

  const mainLenis = new Lenis({
      lerp: 0.09,
      smooth: true,
      direction: 'vertical',
      wrapper: window,
      content: document.documentElement,
  });

//   const menuRight = document.querySelector('.menu-right');
//   let menuRightLenis = null;

//   if (menuRight) {
//       const container = menuRight.querySelector('.menu-right__list') || menuRight;

//       menuRightLenis = new Lenis({
//           lerp: 0.09,
//           smooth: true,
//           direction: 'vertical',
//           wrapper: menuRight,
//           content: container,
//       });
//   }

  function raf(time) {
      mainLenis.raf(time);
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return { main: mainLenis };
}

