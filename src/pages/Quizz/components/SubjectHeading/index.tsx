import accessibilityIcon from 'assets/icon-accessibility.svg';
import cssIcon from 'assets/icon-css.svg';
import htmlIcon from 'assets/icon-html.svg';
import jsIcon from 'assets/icon-js.svg';
import Badge from 'ui-library/Badge';
import { useQuizzStore } from '../../store';

type IconDictionary = {
  [key: string]: [string, string];
};

export default function SubjectHeading() {
  const subject = useQuizzStore((state) => state.subject);
  const iconDictionary: IconDictionary = {
    HTML: [htmlIcon, '#FFF1E9'],
    CSS: [cssIcon, '#E0FDEF'],
    JavaScript: [jsIcon, '#EBF0FF'],
    Accessibility: [accessibilityIcon, '#F6E7FF'],
  };

  return (
    subject && (
      <div className="d-flex" style={{ gap: '16px' }}>
        <Badge
          source={iconDictionary[subject][0]}
          backgroundColor={iconDictionary[subject][1]}
          alt="test"
        />
        <p className="align-self-center m-0">{subject}</p>
      </div>
    )
  );
}
