const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const list = document.getElementById('todo-list');

function addTodo() {
  const text = input.value.trim();
  if (text === '') {
    return;
  }

  const li = document.createElement('li');
  const item = document.createElement('div');
  item.classList.add('todo-item');

  const circle = document.createElement('button');
  circle.type = 'button';
  circle.classList.add('todo-circle');
  circle.setAttribute('aria-label', 'Teendő készre jelölése');

  const span = document.createElement('span');
  span.classList.add('todo-text');
  span.textContent = text;

  circle.addEventListener('click', function () {
    item.classList.toggle('kesz');
  });

  item.appendChild(circle);
  item.appendChild(span);
  li.appendChild(item);

  list.appendChild(li);

  input.value = '';
  input.focus();
}

addButton.addEventListener('click', addTodo);

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});


