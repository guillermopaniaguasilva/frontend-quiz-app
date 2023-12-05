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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
  }
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

export const Description = styled.p<{
  darkTheme: boolean;
}>`
  font-size: 14px;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-style: italic;
  color: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.white : theme.colors.greyNavy};
  margin-bottom: 40px;
  margin-top: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 48px;
  }
`;
