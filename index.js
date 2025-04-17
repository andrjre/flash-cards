let flashcard = document.getElementById("flashcard")
let flipped = true;
let next = document.getElementById("next")

let questions = [
  "What is my favourite color?",
  "What is my favourite animal?",
  "What is my favourite food?",
]
let answers = [
  "purple",
  "donkey",
  "curry",
]

let randomQuestion = questions[Math.floor(Math.random()* questions.length)]


flashcard.style.backgroundColor = "red"
flashcard.innerHTML = randomQuestion



flashcard.onclick = function(){
    flipped = !flipped;

  if (flipped){
    console.log("question")
    flashcard.style.backgroundColor = "red"
    }
    else{
    console.log("answer")
    flashcard.style.backgroundColor = "blue"
    flashcard.innerHTML = "Andre!"

    }

}

next.onclick = function(){

}