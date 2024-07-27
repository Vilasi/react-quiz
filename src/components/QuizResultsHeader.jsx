import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import QuizComplete from '../assets/quiz-complete.png';

import correctAnswerPercentages from '../utils/correctAnswerPercentages';

export default function QuizResultsHeader() {
  const { userAnswers, correctAnswers } = useContext(QuizContext);

  const {
    correctAnswerNumber,
    answersSkipped,
    correctAnswerPercentage,
    incorrectAnswerPercentage,
  } = correctAnswerPercentages(userAnswers, correctAnswers);

  return (
    <div className="w-full pt-8 flex flex-col items-center">
      <img
        className="max-w-40 border-4 p-4 rounded-full"
        src={QuizComplete}
        alt="A fancy trophy signifying your victory over that nasty nasty quiz"
      />

      <h2 className="uppercase mt-8 font-extrabold text-5xl text-[#191321]">
        Quiz Completed!
      </h2>

      <div className="w-3/4 flex justify-evenly mt-8">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-thin text-center">{answersSkipped}%</h3>
          <p className="font-thin">Skipped</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-thin text-center">
            {correctAnswerPercentage}%
          </h3>
          <p className="font-thin">Answered Correctly</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-thin text-center">
            {incorrectAnswerPercentage}%
          </h3>
          <p className="font-thin">Answered Incorrectly</p>
        </div>
      </div>

      <hr className="border-t border-stone-900 my-8 w-3/4" />
    </div>
  );
}
