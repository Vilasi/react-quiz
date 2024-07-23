import { useState } from 'react';

import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  const [quiz, setQuiz] = useState(false);

  return (
    <main className="flex flex-col items-center">
      <Header />
      <Quiz quiz={quiz} />
    </main>
  );
}

export default App;
