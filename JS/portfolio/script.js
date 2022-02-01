function changeName(e){
    var newName = "Nacy Joe";
    document.querySelector('h1').innerHTML = newName;
}

function removeElement(e,plus){
    //remove element
    e.target.parentNode.parentNode.remove();

    // updates requests
    var requests = document.querySelector('.connections-requestions .num');
    var startingNum = parseInt(requests.innerText) - 1;
    requests.innerText = startingNum;

    // updates connections
    var connections = document.querySelector('.connection-wrp .num');
    if(plus == true){
        var connectionsNum = parseInt(connections.innerText) + 1;

        connections.innerHTML = connectionsNum;
    }
}
