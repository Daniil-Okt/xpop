import Popup from '../helpers/popup';

class PopupManager extends Popup {
  constructor(options = {}) {
    super();

    const defaultOptions = {
      isOpenClass: 'is-open',
      buttonCloseName: 'button-close',
      visibilityDelay: 4000, // 3 секунды задержки
    };

    this.options = { ...defaultOptions, ...options };
    this.timers = new Map(); // Хранилище таймеров для каждого попапа
    this.currentOpenPopup = null; // Текущий открытый попап

    this.init();
    this.addEventListeners();
  }

  init() {
    this.popups.forEach((popup) => {
      popup.setAttribute('aria-hidden', 'true');
      popup.style.visibility = 'hidden'; // Изначально скрываем
    });
  }

  addEventListeners() {
    document.addEventListener('click', this.togglePopup.bind(this));
  }

  togglePopup({ target }) {
    // Ищем кнопки открытия как в основном документе, так и внутри открытых попапов
    const targetDataTypeElement = target.closest('[data-type]');

    if (targetDataTypeElement) {
      const popupName = targetDataTypeElement.dataset.type;
      const popup = this.getPopupBySelector(popupName);

      if (popup) {
        // Закрываем текущий открытый попап, если он есть
        if (this.currentOpenPopup && this.currentOpenPopup !== popup) {
          this.closePopup(this.currentOpenPopup);
        }
        
        this.openPopup(popup);
        this.toggleBodyLock(true);
        return; // Прерываем выполнение, чтобы не мешать другим обработкам
      }
    }

    // Проверяем клик по кнопке закрытия (работает везде)
    const targetCloseElement = target.closest(`.${this.options.buttonCloseName}`);
    
    if (targetCloseElement) {
      const popupToClose = targetCloseElement.closest('[data-popup]');
      if (popupToClose) {
        this.closePopup(popupToClose);
        this.toggleBodyLock(false);
      }
      return; // Прерываем выполнение после закрытия
    }

    // Проверяем клик вне контента попапа (работает для всех открытых попапов)
    const isOverlayClick = this.isOverlayClick(target);
    if (isOverlayClick) {
      const popupToClose = target.closest('[data-popup]');
      if (popupToClose) {
        this.closePopup(popupToClose);
        this.toggleBodyLock(false);
      }
    }
  }

  // Улучшенный метод для проверки клика по оверлею
  isOverlayClick(target) {
    // Ищем все открытые попапы
    const openPopups = document.querySelectorAll(`[data-popup].${this.options.isOpenClass}`);
    
    for (const popup of openPopups) {
      const popupContent = popup.querySelector('.popup__content');
      if (!popupContent) continue;

      // Проверяем, что клик был внутри этого попапа, но вне его контента
      if (popup.contains(target) && !popupContent.contains(target)) {
        return true;
      }
    }
    
    return false;
  }

  getPopupBySelector(popupName) {
    return document.querySelector(`[data-popup="${popupName}"]`);
  }

  get popups() {
    return document.querySelectorAll('[data-popup]');
  }

  get isOpenElements() {
    return document.querySelectorAll(`.${this.options.isOpenClass}`);
  }

  openPopup(popup) {
    // Отменяем таймер скрытия если он есть
    this.clearPopupTimer(popup);
    
    // Сначала делаем видимым, потом добавляем класс открытия
    popup.style.visibility = 'visible';
    
    // Небольшая задержка для плавности (опционально)
    setTimeout(() => {
      popup.classList.add(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'false');
      
      // Сохраняем ссылку на текущий открытый попап
      this.currentOpenPopup = popup;
      
      // Добавляем обработчики для кнопок внутри этого попапа
      this.addPopupInnerListeners(popup);
    }, 100);
  }

  closePopup(popup) {
    // Убираем класс открытия
    popup.classList.remove(this.options.isOpenClass);
    popup.setAttribute('aria-hidden', 'true');
    
    // Сбрасываем текущий открытый попап, если закрываем его
    if (this.currentOpenPopup === popup) {
      this.currentOpenPopup = null;
    }
    
    // Отменяем предыдущий таймер если есть
    this.clearPopupTimer(popup);
    
    // Устанавливаем новый таймер для скрытия visibility
    const timerId = setTimeout(() => {
      popup.style.visibility = 'hidden';
      this.timers.delete(popup); // Удаляем из хранилища после выполнения
    }, this.options.visibilityDelay);
    
    // Сохраняем ID таймера для этого попапа
    this.timers.set(popup, timerId);
  }

  // Новый метод: добавляет обработчики для кнопок внутри попапа
  addPopupInnerListeners(popup) {
    // Находим все кнопки открытия внутри этого попапа
    const innerOpenButtons = popup.querySelectorAll('[data-type]');
    
    innerOpenButtons.forEach(button => {
      // Убираем старые обработчики чтобы избежать дублирования
      button.removeEventListener('click', this.handleInnerButtonClick);
      // Добавляем новый обработчик
      button.addEventListener('click', this.handleInnerButtonClick.bind(this));
    });
  }

  // Обработчик для кнопок внутри попапов
  handleInnerButtonClick(event) {
    event.preventDefault();
    event.stopPropagation(); // Останавливаем всплытие чтобы не мешать основному обработчику
    
    const button = event.currentTarget;
    const popupName = button.dataset.type;
    const popup = this.getPopupBySelector(popupName);

    if (popup) {
      // Закрываем текущий попап
      if (this.currentOpenPopup) {
        this.closePopup(this.currentOpenPopup);
      }
      
      // Открываем новый попап
      this.openPopup(popup);
      // Блокировка body уже активна, не нужно вызывать toggleBodyLock снова
    }
  }

  clearPopupTimer(popup) {
    // Отменяем таймер для конкретного попапа если он существует
    if (this.timers.has(popup)) {
      clearTimeout(this.timers.get(popup));
      this.timers.delete(popup);
    }
  }

  // Дополнительный метод для принудительного закрытия всех попапов
  closeAllPopups() {
    this.popups.forEach(popup => {
      this.clearPopupTimer(popup);
      popup.classList.remove(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'true');
      popup.style.visibility = 'hidden';
    });
    this.currentOpenPopup = null;
    this.toggleBodyLock(false);
  }

  // Получить текущий открытый попап
  getCurrentOpenPopup() {
    return this.currentOpenPopup;
  }

  // Очистка всех таймеров при уничтожении экземпляра
  destroy() {
    this.timers.forEach((timerId, popup) => {
      clearTimeout(timerId);
    });
    this.timers.clear();
    this.currentOpenPopup = null;
    
    // Убираем обработчики событий
    document.removeEventListener('click', this.togglePopup.bind(this));
    
    // Убираем все внутренние обработчики
    this.popups.forEach(popup => {
      const innerButtons = popup.querySelectorAll('[data-type]');
      innerButtons.forEach(button => {
        button.removeEventListener('click', this.handleInnerButtonClick);
      });
    });
  }
}

export default PopupManager;