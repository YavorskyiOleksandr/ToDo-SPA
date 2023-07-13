const form = document.querySelector('#form');
const formInput = document.querySelector('#formInput');
const todoContent = document.querySelector('#todoContent');
const emptyList = document.querySelector('#emptyList');

let tasks = [];

function addTodo() {
  const textInput = formInput.value;

  if (!textInput.length) return;

  const newTask = {
    id: Date.now(),
    text: textInput,
  };

  tasks.push(newTask);

const todoHTML = `
  <li id="${newTask.id}" class="element">
    <h2>${newTask.text}</h2>
    <div class="list-item-content">
      <img class="img__expand img__expand-expand" src="img/згорнути_25.png" style="cursor: pointer" alt="Згорнути">
      <img class="img__expand img__expand-collapse" src="img/розгорнути_25.png" style="cursor: pointer" alt="Розгорнути">
      <button data-action="openPopupWindow" class="del" id="delButton">⛌</button>

      <ul class="todo__lists">

      </ul>

      <div class="form-within">
        <form class="element__group">
          <input class="element__input" id="elementInput_${newTask.id}" required placeholder=" ">
          <label for="elementInput_${newTask.id}" class="element__label">A new task</label>
        </form>

        <form class="element__group">
          <input class="element__input element__input-description" id="elementInputDescription_${newTask.id}" placeholder=" ">
          <label for="elementInputDescription_${newTask.id}" class="element__label">Description</label>
        </form>

        <button class="element__incide" data-action="addWithin" onclick="addTodoWithin(event)" type="submit">Add to list</button>
        <div class="readout">
          <span>You have <b class="pending__num">no</b> tasks pending.</span>
        </div>
      </div>
    </div>
  </li>
`;

  todoContent.insertAdjacentHTML('afterbegin', todoHTML);
  emptyList.style.display = 'none';

  formInput.value = '';
  formInput.focus();
}

formInput.addEventListener('input', function () {
  this.value = this.value.substring(0, 20);
});

function handleTodoContentClick(event) {
  const target = event.target;
  
  if (target.dataset.action === 'openPopupWindow') {
    const listItem = target.closest('.element');
  }
}






