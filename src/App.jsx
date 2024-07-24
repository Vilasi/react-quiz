import { useState } from 'react';
import QuizContextProvider from './store/quiz-context';

import Header from './components/Header';
import QuizContainer from './components/QuizContainer';

function App() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <QuizContextProvider>
        <QuizContainer />
      </QuizContextProvider>
    </main>
  );
}

export default App;
