import { itemData } from './src/api.js';
import { generateChoice, storeDisplay, storeClick, displayChoice } from '../src/utils.js';

// DOM Elements declaration
const radioInputs = document.querySelectorAll('input[name=choice]');
const choiceFields = document.querySelectorAll('.choice');

// Initial state data
let generatorArray = itemData;
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
        disableGame(); // to be replaced with display end game function
    }
};

// On click function
const handleRadioButtonClick = (event) => {
   // endGame(turns);

    const selected = event.target.value;
    storeClick(clickedDisplayArray, selected);
    turns++;
    debugger;
};

// Add event listeners to all buttons
radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('click', handleRadioButtonClick);
});

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
});

const radioInputs = document.querySelectorAll('input[name=tree]');

@@@@@@@@ THIS IS THE EVENT LISTENER ADDER @@@@@@@@@

for (let i = 0; i < radioInputs.length, i++) {
    const radioInput = radioInputs[i];
    
    radioInput.addEventListener('input',(event) => {
        if (!live) return;

        const userIsCorrect = correctTree.id === event.target.value;

        change css
    
        turns++;
    });
}



function handleUserChoice (event) {
    if (!live) return;

    const userIsCorrect = correctTree.id === event.target.value;
    
    turns++;
    trackMisId(something.Id);
}

Then iterate through radio inputs, for each radio input, add event listener, update display, add a turn, redisplay



function trackMissId(treeId) {
    const found = findByID(misIds, treeID);
    if (found) {
        found.misses++;
        return;
    }

    const misId = { id: treeId, misses: 1 }
    misIds.push(misId);
}

LAST TURN DISPLAY function takes turns as param
if (turns === 25) {
    for (let i = 0; i < misIds.length, i++) {
        const misId = misIds[i];
        const tree = findById(trees, misId.id);
        const dom = renderRow(misId, tree);
        resultList.appendChild(dom);
    }
}

resultList is a ul populated with dynamically generated li's

*/