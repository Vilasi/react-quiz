import { createContext, useReducer } from 'react';

export const QuizContext = createContext({
  userAnswer: [],
  correctAnswer: [],
  quizStarted: Boolean,
  quizFinished: Boolean,
  handleStartQuiz: () => {},
});

function quizReducer(state, action) {
  if (action.type === 'START_QUIZ') {
    return {
      ...state,
      quizStarted: action.payload,
    };
  }
}

export default function QuizContextProvider({ children }) {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    userAnswer: [],
    correctAnswer: [],
    quizStarted: false,
    quizFinished: false,
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
    quizFinished: quizState.quizFinished,
    handleStartQuiz: handleStartQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
