setTimeout(function(){
    var allEls = document.querySelectorAll('.el');
    console.log(allEls.length);
    for(var e=0;e<allEls.length;e++){
        var el1 = allEls[e].getAttribute('data-el1');
        var el2 = allEls[e].getAttribute('data-el2');
        var elFull = el1+"@"+el2+".com";
        console.log("el1: " + el1);
        // allEls[e].innerHTML = elFull;
        allEls[e].setAttribute('href', "mailto:"+elFull);
    }
}, 3000);
