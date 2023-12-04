import styled from 'styled-components';

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */
`;

export const NumberOfQuestion = styled.small`
  color: ${({ theme }) => theme.colors.greyNavy};
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 12px;
`;
