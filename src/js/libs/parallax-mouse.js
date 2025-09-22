/**
 * Модуль параллакса мышью
 * (c) Фрилансер по жизни, Хмурый Кот
 * Документация:
 *
 * Предмету, который будет двигаться за мышью указать атрибут data-prlx-mouse.
 *
 * Если нужны дополнительные настройки - указать
 * Атрибут											      Значение по умолчанию
 * ----------------------------------------------------------------------------------------------------------
 * data-prlx-cx="коэффициент_х"				100							      значение больше - меньше процент сдвига
 * data-prlx-cy="коэффициент_y"				100							      значение больше - меньше процент сдвига
 * data-prlx-dxr																		        против оси X
 * data-prlx-dyr																		        против оси Y
 * data-prlx-a="скорость_анимации"		50							      больше значение - больше скорость
 *
 * Если нужно считывать движение мыши в блоке-родителе - тому родителю указать атрибут data-prlx-mouse-wrapper
 * Если в параллаксе картинка - расстянуть ее на >100%.
 * Например: {
 *  width: 130%;
 * 	height: 130%;
 * 	top: -15%;
 * 	left: -15%;
 * }
 * */
class MouePRLX {
  constructor(props) {
    const defaultConfig = {
      init: true,
    };

    this.config = Object.assign(defaultConfig, props);

    if (this.config.init) {
      const paralaxElements = document.querySelectorAll('[data-prlx-mouse]');

      if (paralaxElements.length) {
        this.init(paralaxElements);
      }
    }
  }

  init(paralaxElements) {
    paralaxElements.forEach((element) => {
      const paralaxMouseWrapper = element.closest('[data-prlx-mouse-wrapper]');

      /** Коэффициент X */
      const paramCoefficientX = element.dataset.prlxCx
        ? Number(element.dataset.prlxCx)
        : 100;

      /** Коэффициент. У */
      const paramCoefficientY = element.dataset.prlxCy
        ? Number(element.dataset.prlxCy)
        : 100;

      /** Направление Х и Y */
      const directionX = element.hasAttribute('data-prlx-dxr') ? -1 : 1;
      const directionY = element.hasAttribute('data-prlx-dyr') ? -1 : 1;

      /** Скорость анимации */
      const paramAnimation = element.dataset.prlxA
        ? Number(element.dataset.prlxA)
        : 50;

      let positionX = 0;
      let positionY = 0;
      let coordXPercent = 0;
      let coordYPercent = 0;

      setMouseParallaxStyle();

      /** Проверка на наличие родителя, в котором будет считываться положение мыши */
      if (paralaxMouseWrapper) {
        mouseMoveParallax(paralaxMouseWrapper);
      } else {
        mouseMoveParallax();
      }

      function setMouseParallaxStyle() {
        positionX += ((coordXPercent - positionX) * paramAnimation) / 1000;
        positionY += ((coordYPercent - positionY) * paramAnimation) / 1000;

        const transformX = (directionX * positionX) / (paramCoefficientX / 10);
        const transformY = (directionY * positionY) / (paramCoefficientY / 10);

        element.style.transform = `translate3D(${transformX}%, ${transformY}%, 0)`;

        requestAnimationFrame(setMouseParallaxStyle);
      }

      function mouseMoveParallax(wrapper = window) {
        wrapper.addEventListener('mousemove', ({ clientX, clientY }) => {
          const offsetTop =
            element.getBoundingClientRect().top + window.scrollY;

          if (
            offsetTop >= window.scrollY ||
            offsetTop + element.offsetHeight >= window.scrollY
          ) {
            /** Получение ширины и высоты блока */
            const parallaxWidth = window.innerWidth;
            const parallaxHeight = window.innerHeight;

            /** Ноль посередине */
            const coordX = clientX - parallaxWidth / 2;
            const coordY = clientY - parallaxHeight / 2;

            /** Получение значений координат в процентах */
            coordXPercent = (coordX / parallaxWidth) * 100;
            coordYPercent = (coordY / parallaxHeight) * 100;
          }
        });
      }
    });
  }
}


class MousePRLX {
  constructor(props) {
    const defaultConfig = { init: true };
    this.config = Object.assign(defaultConfig, props);

    if (this.config.init) {
      this.init();
    }
  }

