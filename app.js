import { itemData } from './src/api.js';
import { getRandomItem, storePreviousDisplay, generateChoices } from '../src/utils.js';

let previousDisplayArray = ['', '', ''];


/* Event listener logic
let correctAnswer;

const handleRadioButtonClick = (event) => {
    if (event.target.value === correctAnswer.id) {
        myWins++;
        trees.removeTreeById(event.target.value);
    } else {
        alert('boooo');
    }
};

treeRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', handleRadioButtonClick);
});*/