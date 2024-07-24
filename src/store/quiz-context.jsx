import { createContext, useReducer } from 'react';

//! Quiz Context Template
export const QuizContext = createContext({
  userAnswer: [],
  correctAnswer: [],
  quizStarted: Boolean,
  quizFinished: Boolean,
  handleStartQuiz: () => {},
  handleQuizFinished: () => {},
});

//! useReducer function
function quizReducer(state, action) {
  if (action.type === 'START_QUIZ') {
    return {
      ...state,
      quizStarted: action.payload,
    };
  }

  if (action.type === 'FINISH_QUIZ') {
    return {
      ...state,
      quizFinished: action.payload,
    };
  }
}

//! Start Context Function
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

  function handleQuizFinished(quizStatus) {
    console.log('quizStatus');
    console.log(quizStatus);
    if (quizStatus) {
      quizDispatch({
        type: 'FINISH_QUIZ',
        payload: quizStatus,
      });
    }
  }

  const contextValue = {
    userAnswer: quizState.userAnswer,
    correctAnswer: quizState.correctAnswer,
    quizStarted: quizState.quizStarted,
    quizFinished: quizState.quizFinished,
    handleStartQuiz: handleStartQuiz,
    handleQuizFinished: handleQuizFinished,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
