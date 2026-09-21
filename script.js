let clock = document.querySelector(".clock");
for (let i = 0; i < 12; i++) {
  let strip = document.createElement("div");
  let text = document.createElement("h4");
  strip.classList.add("strips");
  strip.style.transform = `translateX(${i * -0.5}px) rotate(${i * 30}deg)`;
  if (i === 6) {
   text.style.transform = `translateY(${20}px)`;
  }
  text.innerText = i || 12;
  text.style.fontFamily = "Orbitron, sans-serif";
  text.style.transform = `rotate(${-i * 30}deg)`;
  strip.appendChild(text);
  clock.appendChild(strip);
}
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // Update the clock hands
  hour.style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
  minute.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
  second.style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(updateClock, 1000);
let date = document.querySelector(".date");
let dat = new Date();
let day = dat.getDate();
date.innerText = day;