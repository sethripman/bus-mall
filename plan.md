Three random images are extracted from the full set and displayed. Each image is a radio button with a dynamically generated value of the image's id. The clicked image is stored in an array. The three images are wiped from the screen. Another three are displayed, with no overlap with the previous images. After 25 selections, the results are displayed. A table is generated with the number of clicks and the number of times displayed.

In the full set, each image has a unique ID, a name, and an image path to the relevant asset file.

At the end of the 25 selections, the result array is also stored locally into an array of results arrays. This is a stretch goal but functions should be written to support this eventual functionality. Another stretch goal is a results page that iterates through all stored results in the storage array and generates grand totals.

Order of Work:
Generate an full set api array that contains the items with the three values. √
Write a utility function to return a random item from the full set. √
Write a utility function to store the previous items in a previous-set array. √
Write a generate choices function to grab three choices without duplicates. Check the previous-set array. If there is overlap or duplicates in the current set, return another random item until three non-dupes are present.
Write display functions to generate three image radio buttons.
Add an event handler that listens for click and stores the relevant data.
This storage is an array with the id of each item, the number of times displayed, and the number of times clicked.
Write a display refresh.
Write the end-game function after 25 total choices have been made.

NEW ORDER OF WORK 10/15
Simplify functions by using four arrays: a master set, a generator array, an array of the three current choices, and a clicked / displayed array.
We start by copying the api to create the master array.
Each turn's display is created by subtracting the current choices array from the master set to create a generator array, and the generateRandomItem function splices the random item out of the generator array, removing it and returning it. These results are placed in a new current choices array.
On subsequent choices, a new generator array is created from the master set - the current choice array. Then current choice array is emptied and repopulated with the generate function.
We also need to store times displayed and times clicked. These are two arrays. We add if empty or increment if present the displayed on when generate function is called. We add if empty or increment if present the clicked when our event handler is called. Then turn count is iterated, then we generate new choices and redisplay. This requires writing two new utility methods that take item id as a parameter.
Then we render our results from those items after 25 turns.
Then we store that array locally.