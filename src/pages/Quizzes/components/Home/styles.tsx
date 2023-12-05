import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.extraLight};
  color: ${({ theme }) => theme.colors.darkNavy};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;

export const BoldedTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: (${({ theme }) => theme.colors.darkNavy});
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-style: italic;
  color: ${({ theme }) => theme.colors.greyNavy};
  margin-bottom: 40px;
  margin-top: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 48px;
  }
`;
