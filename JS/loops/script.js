function printOdds(num){
    for(i=0;i < num; i++){
       if(i % 2 != 0){
           console.log(i);
       }
    }
}
// printOdds(20);

function decreaseThree(num){
    // for(i=0; i < 100; i++){
    //     if(i % 3 == 0){    
    //         console.log(i);
    //     }
    // }

    i=0;
    while(num > i){
        if(i % 3 == 0){
            console.log(i);
        }
        i++;
    }
}
// decreaseThree(100);

function sequence(arr){
    for(i=0;i < arr.length -1; i++){
        console.log(arr[i]);
    }
}
// sequence([4, 2.5, 1, -0.5, -2, -3.5]);

function sigma(){
    var stringSum = "";
    var sum = 0;
    for(i=1;i <= 100; i++){
        sum+=i;
        stringSum += `${i} + `;
    }
    console.log(sum);
    console.log(stringSum);
}
// sigma();

function factional(){
    var product = 1;
    for(i=1;i <= 12; i++){
        product *= i;
    }
    console.log(product);
}
factional();