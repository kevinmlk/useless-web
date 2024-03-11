'use strict';
// Number to be guessed
let number;
const hintBtn = document.querySelector('#hint-button');

// Setup
const setup = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // Btn's
  const startBtn = document.querySelector('#start-button');
  const difficultyBtn = document.querySelector('#difficulty-button');
  const submitBtn = document.querySelector('#submit-button');

  // Event listeners
  startBtn.addEventListener('click', hideIntro);
  difficultyBtn.addEventListener('click', hideDifficulty);
  submitBtn.addEventListener('click', checkNumber);
  hintBtn.addEventListener('click', hintMessage);
}

// Hide intro section
const hideIntro = () => {
  // Quiz sections
  const introSection = document.querySelector('#intro-section');
  const quizSection = document.querySelector('#quiz-section');
  
  introSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
}

// Hide difficulty section
const hideDifficulty = () => {
  const difficultySection = document.querySelector('#difficulty-container');
  const gameContainer = document.querySelector('#number-game-container');

  difficultySection.classList.add('hidden');
  gameContainer.classList.remove('hidden');

  // Store the generated number the variable
  number = generateNumber(1, 100);
}

// Generate a random number between 1 - 100
const generateNumber = (min, max) => {
  let rndNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(rndNumber);
  return rndNumber;
}

// generate a random hint message
const hintMessage = () => {
  // Hint message container
  const hintMessageContainer = document.querySelector('#hint-message');

  // Random number
  let rndHint = Math.floor(Math.random() * (3 - 1) + 1);
  
  if (rndHint === 1) {
    hintMessageContainer.textContent = 'The number is greater than 1';
    hintBtn.disabled = true;
  } else {
    hintMessageContainer.textContent = 'The number is less then 100';
    hintBtn.disabled = true;
  }
}

const checkNumber = () => {
  const userInput = document.querySelector('#input-number').value;
  console.log('User input: ' + userInput + ', generated number: ' + number);

  // Store DOM elements
  const messageContainer = document.querySelector('#defeat-message-container');
  const userInputMessage = document.querySelector('#user-input-message');
  const generatedNumberMessage = document.querySelector('#generated-number-message');
  const gameContainer = document.querySelector('#number-game-container');

  // Check if the user input matches the guessed number
  if (userInput == number) {
    number++; 
    // Show defeat message
    userInputMessage.textContent = 'Your number was: ' + userInput;
    generatedNumberMessage.textContent = 'The correct answer was: ' + number;

    gameContainer.classList.add('hidden');
    messageContainer.classList.remove('hidden');

    // Footer message
    const successMessage = document.querySelector('#success-message');
    successMessage.textContent = "Actually, u guessed the right number. But we don't like to see u win, so we changed it.";
  } else {
    // Show defeat message
    userInputMessage.textContent = 'Your number was: ' + userInput;
    generatedNumberMessage.textContent = 'The correct answer was: ' + number;

    gameContainer.classList.add('hidden');
    messageContainer.classList.remove('hidden');
  }
}

// Load setup when DOM content is loaded
window.addEventListener("DOMContentLoaded", setup);