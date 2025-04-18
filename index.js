let flashcard = document.getElementById("flashcard")
let flipped = true;
let next = document.getElementById("next")
let back = document.getElementById("back")

let questions = [
  "What is my favourite color?",
  "What is my favourite animal?",
  "What is my favourite food?",
  "What is my name?",
  "What is my birthday?",
  "Can I drive?",
]
let answers = [
  "Purple",
  "Donkey",
  "Curry",
  "Andre",
  "02/04/2006",
  "Yes!",
]

let pastQuestion = []

let randomIndex = Math.floor(Math.random()* questions.length);
let randomQuestion = questions[randomIndex]
let answer = answers[randomIndex]

flashcard.style.backgroundColor = "white"
flashcard.style.color = "black"
flashcard.innerHTML = randomQuestion
pastQuestion.push(flashcard.innerHTML)


flashcard.onclick = function(){
    flipped = !flipped;
  if (flipped){
    flashcard.style.backgroundColor = "white"
    flashcard.style.color = "black"
    flashcard.innerHTML = randomQuestion
    flashcard.style.transition = "ease-in-out .2s"
    }
    else{
    flashcard.style.backgroundColor = "grey"
    flashcard.style.color = "white"
    flashcard.innerHTML = answer
    flashcard.style.transition = "ease-in-out .2s"
    }

}


next.onclick = function(){
  randomIndex = Math.floor(Math.random()* questions.length);
  randomQuestion = questions[randomIndex]
  answer = answers[randomIndex]
  flashcard.style.backgroundColor = "white"
  flashcard.style.color = "black"
  flipped = true
  flashcard.innerHTML = randomQuestion
  console.log(flashcard.innerHTML)
  pastQuestion.push(flashcard.innerHTML)
  console.log(pastQuestion)
}

back.onclick = function(){
  flashcard.innerHTML = pastQuestion[0]
}