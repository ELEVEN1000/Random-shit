import { array } from './array.js';

const array = require('./array.js');
const button = document.querySelector('.content__button');
const input = document.querySelector('.content__input');

function randomClick() {
    const random = array[(Math.floor(Math.random() * (array.length)))];
    const random2 = array[(Math.floor(Math.random() * (array.length)))];
    button.addEventListener('click', function() {
        input.value = random + ' ' + random2;
    })
}

randomClick(array);
