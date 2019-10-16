import { itemData } from './src/api.js';
import { generateChoice, storeDisplay, storeClick, displayChoice, removeById, getChoices, setChoices } from '../src/utils.js';

// DOM Elements declaration
const radioInputs = document.querySelectorAll('input[name=choice]');
const choiceFields = document.querySelectorAll('.choice');
const choiceContainer = document.getElementById('choice-container');

// Initial state data
let generatorArray = itemData.slice();
let currentChoicesArray = [];
let clickedDisplayArray = [];
let turns = 1;

// On page load, fill current choices array with three items spliced from generator array and store display
for (let i = 0; i < 3; i++) {
    const thisChoice = generateChoice(generatorArray);
    currentChoicesArray.push(thisChoice);
    storeDisplay(clickedDisplayArray, thisChoice.id);
    displayChoice(choiceFields[i], currentChoicesArray[i]);
}

const endGame = (turns) => {
    if (turns === 25) {
        choiceContainer.classList.add('hidden');
        setChoices(clickedDisplayArray);
        let choices = getChoices();
        alert(JSON.stringify(choices, true, 2));
    }
    // adding chart generation
};

// On click function
const handleRadioButtonClick = (event) => {
    endGame(turns);

    const selected = event.target.value;
    storeClick(clickedDisplayArray, selected);
    turns++;
    
    // reset generator for next showing
    generatorArray = itemData.slice();
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


const ctx = document.getElementById('chart').getContext('2d');