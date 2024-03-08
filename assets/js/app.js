'use strict';

// Setup
const setup = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // Btn's
  const startBtn = document.querySelector('#start-button');
  const difficultyBtn = document.querySelector('#difficulty-button');

  // Event listeners
  startBtn.addEventListener('click', hideIntro);
  difficultyBtn.addEventListener('click', hideDifficulty);
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
}

// Generate a random number between 1 - 100

// Load setup when DOM content is loaded
window.addEventListener("DOMContentLoaded", setup);