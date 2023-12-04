import { useState } from 'react';
import { Quizz as QuizzType } from 'types/quizz';
import Slot from 'ui-library/Slot';
import { useQuizzStore } from '.././../store';
import Quizz from '../Quizz';
import { BoldedTitle, Description, Title } from './styles';

type HomeProps = {
  data: QuizzType;
};

export default function Home({ data }: HomeProps): JSX.Element {
  const [selection, setSelection] = useState<string>('');
  const setSubject = useQuizzStore((state) => state.setSubject);

  if (selection !== '')
    return (
      <Quizz
        data={data.quizzes.find((quizz) => quizz.title == selection)!}
        setSubject={() => setSubject(selection)}
      />
    );

  return (
    <>
      <Title className="align-self-start">Welcome to the</Title>
      <BoldedTitle className="align-self-start">Frontend Quiz!</BoldedTitle>
      <Description className="align-self-start">
        Pick a subject to get started.
      </Description>

      <div className="d-flex flex-column w-100">
        {(data || []).quizzes.map(({ icon, title, iconBackground }) => (
          <Slot
            className="mb-2"
            key={title}
            iconSource={icon}
            text={title}
            backgroundColor={iconBackground}
            onSelection={setSelection}
            value={title}
          />
        ))}
      </div>
    </>
  );
}
