// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
//  инлайн-стиль span#text обновляя свойство font-size.
//   В результате при перетаскивании ползунка будет меняться размер текста.


const sizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(sizeControl);
sizeControl.addEventListener('input', (event) => {
    // console.log(event.currentTarget.value);
    text.style.fontSize = sizeControl.value + "px";
});
  
// let controlFont = document.getElementById("font-size-control");

// let text = document.getElementById("text");

// controlFont.oninput = function () {
//     text.style.fontSize = controlFont.value + "px";
// };