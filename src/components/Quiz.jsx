import { useContext, useEffect } from 'react';
import { QuizContext } from '../store/quiz-context';

import QuizButton from './QuizButton.jsx';
import ProgressBar from './ProgressBar.jsx';

import questions from '../data/questions.js';

const TIMER = 10000;

export default function Quiz() {
  const {
    handleQuizFinished,
    quizFinished,
    userAnswers,
    correctAnswers,
    addUserAnswer,
  } = useContext(QuizContext);

  const questionAnswerOptions = questions.map((question) => {
    return [...question.options];
  });
  const currentQuestionIndex = userAnswers.length < 10 ? userAnswers.length : 9;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      addUserAnswer(null);
    }, TIMER);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [userAnswers]);

  // console.log('userAnswers.length');
  // console.log(userAnswers.length);
  // console.log(TIMER);

  useEffect(() => {
    if (userAnswers.length === 10) {
      handleQuizFinished(true);
    }
  }, [userAnswers]);

  return (
    <>
      <ProgressBar timer={TIMER} userAnswers={userAnswers} />
      <h2 className="text-2xl text-stone-300 max-width-prose text-center mb-8 mx-2">
        {questions[currentQuestionIndex].question}
      </h2>

      {/** Quiz Buttons */}
      {questionAnswerOptions[currentQuestionIndex].map((question) => {
        return (
          <QuizButton
            key={question}
            onClick={(e) => addUserAnswer(e.target.textContent)}
          >
            {question}
          </QuizButton>
        );
      })}
    </>
  );
}
