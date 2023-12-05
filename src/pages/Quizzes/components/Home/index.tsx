import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import { useState } from 'react';
import { Quizz as QuizzType } from 'types/quiz';
import { TwoColumnLayout as DesktopLayout, Slot } from 'ui-library/index';
import { useQuizzStore } from '../../store';
import Quiz from '../Quiz';
import { BoldedTitle, Description, Title } from './styles';

type HomeProps = {
  data: QuizzType;
};

export default function Home({ data }: HomeProps): JSX.Element {
  const [selection, setSelection] = useState<string>('');
  const setSubject = useQuizzStore((state) => state.setSubject);
  const darkTheme = useQuizzStore((state) => state.darkTheme);
  const isDesktop = useIsDesktopQuery();

  if (selection !== '')
    return (
      <Quiz
        data={data.quizzes.find((quizz) => quizz.title == selection)!}
        setSubject={() => setSubject(selection)}
      />
    );

  const WelcomeSection = () => (
    <>
      <Title darkTheme={darkTheme} className="align-self-start">
        Welcome to the
      </Title>
      <BoldedTitle darkTheme={darkTheme} className="align-self-start">
        Frontend Quiz!
      </BoldedTitle>
      <Description darkTheme={darkTheme} className="align-self-start">
        Pick a subject to get started.
      </Description>
    </>
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
          darkTheme={darkTheme}
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
