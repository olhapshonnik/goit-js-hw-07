// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
//  инлайн-стиль span#text обновляя свойство font-size.
//   В результате при перетаскивании ползунка будет меняться размер текста.
const sizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(sizeControl);
sizeControl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    text.style.fontSize = sizeControl.value + "px";
});