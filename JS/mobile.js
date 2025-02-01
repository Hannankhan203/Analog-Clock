const analogClock = document.querySelector(".analog-clock");

function generateNumbers() {
  let radius = 80;

  for (let i = 1; i <= 12; i++) {
    let angle = i * 30 * (Math.PI / 180);
    let x = 120 + radius * Math.sin(angle);
    let y = 118 - radius * Math.cos(angle);

    let number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i;
    number.style.left = `calc(${x - 35}px)`;
    number.style.top = `calc(${y - 30}px)`;
    analogClock.appendChild(number);
  }
}
