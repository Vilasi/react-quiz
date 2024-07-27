import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

import questions from '../data/questions.js';

import QuizResultsHeader from './QuizResultsHeader';

export default function QuizResults() {
  const { userAnswers, correctAnswers } = useContext(QuizContext);

  return (
    <>
      <QuizResultsHeader />

      <div className="w-full flex flex-col items-center">
        {userAnswers.map((answer, index) => {
          return (
            <>
              <div
                class="w-10 h-10 bg-quiz-result-numbers rounded-full flex items-center justify-center"
                key={index}
              >
                <span class="text-white"> {index + 1}</span>
              </div>

              <div className="pb-8 pt-4 mb-8 flex flex-col items-center">
                <p className="text-xl mb-4">{questions[index].question}</p>
                <p
                  className={
                    answer === questions[index].answer
                      ? 'text-lg font-semibold text-green-800'
                      : 'text-lg font-semibold text-red-800'
                  }
                >
                  {answer ? answer : 'Skipped'}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
