import styled from 'styled-components';

export const Title = styled.h1<{
  darkTheme: boolean;
}>`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.extraLight};
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
`;

export const BoldedTitle = styled.span<{
  darkTheme: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
`;

export const ResultCard = styled.div<{
  darkTheme: boolean;
}>`
  width: 100%;
  height: 242px;
  padding: 32px;
  margin-top: 40px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.navy : theme.colors.white};
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 564px;
    padding: 48px;
    height: 388px;
    justify-content: center;
  }
`;

export const Number = styled.p<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
  font-size: 88px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 100%; /* 88px */
`;

export const TotalQuestions = styled.small<{
  darkTheme: boolean;
}>`
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.lightBluish : theme.colors.greyNavy};
  font-size: 24px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 150%; /* 36px */
`;

export const ResultWrapper = styled.div`
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in;

  &.fade-in {
    opacity: 1;
  }
`;
