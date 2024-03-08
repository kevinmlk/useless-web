'use strict';

// Setup
const setup = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // Btn's
  const startBtn = document.querySelector('#start-button');

  // Event listeners
  startBtn.addEventListener('click', hideIntro);
}

// Hide intro section
const hideIntro = () => {
  // Quiz sections
  const introSection = document.querySelector('#intro-section');
  const quizSection = document.querySelector('#quiz-section');
  
  introSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
}

// Load setup when DOM content is loaded
window.addEventListener("DOMContentLoaded", setup);