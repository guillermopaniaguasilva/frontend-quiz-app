import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: 300;
  color: (${({ theme }) => theme.colors.darkNavy});
`;

export const BoldedTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 100%;
  font-weight: 500;
  color: (${({ theme }) => theme.colors.darkNavy});
`;

export const ResultCard = styled.div`
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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 564px;
    padding: 48px;
    height: 388px;
    justify-content: center;
  }
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 88px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 88px */
`;

export const TotalQuestions = styled.small`
  color: ${({ theme }) => theme.colors.greyNavy};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;

export const ResultWrapper = styled.div`
  width: 100%;
  opacity: 0; /* Set initial opacity to 0 */
  transition: opacity 1s ease-in; /* Add transition for opacity */

  &.fade-in {
    opacity: 1;
  }
`;
