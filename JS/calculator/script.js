var calcArr1 = [];
var calcArr2 = [];
var operatorArray = [];

function press(button){
    if(operatorArray.length > 1){
        calcArr2  += button;
    }else{
        calcArr1  += button;
    }
}

function setOP(opt){
    if(operatorArray.length < 2){
        operatorArray.push(calcArr1);
        operatorArray.push(opt);
    }else{
        alert("one math problem at a time");
    }

    //add another statement in here that state if the lenth is == 3 than do the operation,
    //reset the first value
    //then do the operation as if the 3 number is the second number

    //really the array will only ever be a lenght of three
}

// Calculates
function calculate(){
    if(calcArr2.length > 0){
        operatorArray.push(calcArr2);
    }else{
        alert('select a 2nd number');
    }
    var operationClac = eval(parseInt(operatorArray[0]) + operatorArray[1]+parseInt(operatorArray[2]));

    document.querySelector('#display').innerText = operationClac;
    calcArr1 = [];
    calcArr2 = [];
    operatorArray = [];
}

// clears
function clr(){
    document.querySelector("#display").innerText = 0;
}