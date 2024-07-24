import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import StartingScreen from './StartingScreen';
import Quiz from './Quiz';

export default function QuizContainer() {
  const { quizStarted, quizFinished } = useContext(QuizContext);

  console.log(quizStarted);

  let content = <StartingScreen />;

  if (quizStarted && !quizFinished) {
    content = <Quiz />;
  }

  return (
    <div className="text-white bg-quiz-gradient flex flex-col items-center w-full md:w-9/12 rounded-lg">
      {content}
    </div>
  );
}
