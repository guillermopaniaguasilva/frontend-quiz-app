import lightDesktopBackground from 'assets/pattern-background-desktop-light.svg';
import lightMobileBackground from 'assets/pattern-background-mobile-light.svg';
import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import Header from '../Header';
import { Main } from './styles';

type MainWrapper = {
  children: React.ReactNode;
};

export default function MainWrapper({ children }: MainWrapper) {
  const isDesktop = useIsDesktopQuery();

  const background = isDesktop ? lightDesktopBackground : lightMobileBackground;
  const styles = {
    backgroundImage: `url(${background})`,
  };

  return (
    <Main style={styles}>
      <Header />
      <main style={{ width: 'calc(100% - 48px)' }}>{children}</main>
    </Main>
  );
}
