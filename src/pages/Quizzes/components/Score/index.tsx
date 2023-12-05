import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import Button from 'ui-library/Button';
import DesktopLayout from 'ui-library/TwoColumnLayout';
import { useQuizzStore } from '../../store';
import SubjectHeading from '../SubjectHeading';
import {
  BoldedTitle,
  Number,
  ResultCard,
  Title,
  TotalQuestions,
} from './styles';

export default function Score() {
  const score = useQuizzStore((state) => state.score);
  const isDesktop = useIsDesktopQuery();

  const title = (
    <>
      <Title className="align-self-start">Quiz completed</Title>
      <BoldedTitle className="align-self-start">You scored...</BoldedTitle>
    </>
  );

  const result = (
    <>
      <ResultCard className="mb-lg-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex"></div>
          <SubjectHeading className="mb-3" />
          <Number>{score}</Number>
          <TotalQuestions>out of 10</TotalQuestions>
        </div>
      </ResultCard>
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </>
  );

  return isDesktop ? (
    <DesktopLayout>
      {title}
      {result}
    </DesktopLayout>
  ) : (
    <>
      {title}
      {result}
    </>
  );
}
