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