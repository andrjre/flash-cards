let flashcard = document.getElementById("flashcard")
let flipped = true;
let next = document.getElementById("next")
let back = document.getElementById("back")
let pastQuestion = []
let pastAnswer = []
console.log(pastQuestion)



let questionArray = [
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
let answerArray = [
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


if(getCurrentQuestion ==! 0 ){
  back.disabled = false;
}
else if (getCurrentQuestion === 0 ){
  back.disabled = true;
}

let randomIndex = Math.floor(Math.random()* questionArray.length);
let randomQuestion = questionArray[randomIndex]
let answer = answerArray[randomIndex]
let allQuestions = [randomQuestion]
let allAnswers = [answer]
console.log(allQuestions)
console.log(allAnswers)

flashcard.style.backgroundColor = "white"
flashcard.style.color = "black"
flashcard.innerHTML = randomQuestion


back.onclick = function(){
  getCurrentQuestion = getCurrentQuestion - 1
  flashcard.innerHTML = allQuestions[getCurrentQuestion]
  console.log(getCurrentQuestion)
  
  flashcard.onclick = function(){
    flipped = !flipped;
  if (flipped){
    flashcard.style.backgroundColor = "white"
    flashcard.style.color = "black"
    flashcard.innerHTML = allQuestions[getCurrentQuestion]
    }
    else{
    flashcard.style.backgroundColor = "grey"
    flashcard.style.color = "white"
    flashcard.innerHTML = allAnswers[getCurrentQuestion]
    }
}

if(getCurrentQuestion ==! 0 ){
  back.disabled = false;
}
else if (getCurrentQuestion === 0 ){
  back.disabled = true;
}

}

//if newest push = last push 
//random index



next.onclick = function(){
  flashcard.style.backgroundColor = "white"
  flashcard.style.color = "black"
  flipped = true;

  getCurrentQuestion = getCurrentQuestion + 1
  console.log(getCurrentQuestion)
  randomIndex = Math.floor(Math.random()* questionArray.length);
  randomQuestion = questionArray[randomIndex]
  answer = answerArray[randomIndex]
  allQuestions.push(randomQuestion)
  allAnswers.push(answer)
  console.log(allQuestions)
  console.log(allAnswers)
  flashcard.innerHTML = allQuestions[getCurrentQuestion]

  if(getCurrentQuestion ==! 0 ){
    back.disabled = false;
  }
  else if (getCurrentQuestion === 0 ){
    back.disabled = true;
  }

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






// fix double of same flash card appearing 