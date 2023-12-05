import styled from 'styled-components';

export const Subject = styled.p`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
    line-height: 100%; /* 28px */
  }
`;
