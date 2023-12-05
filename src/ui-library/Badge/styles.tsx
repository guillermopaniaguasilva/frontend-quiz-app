import styled from 'styled-components';

export const Container = styled.div<{
  backgroundcolor: string;
}>`
  border-radius: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

export const Letter = styled.p`
  width: 21px;
  height: 21px;
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 100%; /* 18px */
`;
