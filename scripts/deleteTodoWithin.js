function imgDeleteTask(element) {
  const listItem = element.closest('.list');
  listItem.remove();

  const todoList = document.querySelector(".todo__lists");
  const pendingNumElement = document.querySelector(".pending__num");

  // Отримуємо кількість елементів з класом '.list.pending'
  const pendingNum = todoList.querySelectorAll('.list.pending').length;

  // Оновлюємо вміст елемента з класом ".pending__num"
  pendingNumElement.textContent = pendingNum > 0 ? pendingNum : 'no';

  // Перевіряємо, чи всі елементи були видалені
  if (pendingNum === 0) {
    const expandImage = document.querySelector('.img__expand');
    if (expandImage) {
      expandImage.style.display = 'none';
    }
    todoList.style.display = 'none';
  }
}

