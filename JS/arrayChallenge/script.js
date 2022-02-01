// ALWAYS HUNGRY
function alwaysHungry(arr){
    for(i=0;i < arr.length; i++ ){
        if(arr[i] == "food"){
            return "Yummy!";
        }
    }
    return "I'm hungry";
}

// console.log(alwaysHungry([5,2,"oragnes", "cake","shoe", 324, 90,33,"food"]));
// console.log(alwaysHungry([5,2,"red", "cheese","shoe", 324, 90,33]));

// HIGH PASS FILTER
function highpass(arr,cutoff){
    var newArray = [];
    for(i=0;i<arr.length;i++){
        if(arr[i] > cutoff){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
var result = highpass([4,5,19,30,43,2,100],5);
//console.log(result);

function betterThanAverage(arr){
    var better = 0;
    for(i=0;i<arr.length;i++){
        better += arr[i];
    }
    better /= arr.length;
    return better;
}
var result = betterThanAverage([20,32,459,35,67,6,2,2134,643]);
// console.log(result);

// ARRAY REVERSE
function reverse(arr){
    var len = arr.length-1;
    for(i=0;i<len/2;i++){
        var temp = arr[i];
        var last = len-i;
        arr[i] = arr[last];
        arr[last] = temp; 
    }
    return arr;
}

var result = reverse(["a","b","c","d","e","f","g"]);
// console.log(result);

function fibonacci(num){
    var fib = [0,1];
    for(i=0;i<num;i++){
        fib.push(fib[i] + fib[i+1]);
    }
    return fib;
}

var result = fibonacci(12);
//console.log(result);