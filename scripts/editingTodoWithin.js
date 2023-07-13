function editCheckbox(element) {
    const listItem = element.closest('.list');
    const titleEl = listItem.querySelector('.task__in__form');
    const textEl = listItem.querySelector('.task__in__form__two');
  
    // Отримуємо поточні значення тексту
    const currentTextAdd = titleEl.textContent;
    const currentTextAdd2 = textEl.textContent;
  
    // Показуємо модальне вікно або інше засіб редагування для зміни тексту
    // Після зміни тексту оновлюємо значення в елементах
    const newTextAdd = prompt('Введіть новий текст 1:', currentTextAdd);
    const newTextAdd2 = prompt('Введіть новий текст 2:', currentTextAdd2);
  
    if (newTextAdd !== null) {
      titleEl.textContent = newTextAdd.trim().substring(0, 15);
    }
  
    if (newTextAdd2 !== null) {
      textEl.textContent = newTextAdd2.trim().substring(0, 20);
    }
  }