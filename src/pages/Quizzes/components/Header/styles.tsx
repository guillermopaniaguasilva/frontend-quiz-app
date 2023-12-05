import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  padding: 16px 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc(100% - 280px);
    padding: 0;
    height: 56px;
    margin-top: 86px;
  }
`;
