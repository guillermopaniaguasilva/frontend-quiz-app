import { useEffect, useState } from 'react';
import { QuizzCategory as QuizCategory } from 'types/quiz';
import Question from '../Question';
import Score from '../Score';

type QuizProps = {
  data: QuizCategory;
  setSubject: () => void;
};

export default function Quiz({ data, setSubject }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    setSubject && setSubject();
  }, [setSubject]);

  if (currentQuestion === 10) return <Score />;

  return (
    <Question
      data={data.questions[currentQuestion]}
      onNextQuestion={() => setCurrentQuestion(currentQuestion + 1)}
      questionNumber={currentQuestion + 1}
    />
  );
}
