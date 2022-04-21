// global constants
let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
let mistakes;
let scoreDisplay = document.getElementById("score");
let mistakeDisplay = document.getElementById("strikes");

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  pattern = getRandomPattern(10);
  mistakes = 0;
  scoreDisplay.textContent = "Score: 0";
  mistakeDisplay.textContent = "Mistakes: 0/3";
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clueHoldTime = 1000;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392.00,
  6: 440.00,
  7: 493.88,
  8: 523.25
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime *= 0.95;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]) { 
    //guess is correct
    if(guessCounter == progress) { 
      //turn is over
      if(progress == pattern.length-1) {
        //last turn
        scoreDisplay.textContent = scoreDisplay.textContent.replace(progress, progress+1);
        winGame();
      }
      else {
        //not last turn
        progress++;
        scoreDisplay.textContent = scoreDisplay.textContent.replace(progress-1, progress);
        playClueSequence();
      }
    }
    else { 
      //turn is not over
      guessCounter++;
    }
  }
  else{
    //guess is not correct
    mistakes++;
    mistakeDisplay.textContent = mistakeDisplay.textContent.replace(mistakes-1, mistakes);
    if(mistakes > 2) {
      mistakeDisplay.textContent = "Mistakes: 3/3";
      loseGame();
    }
  }
}

function getRandomPattern(len) {
  let pattern = [];
  for(let i = 0; i < len; i++) 
    pattern[i] = Math.floor(Math.random() * 8) + 1;
  return pattern;
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)