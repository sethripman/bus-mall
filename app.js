import { itemData } from './src/api.js';
import { generateChoice } from '../src/utils.js';

let generatorArray = itemData;
let currentChoicesArray = [];
let clickedDisplayArray = [];

let turns = 0;

// on click + page load
// Fill current choices array with three items spliced from generator array
while (currentChoicesArray.length < 3) {
    currentChoicesArray.push(generateChoice(generatorArray));
}


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