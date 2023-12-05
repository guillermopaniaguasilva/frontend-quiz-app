import styled from 'styled-components';
import { Letter } from 'ui-library/Badge/styles';
import Slot from 'ui-library/Slot';

export const StyledSlot = styled(Slot)<{
  borderColor: string;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  darkTheme: boolean;
}>`
  border: 3px solid ${({ borderColor }) => borderColor};
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};

  ${Letter} {
    color: ${({ theme, isSelected, isCorrect, isWrong }) =>
      isSelected || isCorrect || isWrong
        ? theme.colors.white
        : theme.colors.greyNavy};
  }
`;
