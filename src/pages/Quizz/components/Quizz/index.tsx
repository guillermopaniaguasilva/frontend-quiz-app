import { useEffect, useState } from 'react';
import { QuizzCategory } from 'types/quizz';
import Question from 'ui-library/Question';
import Score from '../Score';

type QuizzProps = {
  data: QuizzCategory;
  setSubject: () => void;
};

export default function Quizz({ data, setSubject }: QuizzProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    setSubject && setSubject();
  }, [setSubject]);

  if (currentQuestion === 0) return <Score />;

  return (
    <Question
      data={data.questions[currentQuestion]}
      onNextQuestion={() => setCurrentQuestion(currentQuestion + 1)}
      questionNumber={currentQuestion + 1}
    />
  );
}
