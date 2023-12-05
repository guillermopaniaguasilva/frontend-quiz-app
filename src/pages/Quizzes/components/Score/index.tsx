import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { Button, TwoColumnLayout as DesktopLayout } from 'ui-library/index';
import { useQuizzStore } from '../../store';
import SubjectHeading from '../SubjectHeading';
import {
  BoldedTitle,
  Number,
  ResultCard,
  ResultWrapper,
  Title,
  TotalQuestions,
} from './styles';

export default function Score() {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const score = useQuizzStore((state) => state.score);
  const darkTheme = useQuizzStore((state) => state.darkTheme);
  const isDesktop = useIsDesktopQuery();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const title = (
    <>
      <Title darkTheme={darkTheme} className="align-self-start">
        Quiz completed
      </Title>
      <BoldedTitle darkTheme={darkTheme} className="align-self-start">
        You scored...
      </BoldedTitle>
    </>
  );

  const result = (
    <>
      <ResultCard darkTheme={darkTheme} className="mb-lg-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex"></div>
          <SubjectHeading className="mb-3" />
          <Number darkTheme={darkTheme}>{score}</Number>
          <TotalQuestions darkTheme={darkTheme}>out of 10</TotalQuestions>
        </div>
      </ResultCard>
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </>
  );

  return (
    <ResultWrapper className={`${fadeIn ? 'fade-in' : ''}`}>
      {isDesktop ? (
        <DesktopLayout>
          {title}
          {result}
        </DesktopLayout>
      ) : (
        <>
          {title}
          {result}
        </>
      )}
    </ResultWrapper>
  );
}
