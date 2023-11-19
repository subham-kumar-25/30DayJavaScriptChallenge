const questions = [
    {
        question: "What is the capital city of Australia?",
        answers:[
            {text: "a) Sydney", correct: false},
            {text: "b) Canberra", correct: true},
            {text: "c) Melbourne", correct: false},
            {text: "d) Brisbane", correct: false}
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers:[
            {text: "a) Charles Dickens", correct: false},
            {text: "b) William Shakespeare", correct: true},
            {text: "c) Jane Austen", correct: false},
            {text: "d) F. Scott Fitzgerald", correct: false}
        ]
    },
    {
        question: "In which year did the first moon landing occur?",
        answers:[
            {text: "a) 1969", correct: true},
            {text: "b) 1971", correct: false},
            {text: "c) 1980", correct: false},
            {text: "d) 1955", correct: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers:[
            {text: "a) Elephant", correct: false},
            {text: "b) Blue Whale", correct: true},
            {text: "c) Giraffe", correct: false},
            {text: "d) Gorilla", correct: false}
        ]
    },
    {
        question: "Name the smallest prime number.",
        answers:[
            {text: "a) 0", correct: false},
            {text: "b) 1", correct: false},
            {text: "c) 2", correct: true},
            {text: "d) 3", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:[
            {text: "a) Venus", correct: false},
            {text: "b) Mars", correct: true},
            {text: "c) Jupiter", correct: false},
            {text: "d) Saturn", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers:[
            {text: "a) Michelangelo", correct: false},
            {text: "b) Leonardo da Vinci", correct: true},
            {text: "c) Vincent van Gogh", correct: false},
            {text: "d) Pablo Picasso", correct: false}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers:[
            {text: "a) Won", correct: false},
            {text: "b) Yuan", correct: false},
            {text: "c) Yen", correct: true},
            {text: "d) Ringgit", correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers:[
            {text: "a) Au", correct: true},
            {text: "b) Ag", correct: false},
            {text: "c) Fe", correct: false},
            {text: "d) Hg", correct: false}
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers:[
            {text: "a) 1912", correct: true},
            {text: "b) 1920", correct: false},
            {text: "c) 1905", correct: false},
            {text: "d) 1931", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex  = 0
let score = 0 

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML =  "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    } 
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })    
    nextButton.style.display = "block"
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

startQuiz()

 