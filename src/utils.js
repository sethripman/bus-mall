export const getRandomItem = (itemData) => {
    const randomItemIndex = Math.floor(Math.random() * itemData.length);
    return itemData[randomItemIndex];
};

export const findById = (items, id) => {
    const match = items.find(item => { if (item.id === id) return true; });
    return match;
};

export const removeById = (someArray, someId) => {
    let poppedItem;

    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        
        if (item.id === someId) {
            poppedItem = someArray.splice(i, 1);
        }
    }
    return poppedItem;
};

export const generateChoice = (generatorArray) => {
    const newChoice = getRandomItem(generatorArray);
    removeById(generatorArray, newChoice.id);
    return newChoice;
};

export const storeDisplay = (clickedDisplayArray, itemId) => {
    const found = findById(clickedDisplayArray, itemId);
    if (found) {
        found.displayed++;
        return;
    }

    const displayedItem = { id: itemId, displayed: 1, clicked: 0 };
    clickedDisplayArray.push(displayedItem);
};

// Anything clicked must have been displayed, so no need for if found logic
export const storeClick = (clickedDisplayArray, itemId) => {
    const found = findById(clickedDisplayArray, itemId);
    found.clicked++;
};

export const displayChoice = (choiceField, generatedChoice) => {
    const input = choiceField.querySelector('input');
    input.checked = false;
    input.value = generatedChoice.id;

    const img = choiceField.querySelector('img');
    img.src = generatedChoice.image;
};

export default displayChoice;

export const CHOICES_KEY = 'choices';

export const getChoices = () => {
    if (localStorage.getItem(CHOICES_KEY) === null) {
        const serializedEmptyChoices = '[]';
        localStorage.setItem(CHOICES_KEY, serializedEmptyChoices);
    }
    
    const choices = JSON.parse(localStorage.getItem(CHOICES_KEY));
    return choices;
};

export const setChoices = (currentDisplayArray) => {
    // Serialize the current cart and then set in local storage
    const serializedNewChoices = JSON.stringify(currentDisplayArray);
    localStorage.setItem(CHOICES_KEY, serializedNewChoices);
};