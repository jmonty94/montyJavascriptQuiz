const quizContainer = document.getElementById('quiz');
const begin = document.getElementById('begin');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');
const myQuestions = [
    {
        question: "When using an addEventListener what is the proper syntax?",

        answers: {
            a: "variable.addEventListener('click' function())",
            b: "addEventListener{click} = function",
            c: "variable.addEventListener(click, function)"

        },
        correctAnswer: 'a',
    },
    {
        question: "When using console.log where will the information being logged display?",

        answers: {
            a: "As a Window Object",
            b: "As an HTML Element",
            c: "In the console",
        },
        correctAnswer: 'c',
    },
    {
        question: '"if" statements are best used for what?',

        answers: {
            a: "To check if a condition has been met and then allowing the statement to proceed.",
            b: "To provide an input for an else statements function",
            c: "To take an input and make it into a boolean",
            d: "Allows Developers to be undecisive and let the code decide what it wants to do",
        },

        correctAnswer: 'a'
    },
    {
        question: "How do you change CSS using Javascript?",

        answers: {
            a: ".querySelector",
            b: ".getElementById",
            c: ".setStyling",
            d: ".setAttribute",
        },

        correctAnswer: "d"
    },
    {
        question: "In order to access information stored in localStorage and display it what must you do first?",

        answers: {
            a: "localStorage.displayItem",
            b: "JSON.stringify.localStorage.getItem()",
            c: "JSON.parse(localStorage.getItem()",
            d: "JSON.showMyStorage",
        },

        correctAnswer: "c"
    },
    {
        question: "What is used to separate properties of an Object?",

        answers: {
            a: ".",
            b: ",",
            c: ";",
            d: "/"
        },

        correctAnswer: "b",
    },
    {
        question: "How do you prevent a submit button from refreshing the page you are on?",

        answers: {
            a: "event.preventDefault()",
            b: "function(refresh !=== true",
            c: "confirm('would you like the page to refresh')",
            d: "prevent.eventListener()",
        },

        correctAnswer: "a",
    },
    {
        question: "What is the proper way to format an array?",
    }
]
function generateQuiz(questions, quizContainer, resultsContainer, begin) {
    function showQuestions(questions, quizContainer) {

    }

    function showResults(questions, quizContainer, resultsContainer) {

    }

    showQuestions(questions, quizContainer);

    beginButton.addEventListener('click' function () {
        showResults(questions, quizContainer, resultsContainer);
    })
};