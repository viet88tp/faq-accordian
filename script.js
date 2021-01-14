"use strict";

const arrows = document.querySelectorAll(".arrow");
const allQuestion = document.querySelectorAll(".question");
console.log(allQuestion);

const questions = [];
const answers = [];
for (let i = 0; i < allQuestion.length; i++) {
  questions[i] = document.querySelector(`.question-${i}`);
  answers[i] = document.querySelector(`.answer-${i}`);
}

const init = function () {
  for (let i = 0; i < allQuestion.length; i++) {
    answers[i].classList.add("answer-close");
    answers[i].classList.remove("answer-open");
    questions[i].classList.remove("question-open");
    arrows[i].classList.remove("arrow-up");
  }
};

for (let i = 0; i < allQuestion.length; i++) {
  questions[i].addEventListener("click", function () {
    if (!questions[i].classList.contains("question-open")) {
      init();
    }
    answers[i].classList.toggle("answer-open");
    answers[i].classList.toggle("answer-close");
    questions[i].classList.toggle("question-open");
    arrows[i].classList.toggle("arrow-up");
  });
}
