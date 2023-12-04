import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { QuizzQuestion } from 'types/quizz';
import Button from 'ui-library/Button';
import ProgressBar from 'ui-library/ProgressBar';
import QuestionOption from 'ui-library/QuestionOption';
import { useQuizzStore } from '../../pages/Quizz/store';
import { NumberOfQuestion, QuestionContainer, Title } from './styles';

type QuestionProps = {
  data: QuizzQuestion;
  onNextQuestion: () => void;
  questionNumber: number;
};

export default function Question({
  data,
  onNextQuestion,
  questionNumber,
}: QuestionProps): JSX.Element {
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [hasSubittedAnswer, setHasSubmitted] = useState<boolean>(false);

  const increaseScore = useQuizzStore((state) => state.increaseScore);
  const score = useQuizzStore((state) => state.score);
  const { question, answer, options } = data;
  const correctOption = options.find((option) => option === answer);

  const currentQuestionRef = useRef<HTMLDivElement>(null);
  const nextQuestionRef = useRef<HTMLDivElement>(null);

  const nodeRef = hasSubittedAnswer ? nextQuestionRef : currentQuestionRef;

  const onSubmitAnswer = () => {
    if (selectedQuestion === answer) {
      setIsAnswerCorrect(true);
      setIsAnswerWrong(false);
      increaseScore(score);
    } else {
      setIsAnswerCorrect(false);
      setIsAnswerWrong(true);
      setShowCorrectAnswer(true);
    }
    setHasSubmitted(true);
  };

  const goToNextQuestion = () => {
    // reset state
    setHasSubmitted(false);
    setIsAnswerCorrect(false);
    setIsAnswerWrong(false);
    setShowCorrectAnswer(false);

    onNextQuestion();
  };

  const possibleAnswers = (options || []).map((option, i) => {
    const options = ['A', 'B', 'C', 'D'];
    return (
      <QuestionOption
        key={i}
        className="mb-2"
        backgroundColor="#F4F6FA"
        iconText={options[i]}
        text={option}
        value={option}
        onSelection={() => setSelectedQuestion(option)}
        isSelected={selectedQuestion === option}
        isCorrect={isAnswerCorrect && selectedQuestion === option}
        isWrong={isAnswerWrong && selectedQuestion === option}
        showCorrectAnswer={showCorrectAnswer}
        correctOption={correctOption}
      />
    );
  });

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={questionNumber}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          if (nodeRef.current)
            nodeRef.current.addEventListener('transitionend', done, false);
        }}
        classNames="fade"
      >
        <QuestionContainer className="w-100" ref={nodeRef}>
          <NumberOfQuestion>{`Question ${questionNumber} of 10`}</NumberOfQuestion>
          <Title>{question}</Title>
          <ProgressBar percentage={+questionNumber * 10} />
          {possibleAnswers}
          {!hasSubittedAnswer ? (
            <Button onClick={onSubmitAnswer}>Submit Answer</Button>
          ) : +questionNumber === 10 ? (
            <Button onClick={goToNextQuestion}>See Results</Button>
          ) : (
            <Button onClick={goToNextQuestion}>Next Question</Button>
          )}
        </QuestionContainer>
      </CSSTransition>
    </SwitchTransition>
  );
}
