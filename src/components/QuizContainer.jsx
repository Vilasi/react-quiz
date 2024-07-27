import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import StartingScreen from './StartingScreen';
import Quiz from './Quiz';
import QuizResults from './QuizResults';

export default function QuizContainer() {
  const { quizStarted, quizFinished, userAnswers } = useContext(QuizContext);

  console.log('userAnswers');
  console.log(userAnswers);

  let content = <StartingScreen />;

  // Quiz Started
  if (quizStarted && !quizFinished) {
    content = <Quiz />;
  }

  // Quiz Finished/Results Screen
  if (!quizStarted && quizFinished) {
    content = <QuizResults />;
  }

  let divClasses =
    'text-white bg-quiz-gradient flex flex-col items-center w-full md:w-9/12 rounded-lg pb-8 drop-shadow-2xl';

  if (quizFinished) {
    divClasses =
      'text-white bg-quiz-results flex flex-col items-center w-full md:w-9/12 rounded-lg pb-8 drop-shadow-2xl';
  }

  return <div className={divClasses}>{content}</div>;
}
