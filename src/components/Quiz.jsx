import StartingScreen from './StartingScreen';

export default function Quiz({ quiz }) {
  return (
    <div className="text-white bg-quiz-gradient flex flex-col items-center w-full md:w-9/12 rounded-lg">
      <StartingScreen quiz={quiz} />
    </div>
  );
}
