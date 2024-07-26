import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import QuizComplete from '../assets/quiz-complete.png';

export default function QuizResults() {
  const { userAnswers, correctAnswers } = useContext(QuizContext);

  return (
    <div className="pt-8 flex flex-col items-center">
      <img
        className="max-w-40 border-4 p-4 rounded-full"
        src={QuizComplete}
        alt=""
      />

      <h2 className="uppercase mt-8 font-extrabold text-5xl text-[#191321]">
        Quiz Completed!
      </h2>
    </div>
  );
}
