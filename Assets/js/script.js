const quiz = document.getElementById('quiz');
const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const questionText = document.getElementById('question');
const init = document.getElementById("init")
const feedbackEl = document.getElementById('feedback')
const currentScore = document.getElementById('currentScore')
const quizContainer = document.getElementById('quizContainer')
const finalScoreForm = document.createElement('form')
const finalScoreInput = document.createElement('input')
const formDesc = document.createElement('Label')
const finalScoreBtn = document.createElement('button')
const timerEl = document.getElementById('timer')
let timer = 120
let currentQuestionIndex = 0;
let score = 0
let timerFunc
const removeChilds = () => {
    while (quiz.lastChild) {
        quiz.removeChild(quiz.lastChild);
    }
};
const myQuestions = [
    {
        question: "When using an addEventListener what is the proper syntax?",
        answers: {
            "a": "variable.addEventListener('click', function())",
            "b": "addEventListener{click} = function",
            "c": "variable.addEventListener(click, function)",
            "d": "variable.onclick ()"

        },
        correctAnswer: 'a',
    },
    {
        question: "When using console.log where will the information being logged display?",
        answers: {
            "a": "As a Window Object",
            "b": "As an HTML Element",
            "c": "In the console",
            "d": "on the desktop"
        },
        correctAnswer: 'c',
    },
    {
        question: '"if" statements are best used for what?',
        answers: {
            "a": "To check if a condition has been met and then allowing the statement to proceed.",
            "b": "To provide an input for an else statements function",
            "c": "To take an input and make it into a boolean",
            "d": "Allows Developers to be undecisive and let the code decide what it wants to do",
        },
        correctAnswer: 'a'
    },
    {
        question: "How do you change CSS using Javascript?",
        answers: {
            "a": ".querySelector",
            "b": ".getElementById",
            "c": ".setStyling",
            "d": ".setAttribute",
        },
        correctAnswer: "d"
    },
    {
        question: "In order to access information stored in localStorage and display it what must you do first?",
        answers: {
            "a": "localStorage.displayItem",
            "b": "JSON.stringify.localStorage.getItem()",
            "c": "JSON.parse(localStorage.getItem()",
            "d": "JSON.showMyStorage",
        },
        correctAnswer: "c"
    },
    {
        question: "What is used to separate properties of an Object?",
        answers: {
            "a": ".",
            "b": ",",
            "c": ";",
            "d": "/"
        },
        correctAnswer: "b",
    },
    {
        question: "How do you prevent a submit button from refreshing the page you are on?",
        answers: {
            "a": "event.preventDefault()",
            "b": "function(refresh !=== true",
            "c": "confirm('would you like the page to refresh')",
            "d": "prevent.eventListener()",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the proper way to format an array?",
        answers: {
            "a": "enclosed in [] with , separating each string",
            "b": "enclosed in [] with . separating each string",
            "c": "enclosed in {} with only one string containg the info",
            "d": "enclosed in () with , separating each string",
        },
        correctAnswer: "a",
    },
    {
        question: "How do you call a function?",
        answers: {
            "a": "get.function",
            "b": "function()",
            "c": "function {}",
            "d": "function.run",
        },
        correctAnswer: "b",
    },
    {
        question: "Why would you want to us a for loop?",
        answers: {
            "a": "to iterate over arrays",
            "b": "to execute code more than once",
            "c": "Both a & b",
            "d": "none of the above",
        },
        correctAnswer: "c"
    }
];
startBtn.addEventListener("click", start);
function start() {
    timerFunc = setInterval(
        function () {
            timer--
            timerEl.textContent = "Time remaining: " + timer;
            if (timer <= 0) {
                endQuiz()
            }
        }, 1000
    )
    init.removeChild(startBtn)
    getquestion();
}
function getquestion() {
    currentScore.textContent = score
    const currentAnswers = myQuestions[currentQuestionIndex].answers
    const corAns = currentAnswers[myQuestions[currentQuestionIndex].correctAnswer]
    questionText.textContent = myQuestions[currentQuestionIndex].question;
    removeChilds()
    Object.values(currentAnswers).forEach(value => {
        let btn = document.createElement('button');
        btn.innerHTML = value;
        quiz.appendChild(btn);
        textContent = myQuestions[currentAnswers];
        btn.addEventListener('click', userAnswer);
        function userAnswer(event) {
            currentQuestionIndex++;
            if (btn.innerText === corAns) {
                feedbackEl.textContent = 'Correct';
                score++
            }
            else {
                feedbackEl.textContent = "Incorrect";
                timer= timer - 10
            };
            if (currentQuestionIndex >= myQuestions.length) {
                endQuiz()
                return
            } else {
                getquestion()
            };
        };
    });
};
function endQuiz() {
    while (quizContainer.lastChild) {
        quizContainer.removeChild(quizContainer.lastChild);
    }
    clearInterval(timerFunc)
    questionText.textContent = ("Congratulations you got " + (score + timer))
    // quizContainer.appendChild(finalScoreForm)
    quizContainer.appendChild(formDesc)
    quizContainer.appendChild(finalScoreInput)
    quizContainer.appendChild(finalScoreBtn)
    finalScoreInput.setAttribute('id', "initials")
    formDesc.setAttribute("for", initials)
    formDesc.textContent = "Add your initials to our Leaderboard!"
    finalScoreBtn.addEventListener('click', highScore)
    let buttonText = document.createElement("p")
    buttonText.textContent = "Submit"
    finalScoreBtn.appendChild(buttonText)
};
function highScore() {
    let userHighScore = [].JSON.parse(localStorage.getItem(highScores))
    userHighScore.push({
        userNameInput: finalScoreInput,
        userScore: score + timer,
    })
    console.log(userHighScore);
    localStorage.setItem('highScores', JSON.stringify(userHighScore))
}
