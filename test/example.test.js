// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { storePreviousDisplay, generateChoices } from '../src/utils.js';

const test = QUnit.test;

test('stores previous display into an array of ids', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testInputOne = 'A';
    const testInputTwo = 'B';
    const testInputThree = 'C';

    const expected = ['A', 'B', 'C'];

    //Act 
    // Call the function you're testing and set the result to a const
    const output = storePreviousDisplay(testInputOne, testInputTwo, testInputThree);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(output, expected);
});