function d6(max,min) {
    var roll = Math.floor((Math.random() * max + min));
    // your code here
    return roll;
}
    
var playerRoll = d6(6,1);
console.log("The player rolled: " + playerRoll);
