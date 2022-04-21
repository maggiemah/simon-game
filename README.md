# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **MAGGIE MAH**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/tender-enthusiastic-math)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked.
* [X] Game buttons each light up and play a sound when clicked.
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Display score and number of mistakes made

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Starting and playing](https://i.imgur.com/J0hbVfL.gif)
![Losing the game](https://i.imgur.com/VSnyYqB.gif)
![Winning the game](https://i.imgur.com/rhcdK2k.gif)
![New sequence each round (speed reset)](https://i.imgur.com/7I8aMRh.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
* CSS colors: https://www.w3schools.com/cssref/css_colors.asp
* Music note frequencies: https://pages.mtu.edu/~suits/notefreqs.html
* Change button background: https://www.geeksforgeeks.org/how-to-change-an-input-button-image-using-css/
* Change textContent: https://www.w3schools.com/jsreF/prop_node_textcontent.asp,
  https://stackoverflow.com/questions/32571992/textcontent-replace-not-working-within-my-function


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
A challenging part of this project was figuring out how to display an image when a button was pressed. I initially attempted to place the image inside of the button tags in the HTML file, and I spent a bit of time looking for ways to hide the button content while the button is pressed. Eventually as I searched the internet, I found out that instead, I could set the background of a button to be a URL, so I removed the images from the buttons and set the backgrounds of my buttons to my images in the CSS file.
Another challenging part was figuring out how to change the scores and mistakes since the way I found to update it was to change the textContent in Javascript, and the numbers aren’t fixed values to replace. To fix this, I thought about the conditions that would cause these numbers to update, which was when the mistakes/score was one less than the current mistakes/score and that worked. Sometimes, when I added code to my file, the values stopped updating in the game entirely. I realized that my syntax was incorrect because I used the document objects and methods wrong, so I ensured that each part was right by testing in smaller batches of changes.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
After completing my submission, I have several questions about web development. What platform do professional web developers use (e.g. Replit) to edit and share files? How would multiple web developers efficiently collaborate and split up work, since the code between the HTML, CSS, and JS files all depend on each other? Do web developers generally have freedom to style their code and the layout of their website the way they want or are they mainly given a design for the website that they have to follow?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
If I had a few more hours to work on this project, some features I would implement would be playing some type of buzzer sound and changing the background color of a button possibly to a bright red when a mistake is made; including the listed optional features (complex audio files and time limit for player); making the button layout neater so that the rows have the same number of buttons on all views; and updating score/mistake before the win or lose alert appears because they currently only update when the alert is closed. I would also make the layout of the whole page neater (e.g. move the score/mistakes to the top right). An interesting feature would be an easter egg pattern, so even though most of the time the game produces a random pattern, occasionally the pattern would be an actual song.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://ucdavis.zoom.us/rec/share/J4liFwtuelJljHTZNqwgRDAvC5tJiUGy6bfopqw3ACqvor9Pkd_0-YqweL0DsGB1.YokH-O1GkLJRz_JB?startTime=1650576940000)


## License

    Copyright [MAGGIE MAH]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
