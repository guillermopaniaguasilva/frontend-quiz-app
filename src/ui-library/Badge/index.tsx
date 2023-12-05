import { useIsDesktopQuery } from 'hooks/useMediaQuery';
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
  const isDesktop = useIsDesktopQuery();

  return (
    <Container backgroundcolor={backgroundColor}>
      {source ? (
        <img
          src={source}
          alt={alt}
          width={isDesktop ? 56 : 21}
          height={isDesktop ? 56 : 21}
        />
      ) : (
        <Letter>{label}</Letter>
      )}
    </Container>
  );
}
