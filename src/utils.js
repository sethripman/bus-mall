// This takes an array and returns a random item from the array
export const getRandomItem = (itemData) => {
    const randomItemIndex = Math.floor(Math.random() * itemData.length);

    return itemData[randomItemIndex];
};

//generates and returns an array of the current three IDs to be stored locally / compared against for dupes
export const storePreviousDisplay = (firstId, secondId, thirdId) => {
    const previousDisplay = [firstId, secondId, thirdId];
    return previousDisplay;
};