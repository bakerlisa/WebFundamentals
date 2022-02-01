function like(e){
    // sets visual that you liked the definition
    var thumbs = '<i class="fas fa-thumbs-up"></i>';
    e.target.innerHTML += thumbs;
    setTimeout(function(){
        e.target.querySelector(".fa-thumbs-up").remove();
    },3000);

    //++1 visual like 
    var likeParent = e.target.parentElement;
    var likeElement = likeParent.querySelector('.num');
    
    var likeNumber = parseInt(likeElement.innerHTML)+ 1;
    likeElement.innerHTML = likeNumber;

    // alert("Horray you have a like!");
}