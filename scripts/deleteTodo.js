const openWindow = document.querySelector('#window');
const closeWindow = document.querySelector('#button__popup__no');
const closeWindow2 = document.querySelector('#button__popup__yes');

todoContent.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'openPopupWindow') { //перевіряємо чи клікнули по кнопці видалити (penPopupWindow)
        openWindow.style.display = 'flex';
    }
})

closeWindow.addEventListener('click', (event) => {
     event.preventDefault()
     openWindow.style.display = 'none';
}) 

let currentNoteId; // Змінна для збереження ID поточної нотатки

todoContent.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'openPopupWindow') {
    openWindow.style.display = 'flex';
    const parentLi = event.target.closest('.element');
    currentNoteId = parentLi.id; // Зберегти ID нотатки
  }
});

closeWindow2.addEventListener('click', (event) => {
  event.preventDefault();
  openWindow.style.display = 'none';

  // Видалити нотатку за допомогою її ID
  const noteElement = document.getElementById(currentNoteId);
  if (noteElement) {
    noteElement.remove();
    checkEmptyList();
  }
});

function checkEmptyList() {
  const emptyList = document.querySelector('#emptyList');
  const todoItems = document.querySelectorAll('.element');

  if (emptyList && todoItems.length === 0) {
    emptyList.style.display = 'grid';
  } else if (emptyList) {
    emptyList.style.display = 'none';
  }
}

openWindow.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.dataset.action === 'window') {
    openWindow.style.display = 'none';
    }
}) 