  init() {
    // === Mouse parallax ===
    const mouseElements = document.querySelectorAll('[data-prlx-mouse]');
    mouseElements.forEach((element) => {
      const paralaxMouseWrapper = element.closest('[data-prlx-mouse-wrapper]');

      const paramCoefficientX = element.dataset.prlxCx
        ? Number(element.dataset.prlxCx)
        : 100;
      const paramCoefficientY = element.dataset.prlxCy
        ? Number(element.dataset.prlxCy)
        : 100;

      const directionX = element.hasAttribute('data-prlx-dxr') ? -1 : 1;
      const directionY = element.hasAttribute('data-prlx-dyr') ? -1 : 1;

      const paramAnimation = element.dataset.prlxA
        ? Number(element.dataset.prlxA)
        : 50;

      // угол для движения только по X в заданном направлении
      const degX = element.dataset.prlxDegx
        ? (Number(element.dataset.prlxDegx) * Math.PI) / 180
        : null;

      let positionX = 0;
      let positionY = 0;
      let coordXPercent = 0;
      let coordYPercent = 0;

      let isActive = true;

      const setMouseParallaxStyle = () => {
        if (isActive) {
          positionX += ((coordXPercent - positionX) * paramAnimation) / 1000;
          positionY += ((coordYPercent - positionY) * paramAnimation) / 1000;
        } else {
          positionX += (0 - positionX) * 0.05;
          positionY += (0 - positionY) * 0.05;
        }

        let transformX, transformY;

        if (degX !== null) {
          // движение только по оси X под углом
          const target = (directionX * positionX) / (paramCoefficientX / 10);
          transformX = target * Math.cos(degX);
          transformY = target * Math.sin(degX);
        } else {
          // обычное движение X и Y
          transformX = (directionX * positionX) / (paramCoefficientX / 10);
          transformY = (directionY * positionY) / (paramCoefficientY / 10);
        }

        element.style.transform = `translate3D(${transformX}%, ${transformY}%, 0)`;

        requestAnimationFrame(setMouseParallaxStyle);
      };

      setMouseParallaxStyle();

      function mouseMoveParallax(wrapper = window) {
        wrapper.addEventListener('mousemove', ({ clientX, clientY }) => {
          const parallaxWidth = window.innerWidth;
          const parallaxHeight = window.innerHeight;

          const coordX = clientX - parallaxWidth / 2;
          const coordY = clientY - parallaxHeight / 2;

          coordXPercent = (coordX / parallaxWidth) * 100;
          coordYPercent = (coordY / parallaxHeight) * 100;
        });

        if (wrapper !== window) {
          wrapper.addEventListener('mouseenter', () => {
            isActive = true;
          });
          wrapper.addEventListener('mouseleave', () => {
            isActive = false;
          });
        }
      }

      if (paralaxMouseWrapper) {
        mouseMoveParallax(paralaxMouseWrapper);
      } else {
        mouseMoveParallax();
      }
    });

    // === Auto parallax ===
    const autoWrappers = document.querySelectorAll('[data-prlx-auto-wrapper]');
    autoWrappers.forEach((wrapper) => {
      const autoElements = wrapper.querySelectorAll('[data-prlx-auto]');
      if (!autoElements.length) return;

      let wrapperInitLeft =
        wrapper.getBoundingClientRect().left + window.scrollX;

      autoElements.forEach((el) => {
        const computed = window.getComputedStyle(el).transform;
        el.__prlx_origTransform = el.style.transform || (computed === 'none' ? '' : computed);
        el.__prlx_coeffX = el.dataset.prlxCx ? Number(el.dataset.prlxCx) : 100;
        el.__prlx_currentX = 0;
        el.__prlx_currentY = 0;
        el.__prlx_angle = el.dataset.prlxAutoDeg
          ? (Number(el.dataset.prlxAutoDeg) * Math.PI) / 180
          : 0;
        el.__prlx_direction = el.hasAttribute('data-prlx-auto-dxr') ? -1 : 1;
        el.__prlx_speed = el.dataset.prlxA ? Number(el.dataset.prlxA) : 0.1;
      });

      let isActive = false;

      const update = () => {
        const rect = wrapper.getBoundingClientRect();
        const currentLeft = rect.left + window.scrollX;
        const deltaX = currentLeft - wrapperInitLeft;

        autoElements.forEach((el) => {
          const coeff = el.__prlx_coeffX || 100;
          let target = -(deltaX) / (coeff / 5) * el.__prlx_direction;

          const targetX = target * Math.cos(el.__prlx_angle);
          const targetY = target * Math.sin(el.__prlx_angle);

          if (isActive) {
            el.__prlx_currentX += (targetX - el.__prlx_currentX) * el.__prlx_speed;
            el.__prlx_currentY += (targetY - el.__prlx_currentY) * el.__prlx_speed;
          } else {
            el.__prlx_currentX += (0 - el.__prlx_currentX) * el.__prlx_speed;
            el.__prlx_currentY += (0 - el.__prlx_currentY) * el.__prlx_speed;
          }

          const orig = el.__prlx_origTransform ? `${el.__prlx_origTransform} ` : '';
          el.style.transform = `${orig}translate3d(${el.__prlx_currentX}px, ${el.__prlx_currentY}px, 0)`;
        });

        requestAnimationFrame(update);
      };

      update();

      wrapper.addEventListener('mouseenter', () => {
        autoElements.forEach((el) => {
          el.__prlx_currentX = 0;
          el.__prlx_currentY = 0;
          el.style.transform = el.__prlx_origTransform || '';
        });
        wrapperInitLeft = wrapper.getBoundingClientRect().left + window.scrollX;
        isActive = true;
      });

      wrapper.addEventListener('mouseleave', () => {
        isActive = false;
      });

      window.addEventListener('resize', () => {
        wrapperInitLeft = wrapper.getBoundingClientRect().left + window.scrollX;
      });
    });
  }
}

export default MousePRLX;
