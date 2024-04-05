document.addEventListener("DOMContentLoaded", () => {
    let number =0;


const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const mainNumber = document.querySelector('#number');



increaseButton.addEventListener('click', () => {
    mainNumber.textContent = ++number;
})

decreaseButton.addEventListener('click', () => {
    mainNumber.textContent = --number;
})

})