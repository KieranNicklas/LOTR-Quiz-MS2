let availableQuestions = [];
let currentQuestion = {};
let questionNumber = 0;
let acceptingAnswers = true;
let score = 0;
let questions = [];

/* Function to begin the story from the home page */
function beginStory(){
    rules.classList.add('hide');
    chapters.classList.remove('hide');
}

/* Function to select the Chapter and sets first question */
function beginChapter(type) {
    if (type === 'chapterOne'){
        questions = chapter_one_questions;
    } else if (type === 'chapterTwo') {
        questions = chapter_two_questions;
    } else if (type === 'chapterThree') {
        questions = chapters_three_questions;
    }
    availableQuestions = [...questions];
    setNextQuestion();
    gameboard.classList.remove('hide');
    chapters.classList.add('hide');
}


/* Sets the next question in order of the story */
function setNextQuestion() {
    if (availableQuestions.length === 0) {
        gameboard.classList.add('hide');
        rules.classList.remove('hide');
    }
    questionNumber++;
    const questionsIndex = availableQuestions.length;
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    answers.forEach(function (option) {
        const number = option.dataset.number;
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}
