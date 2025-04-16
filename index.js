let flashcard = document.getElementById("flashcard")
let flipped = false;

if(flipped == false){
    console.log("front")
    flashcard.style.backgroundColor = "blue"
}



flashcard.onclick = function(){
    flipped = !flipped;

  if (flipped){
    console.log("flipped")
    flashcard.style.backgroundColor = "red"
    }
    else{
    flashcard.style.backgroundColor = "blue"
    }
}
