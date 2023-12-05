import moonDarkIcon from 'assets/icon-moon-dark.svg';
import moonLightIcon from 'assets/icon-moon-light.svg';
import sunDarkIcon from 'assets/icon-sun-dark.svg';
import sunLightIcon from 'assets/icon-sun-light.svg';
import { useQuizzStore } from '../../store';
import { StyledSwitch } from './styles';

export default function UiThemToggler() {
  const darkTheme = useQuizzStore((state) => state.darkTheme);
  const switchDarkTheme = useQuizzStore((state) => state.switchDarkTheme);

  const moonIcon = darkTheme ? moonLightIcon : moonDarkIcon;
  const sunIcon = darkTheme ? sunLightIcon : sunDarkIcon;

  return (
    <div className="d-flex align-items-center ms-auto" style={{ gap: '8px' }}>
      <img src={sunIcon} alt="SunIcon" width={16} height={16} />
      <StyledSwitch className="form-check form-switch m-0 d-flex justify-content-center">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={switchDarkTheme}
        />
      </StyledSwitch>
      <img src={moonIcon} alt="MoonIcon" width={16} height={16} />
    </div>
  );
}
