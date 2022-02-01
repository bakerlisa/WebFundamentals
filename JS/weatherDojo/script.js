// Nav Click - weather report
function weatherReport(){
    alert("Loading weather report...");
}

// Cookie button ckick
function accept(){
    document.querySelector('.cookie-popup').remove();
}

// changes the temp from C / F
function temp(value){
    var allTemps = document.querySelectorAll('.temp');
    var newTemp;

    for(i=0;i < allTemps.length; i++){
        console.log(allTemps[i].innerText);
        if(value === 'f'){
            newTemp = allTemps[i].innerText * 9/5 + 32;
        }else if(value === 'c'){
            newTemp = (5/9) * (allTemps[i].innerText - 32);
        }
        allTemps[i].innerText = Math.round(newTemp);
        //replace the innerText of eaxh element
    }

}

