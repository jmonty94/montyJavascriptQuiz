// Global variables
const quiz = document.getElementById('quiz');
const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const questionText = document.getElementById('question');
const init = document.getElementById("init")
const currentScore = document.getElementById('currentScore')
const quizContainer = document.getElementById('quizContainer')
const finalScoreForm = document.createElement('form')
const finalScoreInput = document.createElement('input')
const formDesc = document.createElement('Label')
const finalScoreBtn = document.createElement('button')
const timerEl = document.getElementById('timer')
const leaderboard = document.getElementById('previousScores')
let goBackBtn = document.createElement("button")
goBackBtn.className ="btn btn-primary"
let timer = 120
let currentQuestionIndex = 0;
let score = 0
let timerFunc
// remove child element function
const removeChilds = () => {
    while (quiz.lastChild) {
        quiz.removeChild(quiz.lastChild);
    }
};
// object containing questions, possible answers, and correct answer
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
            "a": 'A period "."',
            "b": 'A comma ","',
            "c": 'A semicolon ";"',
            "d": 'a forward slash "/"'
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
// initial start button add event listener which calls the function that begins the quiz
startBtn.addEventListener("click", start);
// initial function which starts the timer, removes start button, and calls getQuestion function
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
    document.getElementById("results").className = "d-flex"
}
// function that displays current question and possible answers
function getquestion() {
    // display of current score
    currentScore.textContent = score
    // pulls current available answers that match current question
    const currentAnswers = myQuestions[currentQuestionIndex].answers
    // pulls current correct answer
    const corAns = currentAnswers[myQuestions[currentQuestionIndex].correctAnswer]
    // sets text to match current question
    questionText.textContent = myQuestions[currentQuestionIndex].question;
    // calls remove childs to remove any preexisting children from the quiz container
    removeChilds()
    // object for each function which dynamically creates each possible answer
    Object.values(currentAnswers).forEach(value => {
        // creates answer buttons
        let btn = document.createElement('button');
        // sets its innerHTML to the value that matches
        btn.innerHTML = value;
        // adds bootstrap classes
        btn.className = "btn btn-primary col-xl-3 col-12"
        // appends each button to the quizContainer element
        quiz.appendChild(btn);
        // sets the text to match the current answers
        textContent = myQuestions[currentAnswers];
        // creates an add event listener for each button
        btn.addEventListener('click', userAnswer);
        // function for the user answering the question
        function userAnswer(event) {
            // adds to the current index
            currentQuestionIndex++;
            // checks if answer was correct and adds to the score
            if (btn.innerText === corAns) {
                score++
            }
            // if the user gets the question wrong reduce the current timer by 10 seconds
            else {
                timer = timer - 10
            };
            // checks to see if the last question has been called. if it has it calls end quiz and ends the function
            if (currentQuestionIndex >= myQuestions.length) {
                endQuiz()
                return
            }
            // if there are more questions remaining call the function again 
            else {
                getquestion()
            };
        };
    });
};
// endQuiz function that dynamically creates the form for the user to add their initials to the Score history
function endQuiz() {
    // removes all children
    while (quizContainer.lastChild) {
        quizContainer.removeChild(quizContainer.lastChild);
    }
    // ends the timer
    clearInterval(timerFunc)
    // displays how the score is broken down and shows their final score
    questionText.textContent = ("Congratulations you got " + score + " correct and had " + timer + " seconds remaining. For a combined Score of "+ (score + timer))
    // Append various parts of the form to the quiz container
    quizContainer.appendChild(formDesc)
    quizContainer.appendChild(finalScoreInput)
    quizContainer.appendChild(finalScoreBtn)
    // sets the inputs ID
    finalScoreInput.setAttribute('id', "initials")
    // sets bootstrap class
    finalScoreInput.className = "form-control"
    // creates place holder
    finalScoreInput.setAttribute('placeholder', "Initials")
    // sets for attribute
    formDesc.setAttribute("for", initials)
    // adds bootstrap class
    formDesc.className = "form-label"
    // sets text content
    formDesc.textContent = "Add your initials to our Leaderboard!"
    // add event listener for customer submission
    finalScoreBtn.addEventListener('click', addHighScore)
    // sets tex content and bootstrap classes
    finalScoreBtn.textContent = "Submit"
    finalScoreBtn.className = "btn btn-primary"
    // appends goBackBtn and sets text
    goBackBtn.textContent = "Return to home"
    document.body.appendChild(goBackBtn)

};
// Function to add user score to local storage
function addHighScore() {
    // grabs current scores from storage
    let userHighScore = JSON.parse(localStorage.getItem("previousScores"))
    // if no scores creates empty object
    if (userHighScore === null) {
        userHighScore = []
    }
    // adds user input to object
    userHighScore.push({
        userNameInput: finalScoreInput.value,
        userScore: score + timer,
    })
    // stores updated object into localStorage
    localStorage.setItem('previousScores', JSON.stringify(userHighScore))
}
// event listener for displaying scoreboard
leaderboard.addEventListener("click", displayLeaderboard);
// function for displaying leaderboard
function displayLeaderboard() {
    // removes all children of the body
    while (document.body.lastChild) {
        document.body.removeChild(document.body.lastChild);
    }
    // creates html elements and positions them on the page
    let ulEl = document.createElement('ul')
    ulEl.className = "list-group col-3"
    let leaderboardText = document.createElement('h2')
    leaderboardText.textContent = "Previous Scores"
    document.body.appendChild(ulEl)
    ulEl.appendChild(leaderboardText)
    // sets a variable for the current stored scores
    let storedScores = JSON.parse(localStorage.getItem("previousScores"))
    // if there are no scores displays a messages saying so and adds a return to home button
    if (storedScores === null){
        let noScores = document.createElement("h1")
        document.body.appendChild(noScores)
        noScores.textContent = "No current scores!"
        goBackBtn.textContent = "Return to home"
        document.body.appendChild(goBackBtn)
    }
    // creates individual line items for each current stored score
    Object.entries(storedScores).forEach(([key, value]) => {
        let liEl = document.createElement("li")
        liEl.className = "list-group-item"
        liEl.textContent = (value.userNameInput + " " + value.userScore)
        ulEl.appendChild(liEl)
    })
    // appends return to home button
    goBackBtn.textContent = "Return to home"
    document.body.appendChild(goBackBtn)
}
// This function brings the user back to the start page 
function restart() {
    window.location.href = "../montyJavascriptQuiz/index.html"
}
goBackBtn.addEventListener("click", restart)