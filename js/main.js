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
  if (headerInput.value !== '') {
    todo.prepend(createItem(headerInput.value));
    headerInput.value = '';
  }
});
