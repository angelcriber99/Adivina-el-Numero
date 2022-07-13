'use strict';

let numSecreto = Math.trunc(Math.random() * 20) + 1;
let marcador = 20;
let record = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No introducen número
  if (!guess) {
    displayMessage('⛔️ Introduce un número');

    // El jugador acierta
  } else if (guess === numSecreto) {
    displayMessage('🎉🎉 ¡Has acertado!');
    document.querySelector('.number').textContent = numSecreto;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (marcador > record) {
      record = marcador;
      document.querySelector('.record').textContent = record;
    }

    // El jugador se equivoca
  } else if (guess !== numSecreto) {
    if (marcador > 1) {
      displayMessage(
        guess > numSecreto ? '📈 ¡Demasiado alto!' : '📉 ¡Demasiado bajo!'
      );
      marcador--;
      document.querySelector('.marcador').textContent = marcador;
    } else {
      displayMessage('💀 Game over 💀');
      document.querySelector('.marcador').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  marcador = 20;
  numSecreto = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Empieza a adivinar..');
  document.querySelector('.marcador').textContent = marcador;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
