import { Bar, Container } from './styles';

type ProgressBarProps = {
  percentage: number;
};

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <>
      <Container>
        <Bar percentage={percentage} />
      </Container>
    </>
  );
}
