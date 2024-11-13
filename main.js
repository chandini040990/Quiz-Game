//defining the quiz data as an array of objects

const quizData = [
    {
        question: "What is full form of HTML?",
        a: "HYPERTEXT MARKUP LAMDA",
        b: "HYPERTEXT MARKUP LANG",
        c: "Hypertext Markup Language",
        d: "None of the above",
        correct: "c"
    },

    {
        question: "What is full form of MERN?",
        a: "MONGODB EXPRESS REACT NODE",
        b: "MEDIA EXPRESS REACT NODE",
        c: "MONGODB EXAMPLE REACT NODE",
        d: "None of the above",
        correct: "a"

    },

    {
        question: "Es6 Features",
        a: "Var, function",
        b: "let, const, rest, spread",
        c: "return, function, var",
        d: "None of the above",
        correct: "b"

    }
];

//get the references to html elements we need to manipulate,read

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");

let currentQuiz = 0; //index of current quiz question
let score = 0; //score

//function to load current quiz question and answer

function loadQuiz() {
    deselectAnswers();
    
    //retrieve the current question's answer
    const currentQuizData = quizData[currentQuiz]
    //update question text and answer question
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    feedbackEl.innerText = "";
}

//function to deselect the any selected answers
function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));//unchecking answers

}

//function to get tge Id of selected answer
function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
        
    }
    )

    return answer;
}
//load the quiz
loadQuiz();

//event listener for submit button
submitBtn.addEventListener("click", () => {

    
    //get the id of selected answer id
    const selectedAnswer = getSelected();
    //check if naswer is slecte dor not
    if (selectedAnswer) {

        const currentQuizData = quizData[currentQuiz]; // get current question

        //check if the selected answer is correct
        if (selectedAnswer === currentQuizData.correct) {
            score++; //increase score
            feedbackEl.innerText = "Correct!!";
            feedbackEl.classList.add("correct-answer");

        }
        else {
            feedbackEl.innerText = `Wrong! The correct answer is "${document.getElementById(`${currentQuizData.correct}_text`).innerText}"`;
            feedbackEl.classList.remove("correct-answer");
        }
        currentQuiz++; //move to nect question

        //delay the loading of next question
        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                loadQuiz();// load next question

            } else {
                //diaplsy final sscore and restart option
                document.getElementById("quiz").innerHTML = `
    <h2>You have answered ${score}/${quizData.length} questions correctly.</h2>
    <button onclick = "location.reload()">Restart Quiz</button>
    `;
            }
        }, 2000)

    }

}
);







