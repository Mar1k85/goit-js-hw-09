const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBackgroundColor);
stopBtn.addEventListener('click', stopChangingColor);

let intervalId = null;
function changeBackgroundColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChangingColor() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
}
//  на ПК працює... Але на гіт хабі чомусь ні... постійно ще й з getElementById проблеми...І постійний жорсткий апдейт сторінки щоб побачити зміни...
