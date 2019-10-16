import { itemData } from './src/api.js';
import { generateChoice, storeDisplay, storeClick, displayChoice, removeById } from '../src/utils.js';

// DOM Elements declaration
const radioInputs = document.querySelectorAll('input[name=choice]');
const choiceFields = document.querySelectorAll('.choice');

// Initial state data
let generatorArray = itemData;
let currentChoicesArray = [];
let clickedDisplayArray = [];
let turns = 0;

// On page load, fill current choices array with three items spliced from generator array and store display
for (let i = 0; i < 3; i++) {
    const thisChoice = generateChoice(generatorArray);
    currentChoicesArray.push(thisChoice);
    storeDisplay(clickedDisplayArray, thisChoice.id);
    displayChoice(choiceFields[i], currentChoicesArray[i]);
}

const endGame = (turns) => {
    if (turns === 25) {
        disableGame(); // to be replaced with display end game function
    }
};

// On click function
const handleRadioButtonClick = (event) => {
   // endGame(turns);

    const selected = event.target.value;
    storeClick(clickedDisplayArray, selected);
    turns++;
    
    // reset generator for next showing
    generatorArray = itemData;
    for (let i = 0; i < 3; i++) {
        removeById(generatorArray, currentChoicesArray[i].id);
    }
    currentChoicesArray = [];

    for (let i = 0; i < 3; i++) {
        const thisChoice = generateChoice(generatorArray);
        currentChoicesArray.push(thisChoice);
        storeDisplay(clickedDisplayArray, thisChoice.id);
        displayChoice(choiceFields[i], currentChoicesArray[i]);
    }
};

// Add event listeners to all buttons
radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('click', handleRadioButtonClick);
});