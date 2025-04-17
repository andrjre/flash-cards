let flashcard = document.getElementById("flashcard")
let flipped = true;
let next = document.getElementById("next")
console.log("question")

let questions = [
  "What is my favourite color?",
  "What is my favourite animal?",
  "What is my favourite food?",
  "What is my name?",
  "What is my birthday?",
  "Can I drive?",
  "What is my favourite food?",
  "What is my favourite food?",
]
let answers = [
  "Purple",
  "Donkey",
  "Curry",
  "Andre",
  "02/04/2006",
  "Yes!",
  "Curry",
  "Curry",
]

let randomIndex = Math.floor(Math.random()* questions.length);
let randomQuestion = questions[randomIndex]
let answer = answers[randomIndex]

flashcard.style.backgroundColor = "red"
flashcard.innerHTML = randomQuestion



flashcard.onclick = function(){
    flipped = !flipped;

  if (flipped){
    console.log("question")
    flashcard.style.backgroundColor = "red"
    flashcard.innerHTML = randomQuestion
    }
    else{
    console.log("answer")
    flashcard.style.backgroundColor = "blue"
    flashcard.innerHTML = answer

    }
}

next.onclick = function(){
  console.log("next")
  console.log("question")
  randomIndex = Math.floor(Math.random()* questions.length);
  randomQuestion = questions[randomIndex]
  answer = answers[randomIndex]
  flashcard.style.backgroundColor = "red"
  flipped = true
  flashcard.innerHTML = randomQuestion
}