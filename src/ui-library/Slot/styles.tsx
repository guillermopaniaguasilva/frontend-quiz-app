import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);
  border-radius: 12px;
  padding: 12px;
  gap: 16px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    color: ${({ theme }) => theme.colors.darkNavy};
    padding: 20px;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 28px */
  }
`;
