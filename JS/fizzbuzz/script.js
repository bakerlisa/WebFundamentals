var cont = document.querySelector('.fizz-cont');

for(i=1; i <= 100; i++){
    var newDiv = document.createElement("div");

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        newDiv.textContent = "FizzBuzz";
        newDiv.classList = "FizzBuzz";
        cont.append(newDiv);
    }else if(i % 5 == 0){
        console.log("Buzz");
        newDiv.textContent = "Buzz";
        newDiv.classList = "buzz";
        cont.append(newDiv);
    }else if(i % 3 == 0 ){
        console.log("Fizz");
        newDiv.textContent = "Fizz";
        newDiv.classList = "fizz";
        cont.append(newDiv);
    }else{
        console.log(i);
        newDiv.textContent = i;
        newDiv.classList = "regular";
        cont.append(newDiv);
    }
}