var arr = ["a", "b", "c", "d", "e"];

function reverseArr(arr){
    let newArr = [];
    for(var i = (arr.length - 1); i >= 0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr(arr));

function reverseTwo(){
    let newArr = [];
    let element = arr.length - 1; 
 
    while(element >= 0){
        newArr.push(arr[element]);
        element--;
    }
    return newArr;
}
console.log(reverseArr(arr));

function reverseThree(){
    let element = arr.length - 1;
    let start = 0;
    
    while(element > start){
        let temp = arr[element];
        arr[start] = arr[element];
        arr[element] = temp;
        element--;
        start++
    }
}

console.log(reverseThree);