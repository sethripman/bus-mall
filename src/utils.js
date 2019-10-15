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