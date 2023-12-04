import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkNavy};
`;

export const BoldedTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: 500;
  color: (${({ theme }) => theme.colors.darkNavy});
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.greyNavy};
  margin-bottom: 40px;
  margin-top: 16px;
`;
