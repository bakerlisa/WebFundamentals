var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 7, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 7, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 7, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      if(theDojo[i][j] == 7){
        result += `<button class="tatami" onclick="ninja()"></button>`;
      }else{
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
      }
    }
  }
  return result;
}
    //
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function ninja(){
  var popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `<p>You've been Ninja-d</p><button onclick="location.reload()">restart</button>`;
  document.body.appendChild(popup);
}

function howMany(i, j, element) {
  var total = 0;
  for(x=0; x < 3; x++){
    if((i-1+x) >= 0 && (i-1+x) < theDojo.length){
      var newi = i-1+x;
      for(y=0;y<3;y++){
          if(j-1+y >= 0 && (j-1+y) < theDojo[newi].length){
            var newj = j-1+y;
              total += theDojo[newi][newj];
          }
      }
    }
  }
  element.innerText = total;
}
    
// BONUS CHALLENGES

// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    