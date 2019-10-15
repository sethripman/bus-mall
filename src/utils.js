// This takes an array and returns a random item from the array
export const getRandomItem = (itemData) => {
    const randomItemIndex = Math.floor(Math.random() * itemData.length);

    return itemData[randomItemIndex];
};

