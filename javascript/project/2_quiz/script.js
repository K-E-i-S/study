'use strict';

const quizData = [
    {
        question: 'How old is the author?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correnct: 'c',
    },
    {
        question: "Author's favorite programming language",
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavScript',
        correnct: 'd'
    },
    {
        question: "where is the author's from ?",
        a: 'US',
        b: 'RU',
        c: 'JP',
        d: 'UK',
        correnct: 'c'
    },
    {
        question: 'what does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Hyper Markup Language',
        c: 'Hypertext Markdown Language',
        d: 'Hypertoken Markup Language',
        correnct: 'a'

    }


];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const bottom = document.getElementById('quizButtom'); 

let currentQuiz = 0;
let score = 0;
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    question.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


};

function getSelected() {
    const answers = document.querySelectorAll('.answer');
    let answer = undefined;
    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        };
    });
    return answer;
};

function checkAnswer(answer) {
    if (answer) {
        if (answer === quizData[currentQuiz].correnct) {
            currentQuiz++;
            score++;
        } else {
            return alert("that is wrong");

        }
    } else {
        return alert('check please');
     }
}


bottom.addEventListener('click', () => {
    let ans = getSelected();
    checkAnswer(ans);

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        currentQuiz = 0;
        loadQuiz();
    }
});

loadQuiz();
