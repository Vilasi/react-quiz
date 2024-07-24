import { createContext, useReducer } from 'react';

import questions from '../data/questions.js';

//! Quiz Context Template
export const QuizContext = createContext({
  userAnswer: [],
  correctAnswer: [],
  quizStarted: Boolean,
  quizFinished: Boolean,
  handleStartQuiz: () => {},
  handleQuizFinished: () => {},
  addUserAnswer: () => {},
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

  if (action.type === 'ADD_ANSWER') {
    const userAnswers = [...state.userAnswers];
    userAnswers.push(action.payload);

    return {
      ...state,
      userAnswers: userAnswers,
    };
  }
}

//! Start Context Function
export default function QuizContextProvider({ children }) {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    userAnswers: [],
    correctAnswer: questions.map((question) => question.answer),
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
    // console.log('quizStatus');
    // console.log(quizStatus);
    if (quizStatus) {
      quizDispatch({
        type: 'FINISH_QUIZ',
        payload: quizStatus,
      });
    }
  }

  function addUserAnswer(answer) {
    quizDispatch({
      type: 'ADD_ANSWER',
      payload: answer,
    });
  }

  const contextValue = {
    userAnswers: quizState.userAnswers,
    correctAnswer: quizState.correctAnswer,
    quizStarted: quizState.quizStarted,
    quizFinished: quizState.quizFinished,
    handleStartQuiz: handleStartQuiz,
    handleQuizFinished: handleQuizFinished,
    addUserAnswer: addUserAnswer,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
