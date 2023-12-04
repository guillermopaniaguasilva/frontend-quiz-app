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
  return (
    <>
      <Container style={style} className={className}>
        <Bar percentage={percentage} />
      </Container>
    </>
  );
}
