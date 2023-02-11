'use strict';

const deadline = '2023-11-11'; // Change deadline

function getTimeRemaning (endtime) {
    let days, hours, minutes, seconds;
 const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);
    }
      

       return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
       };
}

function addZero (num) { // If numbers less than 10 adds zero to number
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock (selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'), //Change selector
          hours = timer.querySelector('#hours'), //Change selector
          minutes = timer.querySelector('#minutes'), //Change selector
          seconds = timer.querySelector('#seconds'), //Change selector
          timeInterval = setInterval(updateClock, 1000);

    updateClock();
    
          function updateClock () {
            const t = getTimeRemaning(endtime);
        
            days.innerHTML = addZero(t.days); // addZero function call
            hours.innerHTML = addZero(t.hours); // addZero function call
            minutes.innerHTML = addZero(t.minutes); // addZero function call
            seconds.innerHTML = addZero(t.seconds); // addZero function call

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
}

setClock('.timer', deadline); // Change timer selector (first param)

