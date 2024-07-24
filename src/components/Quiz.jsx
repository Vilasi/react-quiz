import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../store/quiz-context';

import questions from '../data/questions.js';

export default function Quiz() {
  const {
    handleQuizFinished,
    quizFinished,
    userAnswers,
    correctAnswer,
    addUserAnswer,
  } = useContext(QuizContext);

  // console.log('correctAnswer');
  // console.log(correctAnswer);

  const questionOptions = questions.map((question) => {
    return [...question.options];
  });

  // console.log('questionOptions');
  // console.log(questionOptions);

  const currentQuestion = userAnswers.length;
  // console.log(currentQuestion);

  console.log('userAnswer');
  console.log(userAnswers);

  // console.log('questions[currentQuestion].options[currentQuestion]');
  // console.log(questions[4].options[4]);

  // console.log('questions');
  // console.log(questions);

  return (
    <>
      <h2>{questions[currentQuestion].question}</h2>
      <button onClick={() => handleQuizFinished(true)}>Finish Game</button>
      {questionOptions[currentQuestion].map((question) => {
        return (
          <button onClick={(e) => addUserAnswer(e.target.textContent)}>
            {question}
          </button>
        );
      })}
    </>
  );
}
