import styled from 'styled-components';

export const Subject = styled.p<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 100%; /* 18px */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
    line-height: 100%; /* 28px */
  }
`;
