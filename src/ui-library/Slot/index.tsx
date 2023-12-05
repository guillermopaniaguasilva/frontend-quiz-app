import correct from 'assets/icon-correct.svg';
import Badge from 'ui-library/Badge';
import { useQuizzStore } from '../../pages/Quizzes/store';
import { Container } from './styles';

export type SlotProps = {
  label?: string;
  text: React.ReactNode;
  iconSource?: string;
  iconText?: string;
  backgroundColor: string;
  onSelection: (value: string) => void;
  className?: string;
  value: string;
  borderColor?: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  showCorrectAnswer?: boolean;
  correctOption?: string;
  darkTheme: boolean;
};

export default function Slot({
  text,
  iconSource,
  iconText,
  backgroundColor,
  onSelection,
  label,
  className,
  value,
  icon,
  isWrong,
  showCorrectAnswer,
  correctOption,
}: SlotProps): JSX.Element {
  const darkTheme = useQuizzStore((state) => state.darkTheme);

  return (
    <Container
      darkTheme={darkTheme}
      className={className}
      onClick={() => onSelection(value)}
    >
      {iconSource ? (
        <Badge
          source={iconSource}
          alt={label}
          backgroundColor={backgroundColor}
        />
      ) : (
        <Badge backgroundColor={backgroundColor} label={iconText} />
      )}
      {text}
      {icon !== undefined && <div className="ms-auto">{icon}</div>}
      {showCorrectAnswer && !isWrong && correctOption === value && (
        <div className="ms-auto">
          <img src={correct} alt={'test'} width={32} height={32} />
        </div>
      )}
    </Container>
  );
}
