import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import StartingScreen from './StartingScreen';

export default function Quiz() {
  const { quizStarted } = useContext(QuizContext);

  console.log(quizStarted);

  return (
    <div className="text-white bg-quiz-gradient flex flex-col items-center w-full md:w-9/12 rounded-lg">
      <StartingScreen />
    </div>
  );
}
