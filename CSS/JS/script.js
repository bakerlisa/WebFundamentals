function toggleProfile(){
    document.querySelector('body').classList.toggle('active');
    var isActive = document.querySelector('body.active');

    if(isActive){
        var cardData = ["Astrolabe Jones", "Secret Lair", "Stealth | Swords | Martial Arts", "Renowned as hashish using militant fanatic", "img/assassin.jpeg", "img/swords.png"];
    }else{
        var cardData = ["Jane Doe", "Seattle", "Developer | Engineer | Problem Solver", "Master of shadows and the Internet", "img/user-circle.png", "img/gear.png"];
    }

    document.querySelector("h1").innerHTML = cardData[0];
    document.querySelector(".location").innerHTML = cardData[1];
    document.querySelector(".skills").innerHTML = cardData[2];
    document.querySelector(".intro").innerHTML = cardData[3];
    document.querySelector(".icon-wrp img").src = cardData[4];
    document.querySelector(".txt-icn.edit img").src = cardData[5];
}