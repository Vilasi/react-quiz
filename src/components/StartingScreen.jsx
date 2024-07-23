import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

export default function StartingScreen() {
  const { handleStartQuiz } = useContext(QuizContext);
  function handleClick() {
    console.log('h1');
  }

  let content = (
    <>
      <h2 className="text-4xl text-center text-stone-200 font-semibold mt-8 mb-4">
        Test your React knowledge!
      </h2>

      <p className="max-w-prose text-center mb-2 text-stone-300">
        You will have 10 seconds per question.
      </p>
      <p className="max-w-prose text-center mb-2 text-stone-300">
        There is only one correct answer.
      </p>
      <p className="max-w-prose text-center mb-2 text-stone-300">Good luck!</p>

      <button
        onClick={handleStartQuiz}
        className="py-4 px-8 mt-4 mb-6 rounded-full bg-begin-quiz"
      >
        Begin Quiz!
      </button>
    </>
  );

  return <>{content}</>;
}
