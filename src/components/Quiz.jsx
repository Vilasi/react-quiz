import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';

export default function Quiz() {
  const { handleQuizFinished, quizFinished } = useContext(QuizContext);
  console.log('Quiz Finished');
  console.log(quizFinished);

  return (
    <>
      <h1>Hi</h1>
      <button onClick={() => handleQuizFinished(true)}>Finish Game</button>
    </>
  );
}
