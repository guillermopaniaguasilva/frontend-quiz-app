import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import { useState } from 'react';
import { Quizz as QuizzType } from 'types/quiz';
import Slot from 'ui-library/Slot';
import DesktopLayout from 'ui-library/TwoColumnLayout';
import { useQuizzStore } from '../../store';
import Quiz from '../Quiz';
import { BoldedTitle, Description, Title } from './styles';

type HomeProps = {
  data: QuizzType;
};

const WelcomeSection = () => (
  <>
    <Title className="align-self-start">Welcome to the</Title>
    <BoldedTitle className="align-self-start">Frontend Quiz!</BoldedTitle>
    <Description className="align-self-start">
      Pick a subject to get started.
    </Description>
  </>
);

export default function Home({ data }: HomeProps): JSX.Element {
  const [selection, setSelection] = useState<string>('');
  const setSubject = useQuizzStore((state) => state.setSubject);

  const isDesktop = useIsDesktopQuery();

  if (selection !== '')
    return (
      <Quiz
        data={data.quizzes.find((quizz) => quizz.title == selection)!}
        setSubject={() => setSubject(selection)}
      />
    );

  const subjects = (
    <div className={isDesktop ? 'd-flex flex-column w-100' : ''}>
      {(data || []).quizzes.map(({ icon, title, iconBackground }) => (
        <Slot
          className={isDesktop ? 'mb-3' : 'mb-2'}
          key={title}
          iconSource={icon}
          text={title}
          backgroundColor={iconBackground}
          onSelection={setSelection}
          value={title}
        />
      ))}
    </div>
  );

  return isDesktop ? (
    <DesktopLayout>
      <WelcomeSection />
      {subjects}
    </DesktopLayout>
  ) : (
    <>
      <WelcomeSection />
      {subjects}
    </>
  );
}
