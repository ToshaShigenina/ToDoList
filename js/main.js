'use strict';

const headerInput = document.querySelector('.header-input'),
  addBtn = document.getElementById('add');

let todo = document.getElementById('todo'),
  completed = document.getElementById('completed');

const createItem = function (value) {
  let item = document.createElement('li');

  item.classList.add('todo-item');
  item.innerHTML = value + '<div class="todo-buttons"><button class="todo-remove"></button><button class="todo-complete"></button></div>';

  return item;
};

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (headerInput.value !== '' && headerInput.value.trim() !== '') {
    todo.prepend(createItem(headerInput.value.trim()));
    headerInput.value = '';
  }
});

document.body.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;

  if (target.classList.contains('todo-remove')) {
    target.closest('li').remove();
  }

  if (target.classList.contains('todo-complete')) {
    if (target.closest('ul') && target.closest('ul') === todo) {
      completed.prepend(target.closest('li'));
    } else {
      todo.prepend(target.closest('li'));
    }
  }
});
