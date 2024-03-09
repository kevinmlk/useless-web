'use strict';
// Number to be guessed
let number;

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
  return rndNumber;
}

const checkNumber = () => {
  const userInput = document.querySelector('#input-number').value;
  console.log('User input: ' + userInput + ', generated number: ' + number);
}

// Load setup when DOM content is loaded
window.addEventListener("DOMContentLoaded", setup);