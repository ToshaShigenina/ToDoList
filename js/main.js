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
  },
  saveData = function () {
    let checked = [],
      unchecked = [];

    completed.querySelectorAll('li').forEach((item) => {
      checked.push(item.textContent.trim());
    });

    todo.querySelectorAll('li').forEach((item) => {
      unchecked.push(item.textContent.trim());
    });

    localStorage.setItem('completed', checked);
    localStorage.setItem('todo', unchecked);
  },
  readData = function () {
    let checked = [],
      unchecked = [];

    checked = localStorage.getItem('completed').split(',');
    unchecked = localStorage.getItem('todo').split(',');

    checked.forEach((item) => {
      if (item !== '') {
        completed.append(createItem(item));
      }
    });

    unchecked.forEach((item) => {
      if (item !== '') {
        todo.append(createItem(item));
      }
    });
  };

document.addEventListener('DOMContentLoaded', readData);

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (headerInput.value !== '' && headerInput.value.trim() !== '') {
    todo.prepend(createItem(headerInput.value.trim()));
    headerInput.value = '';
  }
});

document.body.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName !== 'BUTTON') {
    return;
  }

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

  saveData();
});
