export default function correctAnswerPercentages(userAnswers, correctAnswers) {
  let answersSkipped = userAnswers.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    return currentValue === null
      ? (accumulator += 1)
      : (accumulator = accumulator);
  }, 0);

  let correctAnswerNumber = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      correctAnswerNumber += 1;
    }
  }

  const correctAnswerPercentage = Math.floor(100 * (correctAnswerNumber / 10));
  const incorrectAnswerPercentage = Math.floor(
    100 * ((10 - correctAnswerNumber) / 10)
  );

  answersSkipped = Math.floor(100 * (answersSkipped / 10));
  return {
    correctAnswerNumber,
    answersSkipped,
    correctAnswerPercentage,
    incorrectAnswerPercentage,
  };
}
