function addTodoWithin(event) {
  event.preventDefault();

  const addButton = event.target;
  const element = addButton.closest('.element');
  const elementLabel = element.querySelector('.element__input');
  const elementLabelDescription = element.querySelector('.element__input-description');

  const textAdd = elementLabel.value.trim().substring(0, 15);
  const textAdd2 = elementLabelDescription.value.trim().substring(0, 20);

  if (!textAdd.trim()) return;

  const todoList = element.querySelector('.todo__lists');

  const uniqueId = generateUniqueId(); // Generate unique ID for form field

  const listItemHTML = `
    <li class="list pending">
      <label>
        <input type="checkbox" id="${uniqueId}">
        <p class="task__in__form">${textAdd}</p>
        <br>
        <p class="task__in__form__two">${textAdd2}</p>
      </label>
      <img class="img__checkbox" onclick="editCheckbox(this)" src="img/редактировать.png" alt="">
      <img class="img__checkbox__two" onclick="imgDeleteTask(this)" src="img/очистить-корзину.png" alt="">
    </li>
  `;

  todoList.insertAdjacentHTML('beforeend', listItemHTML);

  const pendingNum = todoList.querySelectorAll('.list.pending').length;
  const pendingNumElement = element.querySelector('.pending__num');
  pendingNumElement.textContent = `${pendingNum} `;

  elementLabel.value = '';
  elementLabelDescription.value = '';

  let isTodoListVisible = false;
  let isFirstNoteAdded = false;

  const expandImageCollapse = element.querySelector('.img__expand-collapse');
  const expandImageExpand = element.querySelector('.img__expand-expand');

  expandImageCollapse.addEventListener('click', function () {
    if (!isFirstNoteAdded && !isTodoListVisible) {
      isTodoListVisible = true;
      todoList.style.display = 'flex';
      expandImageCollapse.style.display = 'none';
      expandImageExpand.style.display = 'inline-block';
    }
  });

  expandImageExpand.addEventListener('click', function () {
    isTodoListVisible = false;
    todoList.style.display = 'none';
    expandImageCollapse.style.display = 'inline-block';
    expandImageExpand.style.display = 'none';
  });

  if (isTodoListVisible) {
    expandImageCollapse.style.display = 'none';
    expandImageExpand.style.display = 'inline-block';
    todoList.style.display = 'flex';
  } else {
    if (!isFirstNoteAdded) {
      expandImageCollapse.style.display = 'inline-block';
      expandImageExpand.style.display = 'none';
    }
  }

  const addNoteButton = document.getElementById('addNoteButton');
  if (addNoteButton) {
    addNoteButton.addEventListener('click', function () {
      if (!isFirstNoteAdded && !isTodoListVisible) {
        expandImageCollapse.style.display = 'none';
        expandImageExpand.style.display = 'inline-block';
        isFirstNoteAdded = true;
      }
    });
  }

  const listItems = todoList.querySelectorAll('.list');

  listItems.forEach((listItem, index) => {
    const deleteButton = listItem.querySelector('.img__checkbox__two');
    deleteButton.addEventListener('click', function() {
      listItem.remove();
      const updatedPendingNum = todoList.querySelectorAll('.list.pending').length;
      pendingNumElement.textContent = `${updatedPendingNum} `;

      if (updatedPendingNum === 0) {
        pendingNumElement.textContent = 'no';
        todoList.style.display = 'none';
        expandImageCollapse.style.display = 'none';
        expandImageExpand.style.display = 'none';
      }
    });
  });
}

function generateUniqueId() {
  return 'input-' + Date.now();
}





// function editCheckbox(element) {
//   const listItem = element.closest('.list');
//   const titleEl = listItem.querySelector('.task__in__form');
//   const textEl = listItem.querySelector('.task__in__form__two');

//   // Отримуємо поточні значення тексту
//   const currentTextAdd = titleEl.textContent;
//   const currentTextAdd2 = textEl.textContent;

//   // Показуємо модальне вікно або інше засіб редагування для зміни тексту
//   // Після зміни тексту оновлюємо значення в елементах
//   const newTextAdd = prompt('Введіть новий текст 1:', currentTextAdd);
//   const newTextAdd2 = prompt('Введіть новий текст 2:', currentTextAdd2);

//   if (newTextAdd !== null) {
//     titleEl.textContent = newTextAdd.trim().substring(0, 15);
//   }

//   if (newTextAdd2 !== null) {
//     textEl.textContent = newTextAdd2.trim().substring(0, 20);
//   }
// }



