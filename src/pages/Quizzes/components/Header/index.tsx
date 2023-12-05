import SubjectHeading from '../SubjectHeading';
import UiThemToggler from '../UiThemeToggler';
import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <SubjectHeading />
      <UiThemToggler />
    </HeaderContainer>
  );
}
