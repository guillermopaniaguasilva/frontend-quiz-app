import styled from 'styled-components';

export const Title = styled.h4<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
  font-size: 20px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 120%; /* 24px */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 36px;
    line-height: 120%; /* 43.2px */
    margin-top: 27px;
  }
`;

export const NumberOfQuestion = styled.small<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.lightBluish : theme.colors.greyNavy};
  font-size: 14px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 150%; /* 21px */
  margin-bottom: 12px;
`;

export const ErrorMessage = styled.p<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.red};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 100%; /* 18px */
  gap: 8px;
`;

export const QuestionContainer = styled.div`
  &.fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
  }
  &.fade-enter-active,
  &.fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`;
