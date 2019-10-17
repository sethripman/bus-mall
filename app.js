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
let turns = 20;

// On page load, fill current choices array with three items spliced from generator array and store display
for (let i = 0; i < 3; i++) {
    const thisChoice = generateChoice(generatorArray);
    currentChoicesArray.push(thisChoice);
    storeDisplay(clickedDisplayArray, thisChoice.id);
    displayChoice(choiceFields[i], currentChoicesArray[i]);
}

const getChartDisplayData = (clickedDisplayArray) => {
    let copyInputArray = clickedDisplayArray.slice();
    let displayArray = [];
    while (copyInputArray.length > 0) {
        let poppedDisplay = copyInputArray.pop();
        displayArray.push(poppedDisplay.displayed);
    }
    return displayArray;
};

const getChartClickData = (clickedDisplayArray) => {
    let copyInputArray = clickedDisplayArray.slice();
    let clickArray = [];
    while (copyInputArray.length > 0) {
        let poppedClick = copyInputArray.pop();
        clickArray.push(poppedClick.clicked);
    }
    return clickArray;
};

const getChartLabels = (clickedDisplayArray) => {
    let copyInputArray = clickedDisplayArray.slice();
    let labelArray = [];
    while (copyInputArray.length > 0) {
        let poppedLabel = copyInputArray.pop();
        labelArray.push(poppedLabel.id);
    }
    return labelArray;
};

const endGame = (turns) => {
    if (turns === 25) {
        choiceContainer.classList.add('hidden');
        setChoices(clickedDisplayArray);
        let choices = getChoices();
        alert(JSON.stringify(choices, true, 2));
    }
    
    // adding chart generation
    
    const labels = [getChartLabels(clickedDisplayArray)];
    const data = [getChartDisplayData(clickedDisplayArray), getChartClickData()];

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: ['cyan', 'magenta']
            }]
        },
    });
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