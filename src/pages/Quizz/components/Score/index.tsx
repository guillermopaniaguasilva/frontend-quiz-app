import Button from 'ui-library/Button';
import { useQuizzStore } from '../../store';
import SubjectHeading from '../SubjectHeading';
import { BoldedTitle, Number, ResultCard, Title } from './styles';

export default function Score() {
  const score = useQuizzStore((state) => state.score);

  return (
    <>
      <Title>Quiz completed</Title>
      <BoldedTitle>You scored...</BoldedTitle>
      <ResultCard className="">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex"></div>
          <SubjectHeading />
          <Number>{score}</Number>
          <p>out of 10</p>
        </div>
      </ResultCard>
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </>
  );
}