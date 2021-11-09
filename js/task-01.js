// // Напиши скрипт, который выполнит следующие операции.

// // Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// // Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
// (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// // Например для первой категории получится:

// // Категория: Животные
// // Количество элементов: 4






const categoriesEl = document.querySelectorAll('.item');
const totalCategories = categoriesEl.length;
console.log(`В списке ${totalCategories} категории.`);
categoriesEl.forEach(e => {
    const titleCategory = e.querySelector('h2').textContent;
    const totalItems = e.querySelectorAll('li').length;
    console.log(`Категория: ${titleCategory};
    Количество элементов: ${totalItems}`);
});

