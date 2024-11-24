const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },
    {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",
    },
    {
        question: "Which company developed the Java programming language?",
        ans1text: "Microsoft",
        ans2text: "Apple",
        ans3text: "Oracle",
        ans4text: "Google",
        answer: "Oracle",
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        ans1text: "C",
        ans2text: "JavaScript",
        ans3text: "Java",
        ans4text: "Python",
        answer: "JavaScript",
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        ans1text: "Angular",
        ans2text: "React",
        ans3text: "Vue",
        ans4text: "Django",
        answer: "Django",
    },
    {
        question: "What does CSS stand for?",
        ans1text: "Cascading Style Sheets",
        ans2text: "Computer Style Sheets",
        ans3text: "Creative Style Sheets",
        ans4text: "Coded Style Sheets",
        answer: "Cascading Style Sheets",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        ans1text: "<a>",
        ans2text: "<link>",
        ans3text: "<href>",
        ans4text: "<hyperlink>",
        answer: "<a>",
    },
    {
        question: "Which CSS property is used to change the background color?",
        ans1text: "color",
        ans2text: "background-color",
        ans3text: "bg-color",
        ans4text: "background",
        answer: "background-color",
    },
    {
        question: "Which programming language is used for iOS mobile development?",
        ans1text: "Swift",
        ans2text: "Objective-C",
        ans3text: "C++",
        ans4text: "Java",
        answer: "Swift",
    },
    {
        question: "Who is the founder of Microsoft?",
        ans1text: "Steve Jobs",
        ans2text: "Mark Zuckerberg",
        ans3text: "Bill Gates",
        ans4text: "Elon Musk",
        answer: "Bill Gates",
    },
    {
        question: "What is the main purpose of Git?",
        ans1text: "Text editing",
        ans2text: "Version control",
        ans3text: "Project management",
        ans4text: "Database management",
        answer: "Version control",
    },
    {
        question: "What does API stand for?",
        ans1text: "Application Programming Interface",
        ans2text: "Automated Program Interface",
        ans3text: "Apple Programming Interface",
        ans4text: "Advanced Program Interface",
        answer: "Application Programming Interface",
    },
    {
        question: "Which of the following is the latest version of HTML?",
        ans1text: "HTML4",
        ans2text: "HTML5",
        ans3text: "HTML6",
        ans4text: "HTML3",
        answer: "HTML5",
    },
    {
        question: "What is the default value of the position property in CSS?",
        ans1text: "absolute",
        ans2text: "relative",
        ans3text: "static",
        ans4text: "fixed",
        answer: "static",
    },
    {
        question: "Which programming language is used for Android mobile development?",
        ans1text: "Swift",
        ans2text: "Objective-C",
        ans3text: "Kotlin",
        ans4text: "Java",
        answer: "Kotlin",
    },
    {
        question: "What does DOM stand for in web development?",
        ans1text: "Document Object Model",
        ans2text: "Digital Online Media",
        ans3text: "Dynamic Open Method",
        ans4text: "Data Object Model",
        answer: "Document Object Model",
    },
 
];

// Shuffle the quiz questions array to display random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

shuffleArray(quiz); // Shuffle the questions

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");
const scoreDisplay = document.getElementById("score-display");
const scoreElement = document.getElementById("score");
const totalQuestions = document.getElementById("total-questions");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    question.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;
}

loadQuestion(); // Load the first question

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');

    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion(); // Load the next question
            checkedAns.checked = false;
        } else {
            // Display the score
            scoreElement.textContent = score;
            totalQuestions.textContent = quiz.length;
            scoreDisplay.style.display = "block"; // Show score display
            submit.style.display = "none"; // Hide the submit button
        }
    }
});
