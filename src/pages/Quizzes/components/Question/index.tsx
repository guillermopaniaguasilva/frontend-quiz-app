import iconError from 'assets/icon-error.svg';
import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { QuizzQuestion } from 'types/quiz';
import {
  Button,
  TwoColumnLayout as DesktopLayout,
  ProgressBar,
  QuestionOption,
} from 'ui-library/index';
import { useQuizzStore } from '../../store';
import {
  ErrorMessage,
  NumberOfQuestion,
  QuestionContainer,
  Title,
} from './styles';

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
  const [isAnswerRequiredError, setIsAnswerRequiredError] =
    useState<boolean>(false);

  const increaseScore = useQuizzStore((state) => state.increaseScore);
  const score = useQuizzStore((state) => state.score);
  const { question, answer, options } = data;
  const correctOption = options.find((option) => option === answer);

  const currentQuestionRef = useRef<HTMLDivElement>(null);
  const nextQuestionRef = useRef<HTMLDivElement>(null);

  const nodeRef = hasSubittedAnswer ? nextQuestionRef : currentQuestionRef;

  const isDesktop = useIsDesktopQuery();

  const onSubmitAnswer = () => {
    if (selectedQuestion === '') return setIsAnswerRequiredError(true);
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
    setSelectedQuestion('');
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
        onSelection={() => {
          setIsAnswerRequiredError(false);
          setSelectedQuestion(option);
        }}
        isSelected={selectedQuestion === option}
        isCorrect={isAnswerCorrect && selectedQuestion === option}
        isWrong={isAnswerWrong && selectedQuestion === option}
        showCorrectAnswer={showCorrectAnswer}
        correctOption={correctOption}
      />
    );
  });

  const errorMessage = isAnswerRequiredError && (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <img src={iconError} alt="AnswerRequiredError" width={32} height={32} />
      <ErrorMessage className="m-0">Please select an answer</ErrorMessage>
    </div>
  );

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
          {/* this changes */}
          {isDesktop ? (
            <DesktopLayout>
              <>
                <NumberOfQuestion>{`Question ${questionNumber} of 10`}</NumberOfQuestion>
                <Title>{question}</Title>
                <ProgressBar
                  style={{ marginTop: '164px', marginBottom: '40px' }}
                  percentage={+questionNumber * 10}
                />
              </>
              <>
                {possibleAnswers}
                {!hasSubittedAnswer ? (
                  <Button onClick={onSubmitAnswer}>Submit Answer</Button>
                ) : +questionNumber === 10 ? (
                  <Button onClick={goToNextQuestion}>See Results</Button>
                ) : (
                  <Button onClick={goToNextQuestion}>Next Question</Button>
                )}
                {errorMessage}
              </>
            </DesktopLayout>
          ) : (
            <>
              <NumberOfQuestion>{`Question ${questionNumber} of 10`}</NumberOfQuestion>
              <Title>{question}</Title>
              <ProgressBar
                style={{ marginTop: '24px', marginBottom: '40px' }}
                percentage={+questionNumber * 10}
              />
              {possibleAnswers}
              {!hasSubittedAnswer ? (
                <Button onClick={onSubmitAnswer}>Submit Answer</Button>
              ) : +questionNumber === 10 ? (
                <Button onClick={goToNextQuestion}>See Results</Button>
              ) : (
                <Button onClick={goToNextQuestion}>Next Question</Button>
              )}
              {errorMessage}
            </>
          )}

          {/* up to here */}
        </QuestionContainer>
      </CSSTransition>
    </SwitchTransition>
  );
}
