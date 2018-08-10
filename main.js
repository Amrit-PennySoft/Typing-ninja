window.addEventListener('load', init);

// difficulty levels.
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}

// change level by replacing easy with any of the above.
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// hard coded array of words
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'mocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'chello',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'planet'
];

//initialize the game
function init(){
  
  seconds.innerHTML = currentLevel;
  showWord(words);

  wordInput.addEventListener('input', startMatch);

  setInterval(countDown, 1000);

  setInterval(checkStatus, 50);
}

// start match
function startMatch(){
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;

  }
  // if the score is -1 then display 0
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else {
  scoreDisplay.innerHTML = score;
}
}

//match the currentWord to the wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!!';
    return true;
  }else {
    message.innerHTML = " ";
    return false;
  }
}

// pick and show random word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randIndex];
}

//timer
function countDown(){
  if(time > 0){
    time--;
  }else if(time === 0){
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

// game status
function checkStatus(){
  if(!isPlaying && time ===0){
     message.innerHTML = 'Game Over!!';
     score = -1;
  }
}
