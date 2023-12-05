import { useQuizzStore } from '../../pages/Quizzes/store';
import { Bar, Container } from './styles';

type ProgressBarProps = {
  percentage: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ProgressBar({
  percentage,
  className,
  style,
}: ProgressBarProps) {
  const darkTheme = useQuizzStore((state) => state.darkTheme);

  return (
    <>
      <Container darkTheme={darkTheme} style={style} className={className}>
        <Bar percentage={percentage} />
      </Container>
    </>
  );
}
