//Gets the time, divides by the degress ina circle then places hand in the clock
var secondsDeg = new Date().getSeconds() * 6;
document.getElementById('seconds').style.transform = "rotate(" + (secondsDeg) + "deg)";

var minutesDeg = new Date().getMinutes() * 6;
document.getElementById('minutes').style.transform = "rotate(" + (minutesDeg) + "deg)";

var hoursDeg = new Date().getMinutes() * 12 / 2;
document.getElementById('hour').style.transform = "rotate(" + (hoursDeg) + "deg)";

setInterval( function() {
    // grabs the doc elements
    var secondHand = document.getElementById('seconds'), 
    minuteHand = document.getElementById('minutes'), 
    hourHand = document.getElementById('hour');
  
    // transforms the second hand 6 degree every second: ratio : seconds to circle degrees
    if(secondsDeg + 1 < 361){
        secondsDeg += 6;
    }else{
        secondsDeg = 0;
    }
    secondHand.style.transform = "rotate(" + secondsDeg + "deg)";
    
    //sets the count to where the seconds are at -> when it reaches 59 -> makes sure we're not going outside our 360°, then either sets to zero or adds 6°
    var count = new Date().getSeconds();
    if(count == 59){
        if(minutesDeg + 6 < 361){
            minutesDeg += 6;
        }else{
            minutesDeg = 0;
        }
        minuteHand.style.transform = "rotate(" + minutesDeg + "deg)";
    }
    count++;

    // every time we've gone 3600 seconds -> adds 12° to our transform value: 60min in hour and 60sec in minute
    var hrCount = new Date().getSeconds();
    if(hrCount == 3599){
        if(hoursDeg + 12 < 181){
            hoursDeg += 12;
        }else{
            hoursDeg = 0;
        }
        hourHand.style.transform = "rotate(" + hoursDeg + "deg)";
    }
    hrCount++;
    
}, 1000);