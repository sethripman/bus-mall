// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { removeById } from '../src/utils.js';

const test = QUnit.test;

test('removes an item by id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testArray = [
        {
            id: 'bag',
            name: 'Bag',
        },
        {
            id: 'banana',
            name: 'Banana',
        },
    ];

    const expected = [{
        id: 'bag',
        name: 'Bag'
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    const output = removeById(testArray, 'bag');

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(output, expected);
});