import { Container, Letter } from './styles';

type BadgeProps = {
  source?: string;
  alt?: string;
  backgroundColor: string;
  label?: string;
};

export default function Badge({
  source,
  alt,
  backgroundColor,
  label,
}: BadgeProps): JSX.Element {
  return (
    <Container backgroundcolor={backgroundColor}>
      {source ? (
        <img src={source} alt={alt} width={21} height={21} />
      ) : (
        <Letter>{label}</Letter>
      )}
    </Container>
  );
}
