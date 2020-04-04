"use strict";


let input = document.querySelector(".editor__input--js");
const clear = document.querySelector(".control-panel__button--clear--js");
const load = document.querySelector(".control-panel__button--load--js");
const save = document.querySelector(".control-panel__button--save--js");

//console.log(input, remove, load, save);

save.addEventListener('click', (e) => {
  localStorage.setItem('input',input.value);
})

load.addEventListener('click', (e) => {
  input.value = localStorage.getItem('input');
})

clear.addEventListener('click',(e) => {
  input.value = "";
})