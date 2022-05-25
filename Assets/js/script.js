const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const questionText = document.getElementById('question');
// var time = question.length * 15
// var timerEl = document.querySelector("time")
const feedbackEl = document.getElementById('feedback')
let currentQuestionIndex = 0;
let score = 0
const removeChilds = () => {
    while (quizContainer.lastChild) {
        quizContainer.removeChild(quizContainer.lastChild);
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
function next() {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
}
startBtn.addEventListener("click", start);
function start() {
    console.log("I'm hit");
    getquestion();
}

function getquestion() {
    const currentAnswers = myQuestions[currentQuestionIndex].answers
    const corAns = currentAnswers[myQuestions[currentQuestionIndex].correctAnswer]
    questionText.textContent = myQuestions[currentQuestionIndex].question;
    removeChilds()
    Object.values(currentAnswers).forEach(value => {
        console.log(value);
        let btn = document.createElement('button');
        btn.innerHTML = value;
        quizContainer.appendChild(btn);
        textContent = myQuestions[currentAnswers];
        btn.addEventListener('click', userAnswer);
        function userAnswer(event) {
            console.log('im hit');
            console.log(event.target);
            currentQuestionIndex++;
            if (btn.innerText === corAns) {
                feedbackEl.textContent = 'Correct';
                if (currentQuestionIndex < myQuestions.length) {
                    getquestion();
                }
                else {

                }
            }
            else {
                feedbackEl.textContent = "Incorrect";
                if (currentQuestionIndex < myQuestions.length) {
                    getquestion();
                }
                else {

                }
            };

        };

    });
}