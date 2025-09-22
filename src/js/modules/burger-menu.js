import Popup from '../helpers/popup';

class BurgerMenu extends Popup {
  constructor() {
    super();

    this.burgerButton = document.querySelector('.icon-menu');
    this.menu = document.querySelector('.header__menu');
    this.closeTimeout = null;
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    if (this.burgerButton && this.menu) {
      document.addEventListener('click', ({ target }) => {
        if (target.closest('.icon-menu')) {
          this.html.classList.toggle('menu-open');
          this.toggleBodyLock(this.isMenuOpen);
          
          if (this.isMenuOpen) {
            this.menuOpen();
          } else {
            this.menuClose();
          }
        }
      });
    }
  }

  /**
   * Open the menu.
   */
  menuOpen() {
    // Устанавливаем overflow: visible перед открытием
    this.menu.style.overflow = 'visible';
    
    this.toggleBodyLock(true);
    this.html.classList.add('menu-open');
    
    // Очищаем предыдущий таймер, если он был
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false);
    this.html.classList.remove('menu-open');
    
    // Очищаем предыдущий таймер, если он был
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    
    // Устанавливаем overflow: hidden через 2 секунды после закрытия
    this.closeTimeout = setTimeout(() => {
      this.menu.style.overflow = 'hidden';
      this.closeTimeout = null;
    }, 2000);
  }

  /**
   * Clean up on destroy (optional)
   */
  destroy() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    
    // Восстанавливаем стандартное поведение overflow
    if (this.menu) {
      this.menu.style.overflow = '';
    }
  }

  get isMenuOpen() {
    return this.html.classList.contains('menu-open');
  }
}

export default BurgerMenu;