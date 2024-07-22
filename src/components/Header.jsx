import headerImage from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header className="my-8 mx-0 flex flex-col items-center">
      <img src={headerImage} alt="" className="w-12" />
      <h1 className="mt-8">Reactquiz</h1>
    </header>
  );
}
