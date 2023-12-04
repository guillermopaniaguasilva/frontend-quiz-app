import styled from 'styled-components';

export const Container = styled.div<{
  backgroundColor: string;
}>`
  border-radius: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Letter = styled.p`
  width: 21px;
  height: 21px;
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;
