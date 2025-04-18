let flashcard = document.getElementById("flashcard")
let flipped = true;
let next = document.getElementById("next")
let back = document.getElementById("back")
let pastQuestion = []
let pastAnswer = []
console.log(pastQuestion)

let questions = [
  "What is my favourite color?",
  "What is my favourite animal?",
  "What is my favourite food?",
  "What is my name?",
  "What is my birthday?",
  "Can I drive?",
  "Do I have a mole?",
  "What are my dogs names?",
  "What is my cats name?",
]
let answers = [
  "Purple",
  "Donkey",
  "Curry",
  "Andre",
  "02/04/2006",
  "Yes!",
  "No!",
  "Jasmine and Dug",
  "Darwin",
]

let getCurrentQuestion = 0;
console.log(getCurrentQuestion)


let randomIndex = Math.floor(Math.random()* questions.length);
let randomQuestion = questions[randomIndex]
let answer = answers[randomIndex]
let allQuestions = [randomQuestion]
console.log(allQuestions)

flashcard.style.backgroundColor = "white"
flashcard.style.color = "black"
flashcard.innerHTML = randomQuestion


back.onclick = function(){
  getCurrentQuestion = getCurrentQuestion - 1
  flashcard.innerHTML = allQuestions[getCurrentQuestion]
  console.log(getCurrentQuestion)
}


flashcard.onclick = function(){
    flipped = !flipped;
  if (flipped){
    flashcard.style.backgroundColor = "white"
    flashcard.style.color = "black"
    flashcard.innerHTML = randomQuestion
    }
    else{
    flashcard.style.backgroundColor = "grey"
    flashcard.style.color = "white"
    flashcard.innerHTML = answer
    }

}

next.onclick = function(){
  randomIndex = Math.floor(Math.random()* questions.length);
  randomQuestion = questions[randomIndex]
  answer = answers[randomIndex]
  allQuestions.push(randomQuestion)
  console.log(allQuestions)
  getCurrentQuestion = getCurrentQuestion + 1
  flashcard.innerHTML = allQuestions[getCurrentQuestion]
}




//fix back button working multiple times 
// fix double of same flash card appearing 
// bug where if you go back answer is to the question after