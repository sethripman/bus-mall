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

//generates and returns an array of the current three IDs to be stored locally / compared against for dupes - deprecated, new data model used
export const storePreviousDisplay = (firstId, secondId, thirdId) => {
    const previousDisplay = [firstId, secondId, thirdId];
    return previousDisplay;
};

// Gets three random items, compares for duplicates, compares against previous displayed choices, returns array of three non-dupe items - deprecated, new data model used
export const generateChoices = (itemData, previousDisplayArray) => {
    let choiceOne = getRandomItem(itemData);
    let choiceTwo = getRandomItem(itemData); 
    let choiceThree = getRandomItem(itemData);

    let choiceArray;

    // Validate Choices
    while (choiceOne.id === previousDisplayArray[0] || choiceOne.id === previousDisplayArray[1] || choiceOne.id === previousDisplayArray[2]){
        choiceOne = getRandomItem(itemData);
    }

    while (choiceTwo.id === previousDisplayArray[0] || choiceTwo.id === previousDisplayArray[1] || choiceTwo.id === previousDisplayArray[2] || choiceOne === choiceTwo){
        choiceTwo = getRandomItem(itemData);
    }

    while (choiceThree.id === previousDisplayArray[0] || choiceThree.id === previousDisplayArray[1] || choiceThree.id === previousDisplayArray[2] || choiceOne === choiceThree || choiceTwo === choiceThree){
        choiceThree = getRandomItem(itemData);
    }

    // assign validated choices to an array and return the array
    choiceArray = [choiceOne, choiceTwo, choiceThree];
    return choiceArray;
};