let display = document.getElementById("display");

let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(timer);
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedTime / 1000) % 60);
  let millisec = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  millisec = String(millisec).padStart(2, "0");

  display.textContent = `${hours}:${min}:${sec}:${millisec}`;
}