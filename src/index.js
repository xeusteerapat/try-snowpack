import { add, subtract, multiply, divide } from './math';
import confetti from 'canvas-confetti';

const add45 = add(4, 5);
const sub45 = subtract(4, 5);
const mul45 = multiply(4, 5);
const div45 = divide(4, 5);

const addResult = document.getElementById('add');
const subResult = document.getElementById('sub');
const mulResult = document.getElementById('mul');
const divResult = document.getElementById('div');

addResult.textContent += add45;
subResult.textContent += sub45;
mulResult.textContent += mul45;
divResult.textContent += div45;

const duration = 15 * 1000;
const animatedEnd = Date.now() + duration;
const defaults = {
  startVelocity: 30,
  spread: 360,
  ticks: 60,
  zIndex: 0,
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(() => {
  const timeLeft = animatedEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
