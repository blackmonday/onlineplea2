/* TIME OUT */

var timeoutID;
var timeoutID2;

// countDown1 - How long to count down for?
//var yyy = 240000; //60000 = 1 minute
var yyy = 10000; //60000 = 1 minute

// countDown2 (timer) - How long to count down for?
//var xxx = 60000; //30000 = 30 seconds
var xxx = 31000; //30000 = 30 seconds









// total time - seconds
//document.getElementById("countDown1").innerHTML = (xxx+yyy)/1000;

var minutes = Math.floor((xxx+yyy) / 60000);
var seconds = (((xxx+yyy) % 60000) / 1000).toFixed(0);
var minText;

if (minutes > "1") {
    minText = "minutes"
} else {
    minText = "minute"
}

//document.getElementById("countDown1").innerHTML = (minutes + " minutes and " + (seconds < 10 ? '0' : '') + seconds + " seconds");

if (((seconds < 10 ? '0' : '') + seconds) == '00') {
    document.getElementById("countDown1").innerHTML = minutes + " "+minText;
} else {
    document.getElementById("countDown1").innerHTML = minutes + " "+minText+" and " + (seconds < 10 ? '0' : '') + seconds + " seconds";
};









function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}
setup();

function startTimer() {
    timeoutID = window.setTimeout(goInactive, yyy);
}

function goInactive() {
    startTimer2();
    document.getElementById("timeoutOverlay").style.display = "block";
}

function startTimer2() {
    countDownTimer(xxx);
    document.getElementById("countDown2").innerHTML = xxx/1000;
    timeoutID2 = window.setTimeout(goInactive2, xxx);
}

function goInactive2() {
    window.clearTimeout(timeoutID2);
    document.getElementById("timeoutOverlay").style.display = "none";
    document.getElementById("timeoutOverlay2").style.display = "block";
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}

function goActive() {
    startTimer();
}

function timeoutOff() {
    document.getElementById("timeoutOverlay").style.display = "none";
    document.getElementById("finalCountdown").style.display = "none";
    window.clearTimeout(timeoutID);
    window.clearTimeout(timeoutID2);
    startTimer();
}

function timeoutOff2() {
    document.getElementById("timeoutOverlay2").style.display = "none";
    window.clearTimeout(timeoutID2);

    document.getElementById("timeoutOverlay").style.display = "none";
    document.getElementById("finalCountdown").style.display = "none";
    window.clearTimeout(timeoutID);
    startTimer();
    
    window.location.replace('/prototype-admin/clear-data-timeout');
    //window.location.replace('/map/start-page');

}

/* COUNTDOWN TIMER */
function countDownTimer(howLong) {
    // Set the date we're counting down to
    var countDown = (howLong/1000)-1;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Find the distance between now an the count down date
        var counter = countDown--;

        // Output the result in an element with id="demo"
        document.getElementById("countDown2").innerHTML = counter;

        if (counter == 30) {
            document.getElementById("finalCountdown").style.display = "block";
        }
        // If the count down is over, write some text 
        if (counter < 0) {
            clearInterval(x);
            document.getElementById("countDown2").innerHTML = "0";
        }
    }, 1000);
}


