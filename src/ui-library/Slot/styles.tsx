import styled from 'styled-components';

export const Container = styled.div<{
  darkTheme: boolean;
}>`
  display: flex;
  align-items: center;
  background: ${({ darkTheme, theme }) =>
    darkTheme ? theme.colors.navy : theme.colors.white};
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);
  border-radius: 12px;
  padding: 12px;
  gap: 16px;
  color: ${({ darkTheme, theme }) =>
    darkTheme ? theme.colors.white : theme.colors.darkNavy};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    color: ${({ theme }) => theme.colors.darkNavy};
    padding: 20px;
    font-size: 28px;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 100%; /* 28px */
  }
`;
