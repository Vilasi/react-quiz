export default function QuizButton({ children, ...props }) {
  const buttonClasses =
    'py-4 px-8 mt-4 mb-6 rounded-full bg-quiz-buttons w-9/12 text-lg text-stone-50 drop-shadow-lg';

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
