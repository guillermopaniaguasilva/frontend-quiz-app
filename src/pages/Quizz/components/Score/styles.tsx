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
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 88px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 88px */
`;
