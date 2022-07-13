'use strict';

const numSecreto = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numSecreto;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔¡Primero prueba con un número válido!';
  } else if (guess === numSecreto) {
    document.querySelector('.message').textContent = '🎉🎉 ¡Has acertado!';
  } else if (guess > numSecreto) {
    document.querySelector('.message').textContent = '📈 ¡Demasiado alto!';
  } else if (guess < numSecreto) {
    document.querySelector('.message').textContent = '📉 ¡Demasiado bajo!';
  }
});
