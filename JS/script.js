const hoursHand = document.querySelector("#hours-hand");
const minutesHand = document.querySelector("#minutes-hand");
const secondsHand = document.querySelector("#seconds-hand");
const analogClock = document.querySelector(".analog-clock");

function generateNumbers() {
  let radius = 200;

  for (let i = 1; i <= 12; i++) {
    let angle = i * 30 * (Math.PI / 180);
    let x = 250 + radius * Math.sin(angle);
    let y = 250 - radius * Math.cos(angle);

    let number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i;
    number.style.left = `calc(${x - 35}px)`;
    number.style.top = `calc(${y - 30}px)`;
    analogClock.appendChild(number);
  }
}

function updateClock() {
  let now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hoursDeg = hours * 30 + minutes * 0.5;
  let minutesDeg = minutes * 6;
  let secondsDeg = seconds * 6;

  hoursHand.style.transform = `translate(-50%) rotate(${hoursDeg}deg)`;
  minutesHand.style.transform = `translate(-50%) rotate(${minutesDeg}deg)`;
  secondsHand.style.transform = `translate(-50%) rotate(${secondsDeg}deg)`;
}

generateNumbers();
setInterval(updateClock, 1000);
updateClock();
