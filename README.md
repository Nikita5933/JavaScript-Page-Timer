# Page Timer

## Description
Simple Page Timer, with deadline date and 'addZero' function. The timer takes deadline date and counts down from the current date. Is well suited for stock completion date. The timer displays:

* days
* hours
* minutes
* seconds

The timer can display zero + number if numbers less than 10.

## Customization
### HTML-structure:
```html
<div class="timer__wrapper">
        <div class="title">The end of the Timer:</div>
        <div class="timer">
            <div class="block__timer">
                <span id="days">11</span>
                days
            </div>
            <div class="block__timer">
                <span id="hours">11</span>
                hours
            </div>
            <div class="block__timer">
                <span id="minutes">11</span>
                minutes
            </div>
            <div class="block__timer">
                <span id="seconds">11</span>
                seconds
            </div>
        </div>
    </div>
```

* Set deadline(the end of the timer) - customize variable 'deadline' in format: 'XXXX-XX-XX'.
* In order to get: timer's days, hours, minutes, seconds - change variables: 'days', 'hours', 'minutes', 'seconds' in the 'setClock' function.
* In order to get: timer's block - change the 'setClock' function call(change first param - timer selector).
* Default timer starts with 'addZero' function(if numbers less than 10 adds zero to number), if you need to disable function: delete 'addZero' func and delete it function call in 'updateClock' function. 
