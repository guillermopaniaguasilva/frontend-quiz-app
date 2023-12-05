import darkDesktopBackground from 'assets/pattern-background-desktop-dark.svg';
import lightDesktopBackground from 'assets/pattern-background-desktop-light.svg';
import darkMobileBackground from 'assets/pattern-background-mobile-dark.svg';
import lightMobileBackground from 'assets/pattern-background-mobile-light.svg';
import { useIsDesktopQuery } from 'hooks/useMediaQuery';
import { useQuizzStore } from '../../store';
import Header from '../Header';
import { Main, Wrapper } from './styles';

type MainWrapper = {
  children: React.ReactNode;
};

export default function MainWrapper({ children }: MainWrapper) {
  const isDesktop = useIsDesktopQuery();
  const darkTheme = useQuizzStore((state) => state.darkTheme);
  const desktopBackground = darkTheme
    ? darkDesktopBackground
    : lightDesktopBackground;
  const mobileBackground = darkTheme
    ? darkMobileBackground
    : lightMobileBackground;

  const background = isDesktop ? desktopBackground : mobileBackground;
  const styles = {
    backgroundImage: `url(${background})`,
  };

  return (
    <Wrapper style={styles} darkTheme={darkTheme}>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}
