'use strict';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '2022, 05, 06';
const interval = 1000;

function countdown() {
    const newYearsDate = new Date(newYears);
    const nowDate = new Date();
    const distance = (newYearsDate - nowDate) / 1000;
    
    console.log(newYearsDate);
    console.log(nowDate);

    var days = Math.floor(distance / 60 / 60 / 24 );
    var hours = Math.floor(distance / 60 / 60) % 24;
    var mins = Math.floor(distance  / 60) % 60;
    var seconds = Math.floor(distance) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, mins, seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
const count = setInterval(countdown, interval);
clearInterval(count);