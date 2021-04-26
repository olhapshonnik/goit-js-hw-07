// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const counterButtonsEl = document.querySelectorAll('#counter button');


const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const increment = () => valueEl.textContent = counterValue += 1;
const decrement = () => valueEl.textContent = counterValue -= 1;

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);