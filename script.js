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
  hours = hours % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let digital_time = document.querySelector(".digtime");
  digital_time.innerText = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
// Update the clock hands
  hour.style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
  minute.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
  second.style.transform = `rotate(${seconds * 6}deg)`;
}
setInterval(updateClock, 1000);
let date = document.querySelector(".date");
let date1 = new Date();
let day = date1.getDate();
date.innerText = day;

let day2 = document.querySelector(".day");
let day1 = new Date();
let days = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thur",
  "Fri",
  "Sat"
];
const months = [
 "Jan",
 "Feb",
 "March",
 "April",
 "May",
 "June",
 "July",
 "Aug",
 "Sep",
 "Oct",
  "Nov",
  "Dec"
];
let currmounth = months[day1.getMonth()];
day2.innerText = `${days[day1.getDay()]},${currmounth}${day} `;

// weather api
let tem = document.querySelector(".temperature");
let hum = document.querySelector(".humidity");
const url =
  "https://api.open-meteo.com/v1/forecast?latitude=31.4187&longitude=73.0791&current=temperature_2m,relative_humidity_2m,weather_code";
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let temp = data.current.temperature_2m;
    tem.innerText = `temperature:🌤️${temp}°C`;
    let humi = data.current.relative_humidity_2m;
    hum.innerText = `humidity: 💧 ${humi}%`;
    console.log("Weather code:", data.current.weather_code);
  })