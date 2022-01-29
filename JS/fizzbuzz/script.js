var cont = document.querySelector('.fizz-cont');

for(i=1; i <= 100; i++){
    var newDiv = document.createElement("div");
    var nameLoop;

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        nameLoop = "FizzBuzz";
    }else if(i % 5 == 0){
        console.log("Buzz");
        nameLoop = "Buzz";
    }else if(i % 3 == 0 ){
        console.log("Fizz");
        nameLoop = "Fizz";
    }else{
        console.log(i);
        nameLoop = "regular";
    }

    newDiv.classList = nameLoop;
    if(nameLoop == "regular"){
        nameLoop = i;
    }    
        newDiv.textContent = nameLoop;
    cont.append(newDiv);
}