import { createContext, useReducer } from 'react';

export const QuizContext = createContext({
  userAnswer: [],
  correctAnswer: [],
  quizStarted: Boolean,
  handleStartQuiz: () => {},
});

function quizReducer(state, action) {
  if (action.type === 'START_QUIZ') {
    return {
      userAnswer: [...state.userAnswer],
      correctAnswer: [...state.correctAnswer],
      quizStarted: action.payload,
    };
  }
}

export default function QuizContextProvider({ children }) {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    userAnswer: [],
    correctAnswer: [],
    quizStarted: false,
  });

  function handleStartQuiz() {
    quizDispatch({
      type: 'START_QUIZ',
      payload: true,
    });
  }

  const contextValue = {
    userAnswer: quizState.userAnswer,
    correctAnswer: quizState.correctAnswer,
    quizStarted: quizState.quizStarted,
    handleStartQuiz: handleStartQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
