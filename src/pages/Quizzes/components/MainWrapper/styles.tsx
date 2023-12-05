import styled from 'styled-components';

export const Wrapper = styled.div<{
  darkTheme: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  background-color: ${({ darkTheme, theme }) =>
    darkTheme ? theme.colors.navy : theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const Main = styled.main`
  width: calc(100% - 48px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    width: calc(100% - 280px);
  }
`;
